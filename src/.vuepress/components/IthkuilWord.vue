<template>
  <span
    class="ithkuil-word-container"
    data-no-convert
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    @click="copyGloss"
    :tabindex="interactive ? '0' : undefined"
    @keydown.enter="copyGloss"
    @keydown.space.prevent="copyGloss"
    :role="interactive ? 'button' : undefined"
    :aria-label="word"
  >
    <!-- 正文中的單字 -->
    <span class="ithkuil-inline-text">
      <slot>{{ word }}</slot>
    </span>

    <!-- 列印時顯示的簡短註解 -->
    <span class="on-print" v-if="glossInfo?.short">({{ glossInfo.short }})</span>

    <!-- 點擊複製成功的輕量微提示 -->
    <Transition name="toast">
      <span v-if="showToast" class="copied-toast" role="status" aria-live="polite">
        ✓ {{ i18n.copied }}
      </span>
    </Transition>

    <!-- 純展示 Tooltip 卡片 -->
    <Transition name="pop">
      <div v-if="isVisible && glossInfo" class="ithkuil-tooltip-card" role="tooltip">
        <div class="card-header">
          <span class="word-title">{{ word }}</span>
          <span class="click-hint">💡 {{ i18n.clickToCopy }}</span>
        </div>

        <div class="gloss-section">
          <div class="section-label">{{ i18n.shortGloss }}</div>
          <div class="section-value code-font">{{ glossInfo.short }}</div>
        </div>

        <div class="gloss-section">
          <div class="section-label">{{ i18n.fullGloss }}</div>
          <div class="section-value full-text">{{ glossInfo.full }}</div>
        </div>

        <!-- 底部指向箭頭 -->
        <div class="tooltip-arrow"></div>
      </div>
    </Transition>
  </span>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';
import { parseWord } from '@zsnout/ithkuil/parse';
import { glossWord } from '@zsnout/ithkuil/gloss';
import { useI18n } from '../composables/useI18n.js';

const props = defineProps({
  word: { type: String, required: true },
  interactive: { type: Boolean, default: true }
});

const { i18n } = useI18n('word');

const isVisible = ref(false);
const glossInfo = ref(null);
const isParsed = ref(false);
const showToast = ref(false);

const parse = () => {
  if (isParsed.value) return;
  try {
    const parsed = parseWord(props.word);
    if (parsed) {
      const { short, full } = glossWord(parsed);
      glossInfo.value = { short, full };
    }
  } catch {
    glossInfo.value = { short: '❌ Invalid', full: 'Unparseable phonotactics' };
  } finally {
    isParsed.value = true;
  }
};

// 🎯 防御性监听：在挂载/组件渲染时立即异步或同步解析好，避免移入时阻塞
watch(
  () => props.word,
  () => {
    isParsed.value = false;
    parse();
  },
  { immediate: true }
);

// ⚡ 移入即刻显示（0 延迟，绝不执行复杂逻辑）
const showTooltip = () => {
  if (!props.interactive) return;
  isVisible.value = true;
};

const hideTooltip = () => {
  isVisible.value = false;
};

let copyTimer = null;

const copyToClipboard = async (text) => {
  if (navigator?.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  } catch {
    return false;
  }
};

const copyGloss = async () => {
  if (!glossInfo.value) return;

  const success = await copyToClipboard(`${props.word}: ${glossInfo.value.short}`);
  if (success) {
    showToast.value = true;
    if (copyTimer) clearTimeout(copyTimer);
    copyTimer = setTimeout(() => {
      showToast.value = false;
    }, 1500);
  }
};

onUnmounted(() => {
  if (copyTimer) clearTimeout(copyTimer);
});
</script>

<style scoped>
/* 1. 根容器：隔绝外部文本格式继承与换行错位 */
.ithkuil-word-container {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  vertical-align: middle;
  text-align: left;
  font-style: normal;
  text-decoration: none;
  white-space: nowrap;
}

.ithkuil-word-container:focus-visible .ithkuil-inline-text {
  outline: 2px solid var(--vp-c-accent);
  outline-offset: 2px;
  border-radius: 2px;
}

/* 2. 行内显示的单字文本 */
.ithkuil-inline-text {
  color: var(--vp-c-accent);
  font-family: var(--font-family-mono);
  font-weight: 600;
  font-style: normal;
  border-bottom: 1.5px dashed var(--vp-c-accent);
  padding-bottom: 1px;
  transition: opacity 0.2s;
  white-space: nowrap;
}

.ithkuil-word-container:hover .ithkuil-inline-text {
  opacity: 0.8;
}

/* 3. 悬浮提示卡片：彻底隔绝居中、斜体、粗体等全局样式污染 */
.ithkuil-tooltip-card {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  min-width: 200px;
  max-width: min(320px, calc(100vw - 32px));
  box-sizing: border-box;

  background-color: var(--ic-bg-container);
  color: var(--ic-text);
  border: 1px solid var(--ic-border);
  border-radius: 8px;
  padding: 0.75rem 0.9rem;
  box-shadow: var(--ic-shadow);
  z-index: 10000;

  pointer-events: none !important;
  user-select: none;

  /* 重置卡片内继承样式 */
  text-align: left;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  white-space: normal;
}

:deep(.dark) .ithkuil-tooltip-card,
html.dark .ithkuil-tooltip-card {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.55);
  border-color: rgba(255, 255, 255, 0.15);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0.35rem;
  border-bottom: 1px dashed var(--ic-border);
}

.word-title {
  font-family: var(--font-family-mono);
  font-weight: bold;
  font-size: 0.95rem;
  color: var(--vp-c-accent);
  word-break: break-all;
  font-style: normal;
}

.click-hint,
.section-label {
  font-size: 0.675rem;
  color: var(--ic-text-subtle);
  white-space: nowrap;
  font-style: normal;
}

.section-label {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.1rem;
}

.gloss-section {
  margin-top: 0.35rem;
}

.code-font {
  font-family: var(--font-family-mono);
  font-size: 0.8rem;
  color: var(--vp-c-accent);
  font-weight: 600;
  word-break: break-all;
  line-height: 1.3;
  font-style: normal;
}

.full-text {
  font-size: 0.775rem;
  color: var(--ic-text);
  line-height: 1.35;
  word-break: break-word;
  font-style: normal;
}

/* 4. 气泡箭头 */
.tooltip-arrow {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid var(--ic-border);
  pointer-events: none;
}

:deep(.dark) .tooltip-arrow,
html.dark .tooltip-arrow {
  border-top-color: rgba(255, 255, 255, 0.15);
}

.tooltip-arrow::after {
  content: '';
  position: absolute;
  top: -7px;
  left: -5px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid var(--ic-bg-container);
}

/* 5. 复制提示 Toast */
.copied-toast {
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--ins-color, #10b981);
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: var(--ic-shadow);
  z-index: 10001;
  font-style: normal;
}

/* 6. 过渡动画 */
.pop-enter-active,
.pop-leave-active {
  transition: opacity 0.12s ease-out;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 6px);
}

/* 7. 打印样式适配 */
.on-print {
  display: none;
}

@media print {
  .ithkuil-tooltip-card,
  .copied-toast,
  .click-hint {
    display: none !important;
  }

  .on-print {
    display: inline;
    font-family: var(--font-family-mono);
    font-size: 0.85em;
    color: #444444;
    margin-left: 0.15em;
    font-feature-settings: "chws" 1, "halt" 1;
  }

  .ithkuil-inline-text {
    border-bottom: none !important;
    color: #000000 !important;
  }
}
</style>