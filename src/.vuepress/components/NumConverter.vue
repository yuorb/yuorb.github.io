<template>
  <div class="ithkuil-converter" role="region" aria-label="Ithkuil Number Converter">
    <!-- 输入与控制区 -->
    <div class="input-grid">
      <div class="field">
        <label for="num-input">{{ t('inputLabel') }}</label>
        <input
          id="num-input"
          type="text"
          v-model="numInput"
          :placeholder="t('placeholder')"
          autocomplete="off"
        />
      </div>

      <div class="field">
        <label for="type-select">{{ t('typeLabel') }}</label>
        <select id="type-select" v-model="type">
          <option value="0">{{ t('types.s0') }}</option>
          <option value="1">{{ t('types.s1') }}</option>
          <option value="2">{{ t('types.s2') }}</option>
          <option value="3">{{ t('types.s3') }}</option>
        </select>
      </div>

      <div class="field">
        <label for="polarity-select">{{ t('polarityLabel') }}</label>
        <select id="polarity-select" v-model="polarity">
          <option value="0">{{ t('polarity.pos') }}</option>
          <option value="1">{{ t('polarity.neg') }}</option>
        </select>
      </div>

      <div class="field">
        <label for="simplify-select">{{ t('simplifyLabel') }}</label>
        <select id="simplify-select" v-model="simplify">
          <option value="0">{{ t('simplify.short') }}</option>
          <option value="1">{{ t('simplify.full') }}</option>
        </select>
      </div>

      <div class="field">
        <label for="omit-select">{{ t('omitLabel') }}</label>
        <select id="omit-select" v-model="omit">
          <option value="0">{{ t('omit.default') }}</option>
          <option value="1">{{ t('omit.skip100') }}</option>
          <option value="2">{{ t('omit.keep100') }}</option>
        </select>
      </div>
    </div>

    <!-- 步骤化结果（Infographic Pipeline） -->
    <h3 class="result-title">{{ t('resultTitle') }}</h3>

    <div class="status-msg" v-if="!numInput">{{ t('msgEmpty') }}</div>
    <div class="status-msg error" v-else-if="!isValidNum">{{ t('msgInvalid') }}</div>

    <ol class="pipeline" v-else>
      <li class="step-card">
        <div class="step-number">01</div>
        <div class="step-content">
          <span class="step-label">{{ t('steps.simplified') }}</span>
          <code
            class="step-value clickable"
            @click="copyText(outputResult.simplified, 'step1')"
            :title="t('clickToCopy')"
          >
            {{ outputResult.simplified }}
            <span class="copy-badge" v-if="copiedStep === 'step1'">{{ t('copied') }}</span>
          </code>
        </div>
      </li>

      <li class="step-card">
        <div class="step-number">02</div>
        <div class="step-content">
          <span class="step-label">{{ t('steps.chunked') }}</span>
          <code
            class="step-value clickable"
            @click="copyText(outputResult.chunked, 'step2')"
            :title="t('clickToCopy')"
          >
            {{ outputResult.chunked }}
            <span class="copy-badge" v-if="copiedStep === 'step2'">{{ t('copied') }}</span>
          </code>
        </div>
      </li>

      <li class="step-card">
        <div class="step-number">03</div>
        <div class="step-content">
          <span class="step-label">{{ t('steps.basePrep') }}</span>
          <code
            class="step-value clickable"
            @click="copyText(outputResult.basePrep, 'step3')"
            :title="t('clickToCopy')"
          >
            {{ outputResult.basePrep }}
            <span class="copy-badge" v-if="copiedStep === 'step3'">{{ t('copied') }}</span>
          </code>
        </div>
      </li>

      <li class="step-card">
        <div class="step-number">04</div>
        <div class="step-content">
          <span class="step-label">{{ t('steps.baseSub') }}</span>
          <code
            class="step-value clickable"
            @click="copyText(outputResult.baseSub, 'step4')"
            :title="t('clickToCopy')"
          >
            {{ outputResult.baseSub }}
            <span class="copy-badge" v-if="copiedStep === 'step4'">{{ t('copied') }}</span>
          </code>
        </div>
      </li>

      <li class="step-card highlight">
        <div class="step-number">05</div>
        <div class="step-content">
          <span class="step-label">{{ t('steps.expSub') }}</span>
          <code
            class="step-value clickable"
            @click="copyText(outputResult.expSub, 'step5')"
            :title="t('clickToCopy')"
          >
            {{ outputResult.expSub }}
            <span class="copy-badge" v-if="copiedStep === 'step5'">{{ t('copied') }}</span>
          </code>
        </div>
      </li>

      <li class="step-card" v-if="type === '0'">
        <div class="step-number">06</div>
        <div class="step-content">
          <span class="step-label">{{ t('steps.posNum') }}</span>
          <code
            class="step-value clickable"
            @click="copyText(outputResult.posNum, 'step6')"
            :title="t('clickToCopy')"
          >
            {{ outputResult.posNum }}
            <span class="copy-badge" v-if="copiedStep === 'step6'">{{ t('copied') }}</span>
          </code>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref, watch, computed, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n.js'

