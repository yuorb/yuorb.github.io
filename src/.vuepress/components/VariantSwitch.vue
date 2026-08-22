<template>
  <div v-if="isZhPage" class="vp-nav-item variant-switch-wrapper" data-no-convert>
    <!-- 1. 移除所有 JS 悬停事件，全权交给 CSS 的 .variant-dropdown-wrapper:hover 驱动 -->
    <div class="vp-dropdown-wrapper variant-dropdown-wrapper">
      <button
        type="button"
        class="vp-dropdown-title"
        :aria-label="currentLabel"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="icon variant-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 7V4h16v3"></path>
          <path d="M9 20h6"></path>
          <path d="M12 4v16"></path>
        </svg>
        <span class="variant-text-label">{{ currentLabel }}</span>
        <span class="arrow down"></span>
      </button>

      <ul class="vp-dropdown">
        <li v-for="item in variants" :key="item.value" class="vp-dropdown-item">
          <button
            type="button"
            class="vp-dropdown-action variant-option-btn"
            :class="{ active: currentLang === item.value }"
            @click="selectVariant(item.value)"
          >
            {{ item.label }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed, nextTick } from 'vue';
import { useRoute, useRouteLocale } from 'vuepress/client';
import { convertText, type BCP47Lang } from '../utils/opencc';

const route = useRoute();
const routeLocale = useRouteLocale();
const currentLang = ref<BCP47Lang>('zh-Hans');

let observer: MutationObserver | null = null;
let isConverting = false;
let convertTaskId = 0;

const textNodeCache = new WeakMap<Node, string>();

const variants: { label: string; value: BCP47Lang }[] = [
  { label: '简体', value: 'zh-Hans' },
  { label: '繁體 (通用)', value: 'zh-Hant' },
  { label: '繁體 (台灣)', value: 'zh-Hant-TW' },
  { label: '繁體 (香港)', value: 'zh-Hant-HK' },
];

const giscusLangMap: Record<BCP47Lang, string> = {
  'zh-Hans': 'zh-CN',
  'zh-Hant': 'zh-TW',
  'zh-Hant-TW': 'zh-TW',
  'zh-Hant-HK': 'zh-HK',
};

const isZhPage = computed(() => routeLocale.value === '/');
const currentLabel = computed(() => {
  return variants.find(v => v.value === currentLang.value)?.label || '简体';
});

function updateGiscusLang(lang: BCP47Lang) {
  if (typeof window === 'undefined') return;
  const targetGiscusLang = giscusLangMap[lang] || 'zh-CN';

  const giscusWidget = document.querySelector('giscus-widget');
  if (giscusWidget) {
    giscusWidget.setAttribute('lang', targetGiscusLang);
  }

  const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
  if (iframe?.contentWindow) {
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { lang: targetGiscusLang } } },
      'https://giscus.app'
    );
  }
}

function shouldSkipNode(node: Node): boolean {
  if (node.nodeType === Node.COMMENT_NODE) return true;

  const parent = node.parentElement;
  if (!parent || typeof parent.closest !== 'function') return true;

  const ignoreTags = ['SCRIPT', 'STYLE', 'CODE', 'PRE', 'NOSCRIPT', 'TEXTAREA', 'INPUT', 'SVG'];
  if (ignoreTags.includes(parent.tagName)) return true;

  if (
    parent.closest('[data-no-convert]') ||
    parent.closest('.language-text') ||
    parent.closest('.katex') ||
    parent.closest('.variant-switch-wrapper') ||
    parent.closest('.icon') ||
    parent.closest('.giscus-wrapper') ||
    parent.closest('.ithkuil-word-container') ||
    (parent.tagName === 'A' && parent.getAttribute('href')?.trim().startsWith('javascript:'))
  ) {
    return true;
  }

  return false;
}

async function executeConversion(lang: BCP47Lang) {
  const currentTaskId = ++convertTaskId;
  updateGiscusLang(lang);
  stopObserver();
  isConverting = true;

  try {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (shouldSkipNode(node)) return NodeFilter.FILTER_REJECT;
        if (!node.nodeValue?.trim()) return NodeFilter.FILTER_SKIP;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodesToConvert: Node[] = [];
    let currentNode = walker.nextNode();
    while (currentNode) {
      nodesToConvert.push(currentNode);
      currentNode = walker.nextNode();
    }

    for (const node of nodesToConvert) {
      if (currentTaskId !== convertTaskId) return;

      if (!textNodeCache.has(node) && node.nodeValue) {
        textNodeCache.set(node, node.nodeValue);
      }

      const rawText = textNodeCache.get(node) || node.nodeValue || '';

      if (lang === 'zh-Hans') {
        if (node.nodeValue !== rawText) {
          node.nodeValue = rawText;
        }
      } else if (rawText) {
        const converted = await convertText(rawText, lang);
        if (currentTaskId === convertTaskId && node.nodeValue !== converted) {
          node.nodeValue = converted;
        }
      }
    }
  } catch (err) {
    console.error('[VariantSwitch] 转换异常:', err);
  } finally {
    if (currentTaskId === convertTaskId) {
      isConverting = false;
      setTimeout(() => startObserver(), 60);
    }
  }
}

