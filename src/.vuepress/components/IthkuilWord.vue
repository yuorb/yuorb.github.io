<template>
  <span
    class="ithkuil-word-container"
    data-no-convert
    :data-copy="copyContent"
    :data-copy-toast="i18n.copied"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    :tabindex="interactive ? '0' : undefined"
    :role="interactive ? 'button' : undefined"
    :aria-label="word"
  >
    <!-- 正文中的单字 -->
    <span class="ithkuil-inline-text">
      <slot>{{ word }}</slot>
    </span>

    <!-- 打印时显示的简短注解 -->
    <span class="on-print" v-if="glossInfo?.short">({{ glossInfo.short }})</span>

    <!-- 纯展示 Tooltip 卡片 -->
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

        <!-- 底部指向箭头 -->
        <div class="tooltip-arrow"></div>
      </div>
    </Transition>
  </span>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
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

watch(
  () => props.word,
  () => {
    isParsed.value = false;
    parse();
  },
  { immediate: true }
);

const showTooltip = () => {
  if (!props.interactive) return;
  isVisible.value = true;
};

const hideTooltip = () => {
  isVisible.value = false;
};

// 动态计算绑定给 data-copy 的文本
const copyContent = computed(() => {
  if (!glossInfo.value) return '';
  return `${props.word}: ${glossInfo.value.short}`;
});
</script>

<style scoped>
/* 1. 根容器 */
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

/* 3. 悬浮提示卡片 */
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

/* 5. 过渡动画 */
.pop-enter-active,
.pop-leave-active {
  transition: opacity 0.12s ease-out;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
}

/* 6. 打印样式适配 */
.on-print {
  display: none;
}

@media print {
  .ithkuil-tooltip-card,
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