// 1. 全局统一 I18N 结合安全 key path 解析
const { i18n } = useI18n('numconverter')

const t = (path) => {
  if (!i18n) return path
  const keys = path.split('.')
  let res = i18n.value || i18n
  for (const k of keys) {
    if (res && typeof res === 'object' && k in res) {
      res = res[k]
    } else {
      return path
    }
  }
  return typeof res === 'string' ? res : path
}

// 2. 响应式状态与防爆阈值控制
const MAX_DIGITS = 64 // 1. 限制输入上限防御
const numInput = ref('1234')
const type = ref('0')
const polarity = ref('0')
const simplify = ref('0')
const omit = ref('0')

const isValidNum = computed(() => {
  const trimmed = numInput.value.trim()
  return /^[0-9]+$/.test(trimmed) && trimmed.length <= MAX_DIGITS
})

const outputResult = ref({})
const copiedStep = ref('')
let timer = null
let debounceTimer = null

// SSR 防护与剪贴板处理
const copyText = async (text, stepKey) => {
  if (!text || typeof window === 'undefined') return

  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }

    copiedStep.value = stepKey
    clearTimeout(timer)
    timer = setTimeout(() => {
      copiedStep.value = ''
    }, 1808)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

// 3. Ithkuil 对照表与核心算法
const 个数 = ["%#vr&", "%#ll&", "%#ks&", "%#z&", "%#pš&", "%#st&", "%#cp&", "%#ns&", "%#čk&", "%#lẓ&"]
const 十倍 = ["", "ars", "ärs", "ers", "irs", "ëirs", "örs", "ors", "ürs", "urs"]

const 替换表 = (n) => {
  const patterns = ['', ' %#pc&ui ', ' %#kẓ&ui ', ' %#pc&ui %#kẓ&ui ', ' %#čg&ui ']
  const result = []
  for (let i = 0; i < n; i++) {
    const level = Math.floor(i / 4)
    const patternIndex = (i % 4) + 1
    let pattern = patterns[patternIndex] || ''
    for (let j = 0; j < level; j++) {
      pattern += '%#čg&ui '
    }
    result.push(pattern)
  }
  return [].concat('', result)
}

function 删前置零(text) {
  if (!text) return '0'
  const trimmed = text.trim()
  if (/^0+$/.test(trimmed)) return '0'
  return trimmed.replace(/^0+/, '')
}

function 简替(数字, 极性) {
  let result = ""
  if (数字 !== "") {
    if (极性 === "1") result = "%#-" + 数字 + "&a"
    else if (极性 === "0") result = "%#" + 数字 + "&a"
  }
  return result
}

function 千数转换(text) {
  if (text.length === 4) {
    let a = text.slice(0, 2), b = text.slice(2, 4)
    let a1 = 个数[parseInt(a[1]) || 0], b1 = 个数[parseInt(b[1]) || 0]
    let a2 = 十倍[parseInt(a[0]) || 0], b2 = 十倍[parseInt(b[0]) || 0]
    return `${a1}${a2}@ (%#gz&ui) ${b1}${b2}üň`
  } else if (text.length === 1) {
    return 个数[parseInt(text) || 0] + "@"
  } else if (text.length === 2) {
    let a1 = 个数[parseInt(text[1]) || 0], a2 = 十倍[parseInt(text[0]) || 0]
    return `${a1}${a2}@`
  } else if (text.length === 3) {
    let a1 = 个数[parseInt(text.slice(0, 1)) || 0]
    let b1 = 个数[parseInt(text.slice(2, 3)) || 0]
    let b2 = 十倍[parseInt(text.slice(1, 2)) || 0]
    return `${a1}@ (%#gz&ui) ${b1}${b2}üň`
  }
  return ""
}

