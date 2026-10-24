#!/usr/bin/env node
/**
 * i18n:comments — inventory candidate annotation blocks and promote accepted ones.
 *
 * Why "candidate": not every <details>/container/blockquote is a Yuorb editor's
 * annotation. This script only INVENTORIES candidates; a human reviews and marks
 * `status: "accepted"`. Only accepted candidates receive a cid and land in
 * `i18n/comments/<chapter>.jsonl`.
 *
 * Usage:
 *   node scripts/i18n-comments.mjs --scan
 *   node scripts/i18n-comments.mjs --list
 *   node scripts/i18n-comments.mjs --accept 02-c001,02-c002
 *   node scripts/i18n-comments.mjs --reject 02-c003
 *   node scripts/i18n-comments.mjs --finalize
 *
 * Notes:
 * - Candidate bodies are stored raw; no HTML/markdown escaping.
 * - The English markdown is never modified (extraction only).
 * - cids are registered in src/.vuepress/i18n/id-registry.json on finalize.
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, mkdirSync, unlinkSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = process.cwd()
const EN_DOCS = join(ROOT, 'src', 'en', 'docs')
const REGISTRY = join(ROOT, 'src', '.vuepress', 'i18n', 'id-registry.json')
const OUT_DIR = join(ROOT, 'i18n', 'comments')
const ALPHABET = '0123456789abcdefghjkmnpqrstvwxyz'
const CID_PREFIX = 'c-'
const CID_LEN = 10
const PID_LINE_RE = /^<!--\s*#(p-[a-z0-9]{10})\s*-->$/
const PID_RE = /^p-[a-z0-9]{10}$/
const CID_RE = /^c-[a-z0-9]{10}$/
const ALLOWED_KINDS = new Set(['suggest', 'revise', 'add', 'comment'])
const ALLOWED_FORMS = new Set(['tip', 'note', 'warning', 'info', 'important', 'caution', 'details', 'blockquote', 'html-comment'])
const ROLE_BY_KIND = {
  suggest: { author: 'Yuorb', authorRole: 'editor' },
  revise: { author: 'L.C.D.', authorRole: 'revisor' },
  add: { author: 'JQ', authorRole: 'official' },
  comment: { author: 'L.C.D.', authorRole: 'commentator' },
}
const FORM_ALIASES = { danger: 'caution' }
const FORM_BY_KIND = { suggest: 'tip', revise: 'warning', add: 'note', comment: 'note' }

const args = process.argv.slice(2)
const has = (flag) => args.includes(flag)
const valueOf = (flag) => {
  const i = args.indexOf(flag)
  return i >= 0 ? args[i + 1] : null
}

/** @returns {string} a Crockford base32 cid */
function generateCid() {
  const bytes = new Uint8Array(CID_LEN)
  crypto.getRandomValues(bytes)
  let id = ''
  for (let i = 0; i < CID_LEN; i++) id += ALPHABET[bytes[i] % ALPHABET.length]
  return CID_PREFIX + id
}

/** P1a scope: top-level chapter files only. Fragments/_slides are excluded to avoid chapter-key collisions. */
function listChapterFiles() {
  return readdirSync(EN_DOCS)
    .filter((name) => name.endsWith('.md'))
    .map((name) => join(EN_DOCS, name))
}

function loadRegistry() {
  try {
    return JSON.parse(readFileSync(REGISTRY, 'utf8'))
  } catch {
    return { version: '1.0.0', generatedAt: new Date().toISOString(), entries: {} }
  }
}

function saveRegistry(reg) {
  reg.generatedAt = new Date().toISOString()
  writeFileSync(REGISTRY, JSON.stringify(reg, null, 2) + '\n', 'utf8')
}

function ensureOutDir() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })
}

/** nearest preceding pid marker line index, or -1 */
function findPrecedingPid(lines, startIdx) {
  for (let i = startIdx - 1; i >= 0; i--) {
    const t = lines[i].trim()
    if (!t) continue
    if (t === '---') break
    const m = t.match(PID_LINE_RE)
    if (m) return { pid: m[1], line: i }
    if (t.startsWith('#') || t.startsWith(':::')) break
  }
  return { pid: null, line: -1 }
}

