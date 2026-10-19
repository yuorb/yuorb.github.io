<template>
  <span
    class="gloss-term"
    :class="{ 'has-def': def }"
    :data-def="def || undefined"
    >{{ code }}</span
  >
</template>

<script setup>
// GlossTerm: gloss 中的缩写术语（UPX / ASM 等）。
// 不可译；hover 显示词典释义（tooltip 由 CSS attr 实现，零 JS）。
// 词典来源 data/gloss-terms.json，按 route locale 查找，回退 en。
import { computed } from 'vue';
import { useRouteLocale } from 'vuepress/client';
import terms from '../data/gloss-terms.json';

const props = defineProps({
  code: { type: String, required: true },
});

const routeLocale = useRouteLocale(); // '/' | '/en/' | '/ja/' ...

const localeKey = computed(() => {
  const v = routeLocale.value || '/';
  return v === '/' ? 'zh' : v.replace(/\//g, '');
});

const def = computed(() => {
  const entry = terms[props.code.toUpperCase()];
  if (!entry) return '';
  return entry[localeKey.value] || entry.en || '';
});
</script>

<style scoped>
.gloss-term.has-def {
  cursor: help;
  border-bottom: 1px dotted currentColor;
}

.gloss-term.has-def:hover::after {
  content: attr(data-def);
  position: absolute;
  left: 50%;
  bottom: 140%;
  transform: translateX(-50%);
  z-index: 300;
  width: max-content;
  max-width: 18em;
  white-space: normal;
  padding: 0.35em 0.6em;
  font-size: 0.8em;
  font-weight: normal;
  font-family: var(--base-font-family, sans-serif);
  color: var(--text-color);
  background-color: var(--bg-color);
  border: 1px solid var(--text-color);
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.gloss-term.has-def {
  position: relative;
  display: inline-block;
}
</style>
