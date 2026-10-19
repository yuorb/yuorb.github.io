<template>
  <dl class="gloss">
    <dt>
      <IthkuilWord v-if="parse" :word="word" />
      <template v-else>{{ word }}</template>
    </dt>
    <dd v-if="parts.length">
      <template v-for="(p, i) in parts" :key="i">
        <b v-if="p.kind === 'term'"><GlossTerm :code="p.text" /></b>
        <GlossTerm v-else-if="p.kind === 'term-plain'" :code="p.text" />
        <span v-else class="gloss-sem" v-html="p.html" />
        <template v-if="p.sep">{{ p.sep }}</template>
      </template>
    </dd>
  </dl>
  <div v-if="$slots.default" class="glend">
    <q><slot /></q>
  </div>
</template>

<script setup>
// GlossEntry: 替代旧的
//   <dl class="gloss"><dt>词</dt><dd>gloss</dd></dl><div class="glend"><q>译文</q></div>
//
// 用法：
//   <GlossEntry word="rrala" gloss="“cat”-<b>UPX</b>">a cat</GlossEntry>
//
// props:
//   word   —— Ithkuil 词汇（不可译变量）
//   gloss  —— 结构化 gloss，按 `-`（引号外）切分后分类渲染：
//              · 缩写术语（UPX、ASM…，常被 <b> 包裹）→ <b><GlossTerm/></b>，hover 释义 tooltip
//              · 引号语义（“cat” / "cat"）或含 CJK 的段 → .gloss-sem，翻译管道中的可译单元
//              · 其余拉丁短码 → 纯文本透传（保守，不误挂 tooltip）
//   parse  —— true 时 word 渲染为可交互 <IthkuilWord>
// slot     —— 人类语言译文（可译单元）
import { computed } from 'vue';

const props = defineProps({
  word: { type: String, required: true },
  gloss: { type: String, default: '' },
  parse: { type: Boolean, default: false },
});

const TERM_RE = /^[A-Za-z][A-Za-z0-9.]{1,7}$/;
const CJK_RE = /[　-〿぀-ヿ㐀-䶿一-鿿가-힯]/;

// 在引号外按 '-' 切分
function splitSegments(gloss) {
  const parts = [];
  let buf = '';
  let inQuote = false;
  const flush = (sep) => {
    if (buf.trim()) parts.push({ raw: buf.trim(), sep });
    buf = '';
  };
  for (const ch of gloss) {
    if (ch === '“' || ch === '‘') inQuote = true;
    if (ch === '”' || ch === '’') inQuote = false;
    if (ch === '"') inQuote = !inQuote;
    if (ch === '-' && !inQuote) {
      flush('-');
      continue;
    }
    buf += ch;
  }
  flush(null);
  return parts;
}

// 分类：term（术语，<b>包裹）/ term-plain（裸术语）/ sem（可译语义）
function classify(raw) {
  const boldMatch = raw.match(/^<b>(.*?)<\/b>$/i);
  const core = (boldMatch ? boldMatch[1] : raw).trim();
  const stripped = core.replace(/<[^>]*>/g, '');

  if (CJK_RE.test(stripped)) return { kind: 'sem', html: raw };
  if (/["“”‘’]/.test(stripped)) return { kind: 'sem', html: raw };
  if (TERM_RE.test(stripped)) {
    return { kind: boldMatch ? 'term' : 'term-plain', text: stripped };
  }
  return { kind: 'sem', html: raw };
}

const parts = computed(() =>
  splitSegments(props.gloss).map((p) => ({ ...p, ...classify(p.raw) }))
);
</script>