// 2. 使用 BigInt 优化数制分节逻辑（代替纯字符串切片与分节）
function BigInt分节替换(inputStr, type) {
  const trimmed = 删前置零(inputStr)
  if (trimmed === '0') return ''

  try {
    let num = BigInt(trimmed)
    const chunks = []

    // 按 10000 取模切分，天然防御零值填充错位
    while (num > 0n) {
      chunks.push(Number(num % 10000n))
      num = num / 10000n
    }

    const n = chunks.length - 1
    const 单位表 = 替换表(n)
    let result = ''

    for (let i = n; i >= 0; i--) {
      const chunkVal = chunks[i]
      if (chunkVal === 0) continue

      const cleanChunk = chunkVal.toString()
      const unit = 单位表[i] || ''

      if (type === 0) result += cleanChunk + unit
      else if (type === 1) result += "%#" + cleanChunk + "&ëʼi" + unit
      else if (type === 2) result += 千数转换(cleanChunk) + unit
    }

    return result.replace(/ëʼi/g, "a")
  } catch (err) {
    return ''
  }
}

function 词干(text, type) {
  let result = ""
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "#") {
      if (type === "0") result += "o"
      else if (type === "1") result += "a"
      else if (type === "2") result += "e"
      else if (type === "3") result += "u"
    } else {
      result += text[i]
    }
  }
  return result
}

function 简替形(text, value) {
  let newText = ''
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (char === '%') char = value === "0" ? 'w' : ''
    else if (char === '&') char = value === "0" ? '' : 'al'
    newText += char
  }
  return newText
}

function 位置名数替换(文本, 个数) {
  let 替换后的文本 = ""
  for (let i = 0; i < 文本.length; i++) {
    const 数字 = parseInt(文本[i])
    if (!isNaN(数字) && 数字 >= 0 && 数字 < 个数.length) {
      if (i === 0) 替换后的文本 += 个数[数字] + "a "
      else 替换后的文本 += 个数[数字] + "ëʼi "
    }
  }
  return 替换后的文本.trim()
}

// 3. 正则安全化：分步替换，降低正则回溯压力
function 格和音渡处理(text) {
  if (text.length > 1024) return text // 防御超长文本正则引发堆栈溢出

  let a = text.replace(/(w)?(\S)vr(al)?ars/g, '$1$2j$3')
  a = a.replace(/\((w)?(\S)gz(al)?ui\) (?:w)?\Svr(?:al)?üň/g, '$1$2gz$3ui')
  a = a.replace(/\s(?:w)?\Svr(?:al)?üň/g, '')

  a = a.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)gz(al)?ui/g, '$2$3gz$4$1')
  a = a.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)pc(al)?ui/g, '$2$3pc$4$1')
  a = a.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)kẓ(al)?ui/g, '$2$3kẓ$4$1')
  a = a.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)čg(al)?ui/g, '$2$3čg$4$1')

  let result = a.replace(/@/g, 'ëʼi')
  if (result.includes('ëʼi')) {
    result = result.replace('ëʼi', 'a')
  }
  return result.replace(/üň w(\S{1,3})ui/g, (match, p1) => `üň ${p1}alui`)
}

function 省略处理(text, type) {
  if (type === "0") return text
  if (type === "1") return text.replace(/\s\((w)?(\S)gz(al)?ui\)/g, '')
  return text.replace(/(\(|\))/g, '')
}

