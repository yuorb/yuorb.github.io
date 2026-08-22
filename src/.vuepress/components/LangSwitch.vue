<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed, nextTick } from 'vue';
import { useRoute, useRouteLocale } from 'vuepress/client';
import { convertText, type BCP47Lang } from '../utils/opencc';

const route = useRoute();
const routeLocale = useRouteLocale();
const currentLang = ref<BCP47Lang>('zh-Hans');

let observer: MutationObserver | null = null;
let isConverting = false; // 防抖标志位，避免 MutationObserver 陷入无限死循环

const isZhPage = computed(() => routeLocale.value === '/');

// 执行核心 DOM 遍历转换
async function applyLanguage(lang: BCP47Lang) {
  if (!isZhPage.value) return;

  const mainContent = document.querySelector('.theme-default-content') || document.body;
  if (!mainContent) return;

  // 暂停监听，防止修改 nodeValue 触发 Observer 的死循环
  if (observer) observer.disconnect();
  isConverting = true;

  const walker = document.createTreeWalker(mainContent, NodeFilter.SHOW_TEXT);
  let node: Node | null = walker.nextNode();

  while (node) {
    if (node.nodeValue && node.nodeValue.trim()) {
      // 备份原始简体文本，便于无损切回
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
  // 转换完成后重新开启 DOM 变动监听
  startObserver();
}

// 开启 DOM 变动监听（解决侧边栏无刷新切换、异步加载等问题）
function startObserver() {
  if (typeof window === 'undefined' || !isZhPage.value) return;

  const targetNode = document.querySelector('.theme-default-content') || document.body;
  if (!targetNode) return;

  if (observer) observer.disconnect();

  observer = new MutationObserver((mutations) => {
    if (isConverting) return;

    // 如果用户选择的不是简体，且检测到正文 DOM 变动（如页面切页或异步加载）
    if (currentLang.value !== 'zh-Hans') {
      applyLanguage(currentLang.value);
    }
  });

  observer.observe(targetNode, {
    childList: true, // 监听子节点增删（路由切页）
    subtree: true,   // 监听深层节点
  });
}

// 监听路由路径变化
watch(
  () => route.path,
  async () => {
    if (isZhPage.value && currentLang.value !== 'zh-Hans') {
      await nextTick(); // 等待 Vue 渲染新页面的 DOM
      applyLanguage(currentLang.value);
    }
  }
);

function handleSelectChange(event: Event) {
  const lang = (event.target as HTMLSelectElement).value as BCP47Lang;
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
  if (observer) observer.disconnect();
});
</script>

<template>
  <div v-if="isZhPage" class="lang-switch-wrapper">
    <select
      :value="currentLang"
      @change="handleSelectChange"
      class="lang-select"
    >
      <option value="zh-Hans">简体中文</option>
      <option value="zh-Hant">繁體中文 (通用)</option>
      <option value="zh-Hant-TW">繁體中文 (台灣用詞)</option>
      <option value="zh-Hant-HK">繁體中文 (香港用詞)</option>
    </select>
  </div>
</template>

<style scoped>
.lang-switch-wrapper {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  background: var(--c-bg, #fff);
  padding: 4px 8px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}
.lang-select {
  border: none;
  background: transparent;
  color: var(--c-text, #333);
  font-size: 0.85rem;
  cursor: pointer;
  outline: none;
}
</style>