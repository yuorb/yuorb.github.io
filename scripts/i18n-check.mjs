#!/usr/bin/env node
/**
 * i18n:check — validate paragraph/comment ID integrity across the English source.
 *
 * Checks:
 * 1. Marker format: `<!-- #p-[a-z0-9]{10} -->`
 * 2. Global uniqueness: no duplicate pid within or across files.
 * 3. Marker pairing: each marker is immediately above a translatable block.
 * 4. Registry consistency: all pids in markdown exist in id-registry.json and vice versa.
 * 5. Cross-chapter duplicates: same pid in multiple chapters is an error.
 * 6. Orphan markers: markers without a following block.
 *
 * Usage:
 *   node scripts/i18n-check.mjs
 * Exit codes:
 *   0 = pass, 1 = failure
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = process.cwd()
const EN_DOCS = join(ROOT, 'src', 'en', 'docs')
const REGISTRY = join(ROOT, 'src', '.vuepress', 'i18n', 'id-registry.json')
const COMMENTS_DIR = join(ROOT, 'i18n', 'comments')
const MARKER_RE = /<!-- #(p-[a-z0-9]{10}) -->/g
const MARKER_LINE_RE = /^\s*<!-- #(p-[a-z0-9]{10}) -->\s*$/
const PID_RE = /^p-[a-z0-9]{10}$/
const CID_RE = /^c-[a-z0-9]{10}$/
const ALLOWED_KINDS = new Set(['suggest', 'revise', 'add', 'comment'])
const ROLE_BY_KIND = { suggest: 'editor', revise: 'revisor', add: 'official', comment: 'commentator' }
const ALLOWED_STATUS = new Set(['open', 'accepted', 'rejected', 'deleted'])
const REQUIRED_CID_FIELDS = ['cid', 'pid', 'chapter', 'kind', 'author', 'authorRole', 'bodyLocale', 'visibleLocales', 'status', 'createdAt', 'body']

/** @param {string} dir */
function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) out.push(...walk(p))
    else if (name.endsWith('.md')) out.push(p)
  }
  return out
}

/** @param {string} text */
function isTranslatableBlockStart(text) {
  const t = text.trim()
  if (!t) return false
  if (t.startsWith('<!--') || t.startsWith('-->')) return false
  if (t.startsWith('```') || t.startsWith('~~~')) return false
  if (t.startsWith('|')) return false
  if (t.startsWith('<')) {
    if (t.startsWith('</') || t.startsWith('<!')) return false
    if (t.match(/^<([A-Za-z][\w.-]*)\s*\/?>$/)) return true
    if (t.startsWith('<div') || t.startsWith('<table') || t.startsWith('<details') || t.startsWith('<figure')) return true
    return false
  }
  if (t.startsWith('#')) return true
  if (t.match(/^[-*+]\s/)) return true
  if (t.match(/^\d+[.)]\s/)) return true
  if (t.startsWith('>')) return true
  if (t.startsWith(':::')) return true
  return true
}

function loadRegistry() {
  try {
    return JSON.parse(readFileSync(REGISTRY, 'utf8'))
  } catch {
    return { version: '1.0.0', generatedAt: new Date().toISOString(), entries: {} }
  }
}

function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0
}