/** Extract the matching closing line for <details> or ::: container. */
function findBlockEnd(lines, startIdx, kind) {
  if (kind === 'details') {
    let depth = 0
    for (let i = startIdx; i < lines.length; i++) {
      const t = lines[i].trim().toLowerCase()
      if (/^<details\b/.test(t)) depth++
      if (/^<\/details>\s*$/.test(t)) {
        depth--
        if (depth === 0) return i
      }
    }
    return lines.length - 1
  }
  if (kind === 'container') {
    let depth = 0
    for (let i = startIdx; i < lines.length; i++) {
      const t = lines[i].trim()
      if (t.startsWith(':::')) {
        if (t === ':::') {
          depth--
          if (depth === 0) return i
        } else {
          depth++
        }
      }
    }
    return lines.length - 1
  }
  if (kind === 'blockquote') {
    let i = startIdx
    for (; i < lines.length; i++) {
      if (!lines[i].trim().startsWith('>')) break
    }
    return i - 1
  }
  if (kind === 'html-comment') {
    for (let i = startIdx; i < lines.length; i++) {
      if (lines[i].includes('-->')) return i
    }
    return lines.length - 1
  }
  return startIdx
}

function formFromContainerLine(t) {
  const m = t.match(/^:::\s*([a-z]+)\b/i)
  if (!m) return null
  const raw = m[1].toLowerCase()
  return FORM_ALIASES[raw] || raw
}

function titleFromContainerLine(t) {
  const m = t.match(/^:::\s*[a-z]+\b\s*/i)
  return m ? t.slice(m[0].length).trim() : ''
}

function detectCandidates(lines, chapter) {
  const candidates = []
  let inCodeBlock = false
  let inFrontmatter = false
  let seq = 0

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i]
    const t = raw.trim()

    if (i === 0 && t === '---') {
      inFrontmatter = true
      continue
    }
    if (inFrontmatter) {
      if (t === '---') inFrontmatter = false
      continue
    }
    if (t.startsWith('```') || t.startsWith('~~~')) {
      inCodeBlock = !inCodeBlock
      continue
    }
    if (inCodeBlock || !t) continue

    let blockType = null
    let form = null
    if (/^<details\b/i.test(t)) {
      blockType = 'details'
      form = 'details'
    } else if (/^:::\s*(tip|note|warning|info|important|caution|danger)\b/i.test(t)) {
      blockType = 'container'
      form = formFromContainerLine(t)
    } else if (/^>\s*(\*\*)?(note|n\.b\.|nb:|editor|注|疏|按)/i.test(t)) {
      blockType = 'blockquote'
      form = 'blockquote'
    } else if (/^<!--(?!\s*#p-)/.test(t) && !t.includes('-->') && t.length > 20) {
      blockType = 'html-comment'
      form = 'html-comment'
    }
    if (!blockType) continue

    const endIdx = findBlockEnd(lines, i, blockType)
    const { pid, line: pidLine } = findPrecedingPid(lines, i)
    seq++

    const blockLines = lines.slice(i, endIdx + 1).filter((ln) => !PID_LINE_RE.test(ln.trim()))
    const body = blockLines.join('\n').replace(/[ \t]+$/gm, '')

    let title = ''
    const summary = body.match(/<summary[^>]*>([\s\S]*?)<\/summary>/i)
    if (summary) title = summary[1].replace(/<[^>]+>/g, '').trim()
    if (!title && blockType === 'container') title = titleFromContainerLine(t)
    if (!title && blockType === 'blockquote') title = t.replace(/^>\s*/, '').slice(0, 80)
    if (!title) title = t.slice(0, 80)

    const preview = body.replace(/\s+/g, ' ').slice(0, 160)

    candidates.push({
      candidateId: `${chapter}-c${String(seq).padStart(3, '0')}`,
      chapter,
      form,
      kind: null,
      pid,
      pidLine: pidLine >= 0 ? pidLine + 1 : null,
      startLine: i + 1,
      endLine: endIdx + 1,
      title,
      preview,
      body,
      status: 'candidate',
      cid: null,
      note: '',
      officialDoc: '',
      url: '',
      parentCid: null,
      manual: false,
      retirePid: false,
      createdAt: new Date().toISOString(),
    })

    i = endIdx
  }

  return candidates
}