// 核心转换计算逻辑
function computePipeline() {
  if (!isValidNum.value || !numInput.value) {
    outputResult.value = {}
    return
  }

  let rawNum = numInput.value.trim()
  const t = type.value, p = polarity.value, s = simplify.value, o = omit.value

  const 简替数 = 词干(简替(rawNum, p), t)
  const 简化简替数 = 简替形(简替数, s)
  const 位置名数 = 简替形(词干(位置名数替换(rawNum, 个数), t), s)

  rawNum = 删前置零(rawNum)

  // 使用 BigInt 计算分节格式
  let 分节数 = ''
  try {
    分节数 = BigInt(rawNum).toLocaleString('en-US') // 优雅输出分节，支持大数
  } catch {
    分节数 = rawNum
  }
  if (p === "1") 分节数 = "-" + 分节数

  const 简化分替串 = 简替形(词干(BigInt分节替换(rawNum, 0), t), s)
  const 简化表分替串 = 简替形(词干(BigInt分节替换(rawNum, 1), t), s)
  const 简化千位转数 = 格和音渡处理(简替形(词干(BigInt分节替换(rawNum, 2), t), s))

  let 表记分数替串 = "", 千位转数 = "", 位置名数串 = ""

  if (p === "1") {
    表记分数替串 = "wetvyahnuʼu " + 简化表分替串
    千位转数 = "wetvyahnuʼu " + 简化千位转数
    位置名数串 = "wetvyalša " + 位置名数.replace("a ", "ëʼi ")
  } else if (rawNum === '0') {
    表记分数替串 = 简替形(词干("%#vr&a", t), s)
    千位转数 = 简替形(词干("%#vr&a", t), s)
    位置名数串 = 位置名数
  } else {
    表记分数替串 = 简化表分替串
    千位转数 = 简化千位转数
    位置名数串 = 位置名数
  }

  outputResult.value = {
    simplified: 简化简替数,
    chunked: 分节数,
    basePrep: 简化分替串,
    baseSub: 表记分数替串,
    expSub: 省略处理(千位转数, o),
    posNum: 位置名数串
  }
}

// 4. 防抖 (Debounce) 处理输入 & 异步解耦，切断 CPU 密集型运算阻塞渲染
watch([numInput, type, polarity, simplify, omit], () => {
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    computePipeline()
  }, 150) // 150ms 输入防抖
}, { immediate: true })

onUnmounted(() => {
  if (timer) clearTimeout(timer)
  if (debounceTimer) clearTimeout(debounceTimer)
})
</script>

<style scoped lang="scss">
.step-value.clickable {
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s, border-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: var(--vp-c-accent-soft);
    outline: 1px dashed var(--vp-c-accent);
  }
}

.copy-badge {
  font-family: var(--font-family);
  font-size: 0.75rem;
  color: var(--vp-c-accent);
  background-color: var(--ic-bg-container);
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-accent);
  margin-left: 8px;
  white-space: nowrap;
  animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-2px); }
  to { opacity: 1; transform: translateY(0); }
}

.ithkuil-converter {
  font-family: var(--font-family);
  background-color: var(--ic-bg-container);
  color: var(--ic-text);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--ic-border);
  box-shadow: var(--ic-shadow);
  margin: 1.5rem 0;
}

.input-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 12px;
  margin-bottom: 2rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 0.85rem;
    color: var(--ic-text-subtle);
    font-weight: 600;
  }
}

input, select {
  font-family: inherit;
  padding: 8px 10px;
  border: 1px solid var(--ic-border);
  background-color: var(--ic-bg-card);
  color: var(--ic-text);
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s, background-color 0.2s;

  &:focus {
    border-color: var(--vp-c-accent);
  }
}

select option {
  background-color: var(--ic-bg-container);
  color: var(--ic-text);
}

.result-title {
  font-family: var(--font-family-heading);
  font-size: 1.1rem;
  margin: 0 0 1rem 0;
  border-bottom: 1px solid var(--ic-border);
  padding-bottom: 0.5rem;
  color: var(--ic-text);
}

.status-msg {
  padding: 1rem;
  background-color: var(--ic-bg-card);
  border-radius: 6px;
  color: var(--ic-text-subtle);

  &.error {
    color: var(--del-color);
  }
}

.pipeline {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.step-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: var(--ic-bg-card);
  border: 1px solid var(--ic-border);
  border-left: 4px solid var(--ic-border);
  padding: 12px 16px;
  border-radius: 6px;

  &.highlight {
    border-left-color: var(--vp-c-accent);
  }
}

.step-number {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--vp-c-accent);
}

.step-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.step-label {
  font-size: 0.8rem;
  color: var(--ic-text-subtle);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.step-value {
  font-family: var(--font-family-mono);
  font-size: 1rem;
  color: var(--ic-text);
  background-color: var(--vp-c-accent-soft);
  padding: 6px 10px;
  border-radius: 4px;
  word-break: break-all;
}

@media print {
  .ithkuil-converter {
    border: none;
    background: transparent !important;
    color: black !important;
  }
  .input-grid {
    display: none;
  }
  .step-card {
    border: 1px solid #ccc !important;
    break-inside: avoid;
  }
}
</style>