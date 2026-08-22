<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed, nextTick } from 'vue';
import { useRoute, useRouteLocale } from 'vuepress/client';
import { convertText, type BCP47Lang } from '../utils/opencc';

const route = useRoute();
const routeLocale = useRouteLocale();
const currentLang = ref<BCP47Lang>('zh-Hans');
const isOpen = ref(false);

let observer: MutationObserver | null = null;
let isConverting = false;

// 定义选项集：保留你喜欢的通用繁体与地区词汇区分
const variants: { label: string; value: BCP47Lang }[] = [
  { label: '简体', value: 'zh-Hans' },
  { label: '繁體 (通用)', value: 'zh-Hant' },
  { label: '繁體 (台灣)', value: 'zh-Hant-TW' },
  { label: '繁體 (香港)', value: 'zh-Hant-HK' },
];

const isZhPage = computed(() => routeLocale.value === '/');
const currentLabel = computed(() => {
  return variants.find(v => v.value === currentLang.value)?.label || '简体';
});

// 执行核心 DOM 遍历转换 (使用你的 TreeWalker 方案)
async function applyLanguage(lang: BCP47Lang) {
  if (!isZhPage.value) return;

  const mainContent = document.querySelector('.vp-page') || document.querySelector('.theme-default-content') || document.body;
  if (!mainContent) return;

  if (observer) observer.disconnect();
  isConverting = true;

  const walker = document.createTreeWalker(mainContent, NodeFilter.SHOW_TEXT);
  let node: Node | null = walker.nextNode();

  while (node) {
    if (node.nodeValue && node.nodeValue.trim()) {
      if (!(node as any)._rawText) {
        (node as any)._rawText = node.nodeValue;
      }

      if (lang === 'zh-Hans') {
        node.nodeValue = (node as any)._rawText;
      } else {
        node.nodeValue = await convertText((node as any)._rawText, lang);
      }
    }
    node = walker.nextNode();
  }

  isConverting = false;
  startObserver();
}

function startObserver() {
  if (typeof window === 'undefined' || !isZhPage.value) return;

  const targetNode = document.querySelector('.vp-page') || document.querySelector('.theme-default-content') || document.body;
  if (!targetNode) return;

  if (observer) observer.disconnect();

  observer = new MutationObserver(() => {
    if (isConverting) return;
    if (currentLang.value !== 'zh-Hans') {
      applyLanguage(currentLang.value);
    }
  });

  observer.observe(targetNode, {
    childList: true,
    subtree: true,
  });
}

watch(
  () => route.path,
  async () => {
    if (isZhPage.value && currentLang.value !== 'zh-Hans') {
      await nextTick();
      applyLanguage(currentLang.value);
    }
  }
);

function selectVariant(lang: BCP47Lang) {
  isOpen.value = false;
  currentLang.value = lang;

  if (typeof window !== 'undefined') {
    window.localStorage.setItem('site_lang_bcp47', lang);
  }

  applyLanguage(lang);
}

function closeDropdown(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (!target.closest('.variant-switch-wrapper')) {
    isOpen.value = false;
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    document.addEventListener('click', closeDropdown);
    const savedLang = window.localStorage.getItem('site_lang_bcp47') as BCP47Lang;
    if (savedLang) {
      currentLang.value = savedLang;
      if (isZhPage.value) {
        nextTick(() => {
          applyLanguage(savedLang);
        });
      }
    } else {
      startObserver();
    }
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    document.removeEventListener('click', closeDropdown);
  }
  if (observer) observer.disconnect();
});
</script>

<template>
  <div v-if="isZhPage" class="nav-item variant-switch-wrapper">
    <div class="dropdown-wrapper">
      <button class="dropdown-title" type="button" @click.stop="isOpen = !isOpen">
        <span class="title">{{ currentLabel }}</span>
        <span class="arrow down"></span>
      </button>

      <ul v-if="isOpen" class="nav-dropdown">
        <li v-for="item in variants" :key="item.value" class="dropdown-item">
          <a
            class="nav-link"
            :class="{ active: currentLang === item.value }"
            @click="selectVariant(item.value)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.variant-switch-wrapper {
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-right: 8px;
}

.dropdown-title {
  background: transparent;
  border: none;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--theme-color-text, #2c3e50);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
}

.nav-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--bg-color-float, #fff);
  border: 1px solid var(--border-color, #eee);
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  list-style: none;
  padding: 6px 0;
  margin-top: 8px;
  min-width: 160px;
  z-index: 100;
}

.dropdown-item .nav-link {
  display: block;
  padding: 6px 16px;
  font-size: 0.85rem;
  color: var(--theme-color-text, #2c3e50);
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
}

.dropdown-item .nav-link:hover,
.dropdown-item .nav-link.active {
  color: var(--theme-color, #3eaf7c);
  background-color: var(--theme-color-hover-bg, rgba(0, 0, 0, 0.05));
}
</style>