function normalizeCandidate(c) {
  const copy = { ...c }
  const oldKind = copy.kind
  if (!copy.form && oldKind && ['container', 'details', 'blockquote', 'html-comment'].includes(oldKind)) {
    copy.form = oldKind
    copy.kind = null
  }
  if (copy.form === 'danger') copy.form = 'caution'
  if (copy.form === 'container') {
    const title = String(copy.title || '')
    const m = title.match(/^(tip|note|warning|info|important|caution|danger)\b\s*/i)
    if (m) {
      copy.form = FORM_ALIASES[m[1].toLowerCase()] || m[1].toLowerCase()
      copy.title = title.slice(m[0].length).trim()
    } else {
      copy.form = 'note'
    }
  }
  if (copy.kind && !ALLOWED_KINDS.has(copy.kind)) copy.kind = null
  copy.kind = copy.kind ?? null
  copy.officialDoc = copy.officialDoc ?? ''
  copy.url = copy.url ?? ''
  copy.parentCid = copy.parentCid ?? null
  copy.manual = Boolean(copy.manual)
  copy.retirePid = Boolean(copy.retirePid)
  copy.createdAt = copy.createdAt || new Date().toISOString()
  copy.form = copy.form || 'note'
  return copy
}

function loadCandidates(chapter) {
  const file = join(OUT_DIR, `${chapter}.candidates.jsonl`)
  if (!existsSync(file)) return []
  return readFileSync(file, 'utf8')
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => normalizeCandidate(JSON.parse(line)))
}

function saveCandidates(chapter, candidates) {
  ensureOutDir()
  const file = join(OUT_DIR, `${chapter}.candidates.jsonl`)
  writeFileSync(file, candidates.map((c) => JSON.stringify(c)).join('\n') + '\n', 'utf8')
  return file
}

function buildReport(chapter, candidates) {
  const counts = candidates.reduce((acc, c) => {
    acc[c.status] = (acc[c.status] || 0) + 1
    return acc
  }, {})
  const lines = [
    `# Annotation candidates — chapter ${chapter}`,
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    `Counts: ${Object.entries(counts).map(([k, v]) => `${k}=${v}`).join(', ') || 'none'}`,
    '',
    '| candidateId | form | kind | pid | title | status | cid |',
    '| :--- | :--- | :--- | :--- | :--- | :--- | :--- |',
  ]
  for (const c of candidates) {
    const title = String(c.title || '').replace(/\|/g, '\\|').slice(0, 60)
    lines.push(`| ${c.candidateId} | ${c.form || '—'} | ${c.kind || '—'} | ${c.pid || '—'} | ${title} | ${c.status} | ${c.cid || '—'} |`)
  }
  lines.push('')
  return lines.join('\n')
}

function saveReport(chapter, candidates) {
  ensureOutDir()
  const file = join(OUT_DIR, `${chapter}.report.md`)
  writeFileSync(file, buildReport(chapter, candidates), 'utf8')
  return file
}

function groupIdsByChapter(ids) {
  const groups = new Map()
  for (const id of ids) {
    const chapter = id.split('-')[0]
    if (!groups.has(chapter)) groups.set(chapter, [])
    groups.get(chapter).push(id)
  }
  return groups
}

function updateCandidates(ids, updater, opts = {}) {
  const groups = groupIdsByChapter(ids)
  const loaded = new Map()
  for (const [chapter, chapterIds] of groups) {
    const candidates = loadCandidates(chapter)
    const matches = candidates.filter((c) => chapterIds.includes(c.candidateId))
    if (matches.length === 0) {
      console.error(`[i18n:comments] no candidates matched in chapter ${chapter}: ${chapterIds.join(', ')}`)
      return false
    }
    if (opts.requireKind) {
      const bad = matches.find((c) => !ALLOWED_KINDS.has(c.kind))
      if (bad) {
        console.error(`[i18n:comments] ${bad.candidateId} has invalid/missing kind: ${bad.kind}`)
        return false
      }
    }
    loaded.set(chapter, { candidates, matches })
  }

  for (const [chapter, { candidates, matches }] of loaded) {
    for (const c of matches) updater(c)
    saveCandidates(chapter, candidates)
    saveReport(chapter, candidates)
    console.log(`[i18n:comments] ${chapter}: updated ${matches.length} candidate(s)`)
  }
  return true
}

