<template>
  <div class="ithkuil-sandbox">
    <div class="search-box">
      <input
        v-model="inputWord"
        type="text"
        :placeholder="t('placeholder')"
        class="sandbox-input"
        @input="onInput"
      />
    </div>

    <!-- 解析成功：展示形态学即时解构 -->
    <div v-if="parsedData && !hasError" class="board">

      <!-- 🎯 点选触发式 Block Script SVG 绘制区 -->
      <div class="script-card">
        <div class="card-header">
          <span class="card-label">🖋️ {{ t('scriptTitle') }}</span>

          <div class="header-actions">
            <button
              v-if="!isScriptGenerated"
              class="generate-btn"
              @click="handleGenerateScript"
            >
              ⚡ {{ t('generateScriptBtn') }}
            </button>

            <!-- 生成 SVG 后显示的快捷导出按钮组 -->
            <template v-else>
              <button class="action-btn" :title="t('copySvgHint')" @click="copySvgCode">
                📋 {{ isSvgCopied ? t('copied') : t('copySvg') }}
              </button>
              <button class="action-btn download-btn" :title="t('downloadSvgHint')" @click="downloadSvg">
                ⬇️ {{ t('downloadSvg') }}
              </button>
            </template>
          </div>
        </div>

        <!-- SVG 渲染容器 -->
        <div v-show="isScriptGenerated" ref="svgContainer" class="svg-render-area"></div>
      </div>

      <div class="board-header">📊 {{ t('deconstructTitle') }}</div>

      <div class="grid">
        <div class="card">
          <div class="label">{{ t('shortGloss') }}</div>
          <div class="value code-font">{{ glossShort }}</div>
        </div>

        <div class="card">
          <div class="label">{{ t('fullGloss') }}</div>
          <div class="value full-text">{{ glossFull }}</div>
        </div>
      </div>

      <details class="raw-data">
        <summary>🔍 {{ t('viewAST') }}</summary>
        <div class="language-json extra-class">
          <pre class="shiki"><code>{{ formattedAST }}</code></pre>
        </div>
      </details>
    </div>

    <div v-else-if="hasError" class="board error-board">
      <div class="error-msg">❌ {{ errorMessage }}</div>
    </div>

    <div v-else class="welcome-tip">
      💡 {{ t('welcomeTip') }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onUnmounted } from 'vue';
import { parseWord } from '@zsnout/ithkuil/parse';
import { glossWord } from '@zsnout/ithkuil/gloss';
import { textToScript, CharacterRow, Anchor, fitViewBox } from '@zsnout/ithkuil/script';
import { useI18n } from '../composables/useI18n.js';

const { i18n } = useI18n('sandbox');

// 🎯 安全响应式 i18n 取值函数，防止对象取值与 Ref 混淆
const t = (key) => {
  if (!i18n) return key;
  const source = i18n.value || i18n;
  return source[key] || key;
};

const inputWord = ref('');
const parsedData = ref(null);
const glossShort = ref('');
const glossFull = ref('');
const hasError = ref(false);
const errorMessage = ref('');

const isScriptGenerated = ref(false);
const isSvgCopied = ref(false);
const svgContainer = ref(null);

// 🎯 防御大文本 JSON 序列化性能浪费
const formattedAST = computed(() => {
  if (!parsedData.value) return '';
  return JSON.stringify(parsedData.value, null, 2);
});

// 🎯 输入防抖逻辑
let parseDebounceTimer = null;
const onInput = () => {
  if (parseDebounceTimer) clearTimeout(parseDebounceTimer);
  parseDebounceTimer = setTimeout(() => {
    handleParse();
  }, 150); // 150ms 黄金防抖时延
};

// 🎯 生成具有可访问性 (a11y) 的原生 SVG
const handleGenerateScript = async () => {
  if (typeof window === 'undefined') return;

  const target = inputWord.value.trim();
  if (!target) return;

  // 保证容器节点被显示并挂载到 DOM
  isScriptGenerated.value = true;
  await nextTick();

  if (!svgContainer.value) return;
  svgContainer.value.innerHTML = '';

  try {
    const res = textToScript(target);
    if (res.ok) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

      const titleId = `ithkuil-script-title-${Math.random().toString(36).substring(2, 9)}`;
      const titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      titleEl.setAttribute('id', titleId);
      titleEl.textContent = `Ithkuil Block Script: ${target}`;
      svg.appendChild(titleEl);

      svg.setAttribute('aria-labelledby', titleId);
      svg.setAttribute('role', 'img');

      const row = CharacterRow({ children: res.value, compact: true });
      const anchored = Anchor({ at: 'cc', children: row });

      svg.appendChild(anchored);
      svgContainer.value.appendChild(svg);
      fitViewBox(svg);
    } else {
      isScriptGenerated.value = false;
    }
  } catch (err) {
    console.error('Failed to render Ithkuil script SVG:', err);
    isScriptGenerated.value = false;
  }
};

