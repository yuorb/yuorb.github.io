<template>
    <span class="ithkuil-word-container" @mouseenter="showTooltip" @mouseleave="hideTooltip" @click="copyGloss">
        <!-- 正文中的單字 -->
        <span class="ithkuil-inline-text">
            <slot>{{ word }}</slot>
        </span>

        <!-- 🎯 新增：列印時顯示的簡短註解 -->
        <span class="on-print" v-if="glossInfo?.short">({{ glossInfo.short }})</span>

        <!-- 點擊複製成功的輕量微提示 -->
        <Transition name="toast">
            <span v-if="showToast" class="copied-toast">
                ✓ {{ i18n.copied }}
            </span>
        </Transition>

        <!-- 純展示 Tooltip 卡片 -->
        <Transition name="pop">
            <div v-if="isVisible && glossInfo" class="ithkuil-tooltip-card">
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
import { ref, onMounted, onUnmounted } from 'vue';
import { parseWord } from '@zsnout/ithkuil/parse';
import { glossWord } from '@zsnout/ithkuil/gloss';
import { useI18n } from '../composables/useI18n.js';

const props = defineProps({
    word: { type: String, required: true }
});

const { i18n } = useI18n('word')

const isVisible = ref(false);
const glossInfo = ref(null);
const isParsed = ref(false);
const showToast = ref(false);

onMounted(() => {
  // 预先解析文字（确保打印/未 Hover 情况下能取得 Gloss）
  parse();
});

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

const showTooltip = () => {
    parse();
    isVisible.value = true;
};

const hideTooltip = () => {
    isVisible.value = false;
};

let copyTimer = null;

const copyGloss = async () => {
    parse();
    if (!glossInfo.value) return;

    if (typeof window === 'undefined' || !navigator?.clipboard) return;

    try {
        await navigator.clipboard.writeText(`${props.word}: ${glossInfo.value.short}`);
        showToast.value = true;

        // 🎯 清理上一次未完成的定时器
        if (copyTimer) clearTimeout(copyTimer);
        copyTimer = setTimeout(() => {
            showToast.value = false;
        }, 1500);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
};

// 🎯 组件销毁时安全清理
onUnmounted(() => {
  if (copyTimer) clearTimeout(copyTimer);
});
</script>

<style scoped>
.ithkuil-word-container {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.ithkuil-inline-text {
    color: var(--vp-c-accent);
    font-family: var(--font-family-mono);
    font-weight: 600;
    border-bottom: 1.5px dashed var(--vp-c-accent);
    padding-bottom: 1px;
    transition: opacity 0.2s;
}

.ithkuil-word-container:hover .ithkuil-inline-text {
    opacity: 0.8;
}

/* 🎯 气泡卡片：防溢出与自适应优化 */
.ithkuil-tooltip-card {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    min-width: 200px;

    /* 🎯 边界防溢出核心：最大宽度不超过视口减去两侧安全边距 */
    max-width: min(320px, calc(100vw - 32px));
    box-sizing: border-box;

    background-color: var(--ic-bg-container);
    color: var(--ic-text);
    border: 1px solid var(--ic-border);
    border-radius: 8px;
    padding: 0.75rem 0.9rem;
    box-shadow: var(--ic-shadow);
    z-index: 10000;
    pointer-events: none;
}

/* 暗色模式下增强阴影与微光边框 */
:deep(.dark) .ithkuil-tooltip-card {
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
}

.click-hint,
.section-label {
    font-size: 0.675rem;
    color: var(--ic-text-subtle);
    white-space: nowrap;
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
}

.full-text {
    font-size: 0.775rem;
    color: var(--ic-text);
    line-height: 1.35;
    word-break: break-word;
}

/* 🎯 气泡小三角箭头（消除重影与暗色变色） */
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
}

:deep(.dark) .tooltip-arrow {
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

/* 复制成功的轻量微提示 */
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
}

/* 动画 */
.pop-enter-active,
.pop-leave-active {
    transition: opacity 0.15s ease, transform 0.15s ease;
}

.pop-enter-from,
.pop-leave-to {
    opacity: 0;
    transform: translate(-50%, 4px);
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

.on-print {
  display: none;
}

/* 🎯 打印模式控制 */
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