function isHttpUrl(v) {
  try {
    const u = new URL(v)
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

function validateAuthor(author) {
  if (typeof author === 'string') return isNonEmptyString(author) ? null : 'author must be non-empty'
  if (!author || typeof author !== 'object' || Array.isArray(author)) return 'author must be string or object'
  if (!isNonEmptyString(author.name)) return 'author.name must be non-empty'
  if (author.url !== undefined && !isHttpUrl(author.url)) return 'author.url must be http/https'
  if (author.email !== undefined && !isNonEmptyString(author.email)) return 'author.email must be non-empty'
  return null
}

function validateVisibleLocales(v) {
  if (!Array.isArray(v) || v.length === 0) return 'visibleLocales must be a non-empty array'
  if (!v.every((x) => typeof x === 'string' && x.trim())) return 'visibleLocales must contain non-empty strings'
  return null
}

// ── collect ─────────────────────────────────────────────────────────────
const files = walk(EN_DOCS)
const registry = loadRegistry()
const errors = []
const seen = new Map() // pid -> { file, line }
const allFilePids = new Set()

for (const file of files) {
  const rel = relative(ROOT, file).replace(/\\/g, '/')
  const raw = readFileSync(file, 'utf8')
  const lines = raw.split(/\r?\n/)
  let inFrontmatter = false
  let inCodeBlock = false

  let i = 0
  if (lines[0] === '---') {
    inFrontmatter = true
    i = 1
    while (i < lines.length && lines[i] !== '---') i++
    i++
  }

  for (; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    if (trimmed.startsWith('```') || trimmed.startsWith('~~~')) {
      inCodeBlock = !inCodeBlock
      continue
    }
    if (inCodeBlock) continue

    const markerMatch = trimmed.match(MARKER_LINE_RE)
    if (markerMatch) {
      const pid = markerMatch[1]
      if (!PID_RE.test(pid)) {
        errors.push(`[format] ${rel}:${i + 1} invalid pid: ${pid}`)
      }
      if (seen.has(pid)) {
        const prev = seen.get(pid)
        if (prev.file === rel) {
          errors.push(`[duplicate] ${rel}:${i + 1} pid ${pid} already used at line ${prev.line}`)
        } else {
          errors.push(`[cross-chapter] pid ${pid} appears in ${prev.file}:${prev.line} and ${rel}:${i + 1}`)
        }
      } else {
        seen.set(pid, { file: rel, line: i + 1 })
        allFilePids.add(pid)
      }

      // Check pairing: next non-empty line must be a translatable block start
      let next = i + 1
      while (next < lines.length && lines[next].trim() === '') next++
      if (next >= lines.length) {
        errors.push(`[orphan] ${rel}:${i + 1} pid ${pid} has no following block`)
      } else if (!isTranslatableBlockStart(lines[next])) {
        errors.push(`[pairing] ${rel}:${i + 1} pid ${pid} is not immediately above a translatable block (next line: "${lines[next].trim().slice(0, 60)}")`)
      }
      continue
    }

    // Check for markers embedded inline (not standalone) — warn as format issue
    if (trimmed.includes('<!-- #p-')) {
      errors.push(`[inline-marker] ${rel}:${i + 1} pid marker must be on its own line`)
    }
  }
}

// Registry consistency
const registryEntries = registry.entries || {}
const registryPidEntries = new Map()
const registryCidEntries = new Map()
for (const [key, entry] of Object.entries(registryEntries)) {
  if (key.startsWith('p-')) {
    if (entry.type !== 'pid') errors.push(`[registry-type] ${key} should have type "pid"`)
    if (entry.status && !['active', 'retired'].includes(entry.status)) errors.push(`[registry-status] ${key} has invalid status: ${entry.status}`)
    registryPidEntries.set(key, entry)
  } else if (key.startsWith('c-')) {
    if (entry.type !== 'cid') errors.push(`[registry-type] ${key} should have type "cid"`)
    registryCidEntries.set(key, entry)
  } else {
    errors.push(`[registry-type] ${key} has unknown prefix`)
  }
}
for (const [pid, entry] of registryPidEntries) {
  const retired = entry.status === 'retired'
  if (!retired && !allFilePids.has(pid)) {
    errors.push(`[registry-stale] pid ${pid} exists in id-registry.json but not in markdown`)
  }
  if (retired && allFilePids.has(pid)) {
    errors.push(`[registry-retired-present] retired pid ${pid} still exists in markdown`)
  }
}
for (const pid of allFilePids) {
  const entry = registryPidEntries.get(pid)
  if (!entry) {
    errors.push(`[registry-missing] pid ${pid} exists in markdown but not in id-registry.json`)
  } else if (entry.status === 'retired') {
    errors.push(`[registry-retired-present] retired pid ${pid} exists in markdown`)
  }
}

const jsonlCids = new Map()
const cidLocations = new Map()
const commentFiles = existsSync(COMMENTS_DIR)
  ? readdirSync(COMMENTS_DIR).filter((name) => name.endsWith('.jsonl') && !name.endsWith('.candidates.jsonl'))
  : []

for (const name of commentFiles) {
  const chapter = name.replace(/\.jsonl$/, '')
  const raw = readFileSync(join(COMMENTS_DIR, name), 'utf8')
  const lines = raw.split(/\r?\n/).filter((line) => line.trim())
  for (let i = 0; i < lines.length; i++) {
    const loc = `${name}:${i + 1}`
    let c
    try {
      c = JSON.parse(lines[i])
    } catch (e) {
      errors.push(`[cid-json] ${loc} invalid JSON: ${e.message}`)
      continue
    }
    for (const field of REQUIRED_CID_FIELDS) {
      if (c[field] === undefined || c[field] === null) {
        errors.push(`[cid-field] ${loc} missing required field: ${field}`)
      } else if (typeof c[field] === 'string' && !c[field].trim()) {
        errors.push(`[cid-field] ${loc} empty required field: ${field}`)
      }
    }
    if (!CID_RE.test(c.cid || '')) errors.push(`[cid-format] ${loc} invalid cid: ${c.cid}`)
    if (c.cid) {
      if (cidLocations.has(c.cid)) errors.push(`[cid-duplicate] ${loc} cid ${c.cid} already used at ${cidLocations.get(c.cid)}`)
      else cidLocations.set(c.cid, loc)
      jsonlCids.set(c.cid, c)
    }
    if (c.chapter !== chapter) errors.push(`[cid-chapter] ${loc} chapter ${c.chapter} does not match file ${name}`)
    if (!ALLOWED_KINDS.has(c.kind)) errors.push(`[cid-kind] ${loc} invalid kind: ${c.kind}`)
    else if (ROLE_BY_KIND[c.kind] !== c.authorRole) errors.push(`[cid-role] ${loc} authorRole ${c.authorRole} does not match kind ${c.kind}`)
    const authorErr = validateAuthor(c.author)
    if (authorErr) errors.push(`[cid-author] ${loc} ${authorErr}`)
    if (!isNonEmptyString(c.bodyLocale)) errors.push(`[cid-bodyLocale] ${loc} bodyLocale must be non-empty`)
    const locErr = validateVisibleLocales(c.visibleLocales)
    if (locErr) errors.push(`[cid-visibleLocales] ${loc} ${locErr}`)
    if (!ALLOWED_STATUS.has(c.status)) errors.push(`[cid-status] ${loc} invalid status: ${c.status}`)
    if (!isNonEmptyString(c.createdAt) || Number.isNaN(Date.parse(c.createdAt))) errors.push(`[cid-createdAt] ${loc} invalid ISO 8601 date: ${c.createdAt}`)
    if (!isNonEmptyString(c.body)) errors.push(`[cid-body] ${loc} body must be non-empty`)
    if (c.source !== undefined) {
      if (!c.source || typeof c.source !== 'object' || Array.isArray(c.source)) {
        errors.push(`[cid-source] ${loc} source must be an object`)
      } else {
        if (c.source.title !== undefined && !isNonEmptyString(c.source.title)) errors.push(`[cid-source] ${loc} source.title must be non-empty`)
        if (c.source.officialDoc !== undefined && !isNonEmptyString(c.source.officialDoc)) errors.push(`[cid-source] ${loc} source.officialDoc must be non-empty`)
        if (c.source.url !== undefined && !isHttpUrl(c.source.url)) errors.push(`[cid-source] ${loc} source.url must be http/https`)
      }
    }
    if (c.kind === 'add' && (!c.source || !isNonEmptyString(c.source.officialDoc))) {
      errors.push(`[cid-source] ${loc} add requires source.officialDoc`)
    }
    if (c.parentCid !== undefined && c.parentCid !== null && !CID_RE.test(c.parentCid)) {
      errors.push(`[cid-parent] ${loc} invalid parentCid: ${c.parentCid}`)
    }
    const body = String(c.body || '')
    for (const bad of ['<!--', '-->', '#p-', '#c-', '<script', '<iframe', 'javascript:']) {
      if (body.includes(bad)) errors.push(`[cid-body] ${loc} contains forbidden token: ${bad}`)
    }
    if (/\son[a-z]+\s*=/i.test(body)) errors.push(`[cid-body] ${loc} contains forbidden inline event handler`)
    const pidEntry = registryPidEntries.get(c.pid)
    if (!pidEntry) {
      errors.push(`[cid-pid] ${loc} pid ${c.pid} not in registry`)
    } else {
      if (pidEntry.type !== 'pid') errors.push(`[cid-pid] ${loc} registry entry ${c.pid} is not type pid`)
      const expectedFile = `src/en/docs/${chapter}.md`
      if (pidEntry.file !== expectedFile) errors.push(`[cid-pid] ${loc} pid ${c.pid} file ${pidEntry.file} does not match chapter ${chapter}`)
      const retired = pidEntry.status === 'retired'
      if (!retired && !allFilePids.has(c.pid)) errors.push(`[cid-pid] ${loc} active pid ${c.pid} not found in markdown`)
      if (retired && allFilePids.has(c.pid)) errors.push(`[cid-pid] ${loc} retired pid ${c.pid} still exists in markdown`)
    }
  }
}

for (const [cid, c] of jsonlCids) {
  if (c.parentCid && !jsonlCids.has(c.parentCid)) errors.push(`[cid-parent] cid ${cid} parentCid ${c.parentCid} not found`)
}

for (const [cid, c] of jsonlCids) {
  const reg = registryCidEntries.get(cid)
  if (!reg) {
    errors.push(`[cid-registry-missing] cid ${cid} not in id-registry.json`)
    continue
  }
  for (const field of ['kind', 'chapter', 'pid', 'status']) {
    if (reg[field] !== c[field]) errors.push(`[cid-registry-mismatch] cid ${cid} field ${field}: registry=${reg[field]} jsonl=${c[field]}`)
  }
}
for (const [cid] of registryCidEntries) {
  if (!jsonlCids.has(cid)) errors.push(`[cid-registry-stale] cid ${cid} exists in id-registry.json but not in i18n/comments`)
}

// ── report ──────────────────────────────────────────────────────────────
const retiredPidCount = [...registryPidEntries.values()].filter((e) => e.status === 'retired').length
console.log(`[i18n:check] scanned ${files.length} files, ${allFilePids.size} active pid(s), ${retiredPidCount} retired pid(s), ${jsonlCids.size} cid(s) found`)
if (errors.length === 0) {
  console.log('✔ all checks passed')
  process.exit(0)
} else {
  console.error(`✘ ${errors.length} error(s):`)
  for (const e of errors) console.error(`  - ${e}`)
  process.exit(1)
}