const getFormattedSvgString = () => {
  if (!svgContainer.value) return '';
  const svgEl = svgContainer.value.querySelector('svg');
  if (!svgEl) return '';

  const clone = svgEl.cloneNode(true);
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  return new XMLSerializer().serializeToString(clone);
};

let copyTimer = null;
const copySvgCode = async () => {
  const svgString = getFormattedSvgString();
  if (!svgString) return;

  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(svgString);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = svgString;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    isSvgCopied.value = true;
    if (copyTimer) clearTimeout(copyTimer);
    copyTimer = setTimeout(() => {
      isSvgCopied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy SVG: ', err);
  }
};

const downloadSvg = () => {
  const svgString = getFormattedSvgString();
  if (!svgString) return;

  const rawWord = inputWord.value.trim() || 'ithkuil-word';
  const safeFilename = rawWord.replace(/[/\\?%*:|"<>]/g, '-').slice(0, 32);

  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${safeFilename}-script.svg`;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);

  // 🎯 延长 Blob URL 释放时间至 10 秒，防御低配置设备或慢速网络下载中断
  setTimeout(() => URL.revokeObjectURL(url), 10000);
};

const handleParse = () => {
  const target = inputWord.value.trim();
  isScriptGenerated.value = false;
  isSvgCopied.value = false;

  if (!target) {
    parsedData.value = null;
    hasError.value = false;
    return;
  }

  try {
    const result = parseWord(target);

    if (result) {
      parsedData.value = result;
      hasError.value = false;

      const { short, full } = glossWord(result);
      glossShort.value = short;
      glossFull.value = full;
    } else {
      parsedData.value = null;
      hasError.value = true;
      errorMessage.value = `${t('invalidError')} (Unparseable)`;
    }
  } catch (error) {
    parsedData.value = null;
    hasError.value = true;
    errorMessage.value = `${t('invalidError')}: ${error.message}`;
  }
};

// 🎯 组件卸载时释放定时器
onUnmounted(() => {
  if (parseDebounceTimer) clearTimeout(parseDebounceTimer);
  if (copyTimer) clearTimeout(copyTimer);
});
</script>

<style scoped>
.ithkuil-sandbox {
  border: 1px solid var(--ic-border);
  border-radius: 8px;
  padding: 1.25rem;
  background-color: var(--ic-bg-container);
  margin: 1.5rem 0;
  box-shadow: var(--ic-shadow);
}

.sandbox-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--ic-border);
  border-radius: 6px;
  font-size: 1rem;
  font-family: var(--font-family-mono);
  background-color: var(--ic-bg-card);
  color: var(--ic-text);
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s, background-color 0.2s;
}

.sandbox-input:focus {
  border-color: var(--vp-c-accent);
}

.board {
  margin-top: 1.25rem;
}

.script-card {
  background-color: var(--ic-bg-card);
  border: 1px solid var(--ic-border);
  border-radius: 6px;
  padding: 0.85rem 1rem;
  margin-bottom: 1.25rem;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--ic-text-subtle);
  text-transform: uppercase;
}

.generate-btn,
.action-btn {
  background-color: var(--vp-c-accent);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0.35rem 0.65rem;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease, background-color 0.2s ease;
  white-space: nowrap;
}

.action-btn {
  background-color: var(--ic-bg-container);
  color: var(--ic-text);
  border: 1px solid var(--ic-border);
}

.download-btn {
  background-color: var(--vp-c-accent);
  color: #ffffff;
  border: none;
}

.generate-btn:hover,
.action-btn:hover {
  opacity: 0.85;
}

.svg-render-area {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px dashed var(--ic-border);
  text-align: center;
}

.svg-render-area :deep(svg) {
  max-width: 100%;
  height: 90px;
  fill: var(--ic-text);
  stroke: var(--ic-text);
}

.board-header {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: var(--ic-text);
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

.card {
  background-color: var(--ic-bg-card);
  border: 1px solid var(--ic-border);
  padding: 0.85rem;
  border-radius: 6px;
}

.label {
  font-size: 0.75rem;
  color: var(--ic-text-subtle);
  margin-bottom: 0.35rem;
  text-transform: uppercase;
}

.code-font {
  font-family: var(--font-family-mono);
  color: var(--vp-c-accent);
  font-weight: 600;
  word-break: break-all;
}

.full-text {
  color: var(--ic-text);
  line-height: 1.5;
  font-size: 0.95rem;
}

.raw-data {
  margin-top: 1rem;
  font-size: 0.85rem;
  color: var(--ic-text);
}

.error-board {
  padding: 0.75rem;
  background-color: var(--ic-bg-card);
  border: 1px solid var(--del-color);
  border-radius: 6px;
}

.error-msg {
  color: var(--del-color);
  font-weight: 600;
}

.welcome-tip {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: var(--ic-text-subtle);
  text-align: center;
}
</style>