function addManualCandidate({ chapter, pid, title, body, kind, officialDoc, url, parentCid, retirePid }) {
  const candidates = loadCandidates(chapter)
  let seq = candidates.length + 1
  let candidateId
  do {
    candidateId = `${chapter}-c${String(seq).padStart(3, '0')}`
    seq++
  } while (candidates.some((c) => c.candidateId === candidateId))

  const candidate = {
    candidateId,
    chapter,
    form: FORM_BY_KIND[kind] || 'note',
    kind,
    pid,
    pidLine: null,
    startLine: null,
    endLine: null,
    title: title || '',
    preview: body.replace(/\s+/g, ' ').slice(0, 160),
    body,
    status: 'candidate',
    cid: null,
    note: '',
    officialDoc: officialDoc || '',
    url: url || '',
    parentCid: parentCid || null,
    manual: true,
    retirePid: Boolean(retirePid),
    createdAt: new Date().toISOString(),
  }
  candidates.push(candidate)
  saveCandidates(chapter, candidates)
  saveReport(chapter, candidates)
  console.log(`[i18n:comments] ${chapter}: added manual candidate ${candidateId}`)
  return candidate
}


function stripContainer(body, form) {
  let text = String(body || '').trim()
  if (form === 'blockquote') {
    text = text.split(/\r?\n/).map((line) => line.replace(/^>\s?/, '')).join('\n').trim()
  } else if (form === 'details') {
    const lines = text.split(/\r?\n/)
    if (/^<details\b/i.test(lines[0]?.trim() || '')) lines.shift()
    if (lines.length && /^<\/details>\s*$/i.test(lines[lines.length - 1].trim())) lines.pop()
    text = lines.join('\n').trim()
  } else if (form !== 'html-comment') {
    const lines = text.split(/\r?\n/)
    if (lines[0]?.trim().startsWith(':::')) lines.shift()
    if (lines.length && lines[lines.length - 1].trim() === ':::') lines.pop()
    text = lines.join('\n').trim()
  }
  return text
}