async function applyLanguage(lang: BCP47Lang) {
  if (!isZhPage.value || typeof window === 'undefined') return;

  if (document.startViewTransition) {
    document.startViewTransition(async () => {
      await executeConversion(lang);
    });
  } else {
    await executeConversion(lang);
  }
}

function startObserver() {
  if (typeof window === 'undefined' || !isZhPage.value || observer) return;

  observer = new MutationObserver((mutations) => {
    if (isConverting || currentLang.value === 'zh-Hans') return;

    const hasMeaningfulMutation = mutations.some(m => {
      const targetEl = m.target instanceof HTMLElement ? m.target : m.target.parentElement;
      if (targetEl?.closest('[data-no-convert]')) {
        return false;
      }

      if (m.type === 'childList' && m.addedNodes.length > 0) {
        const hasValidAddedNode = Array.from(m.addedNodes).some(node => {
          const el = node instanceof HTMLElement ? node : node.parentElement;
          return !el?.closest('[data-no-convert]');
        });
        if (hasValidAddedNode) return true;
      }

      if (m.type === 'characterData' && !shouldSkipNode(m.target)) {
        return true;
      }

      return false;
    });

    if (hasMeaningfulMutation) {
      applyLanguage(currentLang.value);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}

function stopObserver() {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
}

watch(
  () => route.fullPath,
  () => {
    if (isZhPage.value) {
      nextTick(() => {
        setTimeout(() => applyLanguage(currentLang.value), 100);
      });
    } else {
      stopObserver();
    }
  },
  { immediate: true }
);

function selectVariant(lang: BCP47Lang) {
  if (currentLang.value === lang) return;

  currentLang.value = lang;
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('site_lang_bcp47', lang);
  }

  applyLanguage(lang);
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    const savedLang = window.localStorage.getItem('site_lang_bcp47') as BCP47Lang;
    if (savedLang) {
      currentLang.value = savedLang;
    }

    if (isZhPage.value) {
      nextTick(() => {
        setTimeout(() => applyLanguage(currentLang.value), 100);
      });
    }
  }
});

onUnmounted(() => {
  stopObserver();
});
</script>

<style scoped>
.variant-switch-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 100%;
}

.variant-dropdown-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  /* 填充上下导航栏缝隙，形成无缝 hover 通道 */
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-top: -0.5rem;
  margin-bottom: -0.5rem;
}

/* 清除主题对伪元素的干扰 */
.variant-dropdown-wrapper .vp-dropdown-title::before,
.variant-dropdown-wrapper .vp-dropdown-title::after {
  display: none !important;
  content: none !important;
}

.vp-dropdown-title {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background: transparent;
  border: none;
  font-size: 0.875rem;
  cursor: pointer;
  color: var(--vp-c-text, #2c3e50);
  padding: 0 0.25rem;
}

.vp-dropdown-title .variant-icon {
  width: 0.95rem;
  height: 0.95rem;
  opacity: 0.85;
}

.variant-text-label {
  font-size: 0.875rem;
  font-weight: 500;
}

/* 🎯 对齐原生 Theme Hope 的 .vp-dropdown 属性 */
.vp-dropdown {
  position: absolute;
  inset-inline-end: 0;
  top: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  min-width: 6rem;
  max-height: calc(100vh - var(--navbar-height, 3.6rem));
  margin: 0;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.5rem;
  background: var(--vp-c-bg-elv);
  box-shadow: 2px 2px 10px var(--vp-c-shadow);
  list-style-type: none;
  text-align: start;
  white-space: nowrap;
  z-index: 100;

  /* 隐藏与动画效果对齐原生 */
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: scale(0.9);
  transition: all 0.18s ease-out;
}

/* 🎯 悬停展开 */
.variant-dropdown-wrapper:hover .vp-dropdown {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: scale(1);
}

.variant-dropdown-wrapper:hover .arrow {
  transform: rotate(180deg);
}

.vp-dropdown-item {
  margin: 0;
  padding: 0;
}

.variant-option-btn {
  display: block;
  width: 100%;
  padding: 0.35rem 0.5rem;
  border: none;
  background: transparent;
  color: var(--vp-c-text);
  font-size: 0.875rem;
  text-align: left;
  cursor: pointer;
  border-radius: 0.25rem;
  white-space: nowrap;
  transition: color 0.15s ease, background-color 0.15s ease;
}

.variant-option-btn:hover {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-accent);
}

.variant-option-btn.active {
  color: var(--vp-c-accent);
  font-weight: 600;
}
</style>