function finalizeChapter(chapter, registry) {
  const candidates = loadCandidates(chapter)
  const accepted = candidates.filter((c) => c.status === 'accepted')
  const acceptedIds = new Set(accepted.map((c) => c.candidateId))
  let dirty = false

  for (const [key, entry] of Object.entries(registry.entries || {})) {
    if (entry.type === 'cid' && entry.chapter === chapter && !acceptedIds.has(entry.candidateId)) {
      delete registry.entries[key]
      dirty = true
    }
  }

  if (accepted.length === 0) {
    const file = join(OUT_DIR, `${chapter}.jsonl`)
    if (existsSync(file)) {
      unlinkSync(file)
      console.log(`[i18n:comments] ${chapter}: removed stale ${relative(ROOT, file)}`)
    }
    if (dirty) saveRegistry(registry)
    return { chapter, accepted: 0, entries: [], errors: [] }
  }

  const invalid = accepted.filter((c) => {
    if (!ALLOWED_KINDS.has(c.kind)) return true
    if (c.kind === 'add' && !String(c.officialDoc || '').trim()) return true
    if (!c.pid) return true
    if (c.retirePid && (!registry.entries[c.pid] || registry.entries[c.pid].type !== 'pid')) return true
    return false
  })
  if (invalid.length) {
    return {
      chapter,
      accepted: 0,
      entries: [],
      errors: invalid.map((c) => `${c.candidateId}: missing kind/pid/officialDoc or retire target`),
    }
  }

  const now = new Date().toISOString()
  const entries = []
  for (const c of accepted) {
    const existing = c.cid ? registry.entries[c.cid] : null
    if (!c.cid) {
      let cid
      do {
        cid = generateCid()
      } while (registry.entries[cid])
      c.cid = cid
      dirty = true
    }
    const createdAt = existing?.createdAt || now
    registry.entries[c.cid] = {
      type: 'cid',
      kind: c.kind,
      chapter,
      file: `src/en/docs/${chapter}.md`,
      pid: c.pid,
      candidateId: c.candidateId,
      status: 'accepted',
      createdAt,
    }
    dirty = true

    if (c.retirePid) {
      const pidEntry = registry.entries[c.pid]
      pidEntry.status = 'retired'
      pidEntry.retiredAt = now
      pidEntry.reason = 'content moved to cid annotation'
      pidEntry.replacedByCid = c.cid
      dirty = true
    }

    const role = ROLE_BY_KIND[c.kind]
    const source = {
      title: c.kind === 'suggest' ? 'Yuorb' : 'Official Ithkuil documentation',
    }
    if (c.officialDoc) source.officialDoc = c.officialDoc
    if (c.url) source.url = c.url

    const entry = {
      cid: c.cid,
      pid: c.pid,
      chapter,
      kind: c.kind,
      form: c.form,
      author: role.author,
      authorRole: role.authorRole,
      bodyLocale: c.bodyLocale || 'en',
      visibleLocales: c.visibleLocales || ['*'],
      source,
      status: 'accepted',
      createdAt,
      body: stripContainer(c.body, c.form),
      translations: c.translations || {},
    }
    if (c.parentCid) entry.parentCid = c.parentCid
    entries.push(entry)
  }

  if (dirty) saveRegistry(registry)
  ensureOutDir()
  const file = join(OUT_DIR, `${chapter}.jsonl`)
  writeFileSync(file, entries.map((e) => JSON.stringify(e)).join('\n') + '\n', 'utf8')
  saveCandidates(chapter, candidates)
  saveReport(chapter, candidates)
  console.log(`[i18n:comments] ${chapter}: finalized ${entries.length} annotation(s) -> ${relative(ROOT, file)}`)
  return { chapter, accepted: entries.length, entries, errors: [] }
}

// ── main ─────────────────────────────────────────────────────────────────
const files = listChapterFiles()
const registry = loadRegistry()

if (has('--list')) {
  for (const file of files) {
    const chapter = file.split(/[\\/]/).pop().replace(/\.md$/, '')
    const candidates = loadCandidates(chapter)
    if (candidates.length === 0) continue
    const counts = candidates.reduce((acc, c) => {
      acc[c.status] = (acc[c.status] || 0) + 1
      return acc
    }, {})
    console.log(`${chapter}: ${candidates.length} candidate(s) [${Object.entries(counts).map(([k, v]) => `${k}=${v}`).join(', ')}]`)
  }
  process.exit(0)
}

if (has('--classify')) {
  const kind = valueOf('--kind')
  if (!ALLOWED_KINDS.has(kind)) {
    console.error(`Missing/invalid --kind; expected one of ${[...ALLOWED_KINDS].join(', ')}`)
    process.exit(1)
  }
  const officialDoc = valueOf('--official-doc') || ''
  const url = valueOf('--url') || ''
  const parentCid = valueOf('--parent-cid') || null
  if (kind === 'add' && !officialDoc.trim()) {
    console.error('--kind add requires --official-doc')
    process.exit(1)
  }
  if (parentCid && !CID_RE.test(parentCid)) {
    console.error(`Invalid --parent-cid: ${parentCid}`)
    process.exit(1)
  }

  if (has('--manual')) {
    const chapter = valueOf('--chapter')
    const pid = valueOf('--pid')
    const title = valueOf('--title') || ''
    const bodyFile = valueOf('--body-file')
    const bodyArg = valueOf('--body') || ''
    const body = bodyFile ? readFileSync(bodyFile, 'utf8').trim() : bodyArg.trim()
    if (!chapter || !pid || !body) {
      console.error('Manual classification requires --chapter, --pid and --body-file/--body')
      process.exit(1)
    }
    if (!PID_RE.test(pid)) {
      console.error(`Invalid --pid: ${pid}`)
      process.exit(1)
    }
    addManualCandidate({
      chapter,
      pid,
      title,
      body,
      kind,
      officialDoc,
      url,
      parentCid,
      retirePid: has('--retire-pid'),
    })
    process.exit(0)
  }

  const idsArg = valueOf('--classify')
  const ids = (idsArg || '').split(',').map((s) => s.trim()).filter(Boolean)
  if (ids.length === 0 || idsArg.startsWith('--')) {
    console.error('Missing comma-separated candidate ids, e.g. --classify 03-c003,03-c005 --kind add')
    process.exit(1)
  }
  const ok = updateCandidates(ids, (c) => {
    c.kind = kind
    c.officialDoc = officialDoc
    c.url = url
    c.parentCid = parentCid
  })
  process.exit(ok ? 0 : 1)
}

if (has('--accept') || has('--reject')) {
  const flag = has('--accept') ? '--accept' : '--reject'
  const ids = (valueOf(flag) || '').split(',').map((s) => s.trim()).filter(Boolean)
  if (ids.length === 0) {
    console.error('Missing comma-separated candidate ids, e.g. --accept 02-c001,02-c002')
    process.exit(1)
  }
  const ok = updateCandidates(ids, (c) => {
    c.status = has('--accept') ? 'accepted' : 'rejected'
  }, { requireKind: has('--accept') })
  process.exit(ok ? 0 : 1)
}

if (has('--finalize')) {
  let total = 0
  let errors = 0
  for (const file of files) {
    const chapter = file.split(/[\\/]/).pop().replace(/\.md$/, '')
    const res = finalizeChapter(chapter, registry)
    total += res.accepted
    if (res.errors.length) {
      errors += res.errors.length
      for (const e of res.errors) console.error(`[i18n:comments] ${e}`)
    }
  }
  console.log(`[i18n:comments] total accepted annotations: ${total}`)
  process.exit(errors ? 1 : 0)
}

if (has('--scan')) {
  let total = 0
  for (const file of files) {
    const chapter = file.split(/[\\/]/).pop().replace(/\.md$/, '')
    const raw = readFileSync(file, 'utf8')
    const lines = raw.split(/\r?\n/)
    const detected = detectCandidates(lines, chapter)
    const previous = loadCandidates(chapter)
    const prevMap = new Map(previous.map((c) => [c.candidateId, c]))
    for (const c of detected) {
      const prev = prevMap.get(c.candidateId)
      if (prev) {
        c.status = prev.status
        c.cid = prev.cid
        c.note = prev.note
        c.kind = prev.kind
        c.officialDoc = prev.officialDoc
        c.url = prev.url
        c.parentCid = prev.parentCid
        c.manual = prev.manual
        c.retirePid = prev.retirePid
        c.createdAt = prev.createdAt
      }
    }
    const manual = previous.filter((c) => c.manual && !detected.some((d) => d.candidateId === c.candidateId))
    const merged = [...detected, ...manual].sort((a, b) => {
      const al = a.startLine ?? 0
      const bl = b.startLine ?? 0
      return al - bl || a.candidateId.localeCompare(b.candidateId)
    })
    saveCandidates(chapter, merged)
    saveReport(chapter, merged)
    total += merged.length
    if (merged.length) console.log(`  ${chapter}: ${merged.length} candidate(s)`)
  }
  console.log(`[i18n:comments] scanned ${files.length} files, ${total} candidate(s) -> ${relative(ROOT, OUT_DIR)}`)
  process.exit(0)
}

console.log(`Usage:
  node scripts/i18n-comments.mjs --scan
  node scripts/i18n-comments.mjs --list
  node scripts/i18n-comments.mjs --classify <chapter>-cNNN[,<id>...] --kind suggest|revise|add|comment [--official-doc <string>] [--url <url>] [--parent-cid <cid>]
  node scripts/i18n-comments.mjs --classify --manual --chapter 14 --pid p-xxxxxxxxxx --title <title> --body-file <file> --kind suggest [--retire-pid]
  node scripts/i18n-comments.mjs --accept <chapter>-cNNN[,<id>...]
  node scripts/i18n-comments.mjs --reject <chapter>-cNNN[,<id>...]
  node scripts/i18n-comments.mjs --finalize`)
process.exit(1)

