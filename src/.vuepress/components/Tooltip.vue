<template>
  <component
    :is="abbreviation ? 'abbr' : 'span'"
    :data-label="label"
    :class="[
      position,
      size,
      {
        'vue-custom-tooltip': active && label,
        'is-sticky': sticky,
        'has-multiline': multiline,
        'is-underlined': underlined || abbreviation,
      },
    ]"
    :style="{ cursor: abbreviation ? 'help' : 'pointer' }"
  >
    <slot></slot>
    <span v-if="label" class="on-print">（{{ label }}）</span>
  </component>
</template>

<script setup>
defineProps({
  label: { type: String, default: '' },
  active: { type: Boolean, default: true },
  sticky: { type: Boolean, default: false },
  multiline: { type: Boolean, default: false },
  underlined: { type: Boolean, default: false },
  abbreviation: { type: Boolean, default: false },
  position: {
    type: String,
    default: 'is-top',
    validator: (v) => ['is-top', 'is-bottom', 'is-left', 'is-right'].includes(v)
  },
  size: {
    type: String,
    default: 'is-medium',
    validator: (v) => ['is-small', 'is-medium', 'is-large'].includes(v)
  }
});
</script>

<style scoped>
/* -------------------------------------------------------------------------- */
/* 🎯 主题变量与容器（无箭头现代卡片风格）                                        */
/* -------------------------------------------------------------------------- */
.vue-custom-tooltip {
  --tooltip-bg: var(--ic-bg-container, #ffffff);
  --tooltip-color: var(--ic-text, #2c3e50);
  --tooltip-border-color: var(--ic-border, #e2e8f0);
  --tooltip-radius: 8px;
  --tooltip-shadow: var(--ic-shadow, 0 4px 16px rgba(0, 0, 0, 0.12));

  position: relative;
  display: inline-block;
  text-decoration-line: none !important;
}

.vue-custom-tooltip.is-underlined {
  border-bottom: 1.5px dashed var(--vp-c-accent);
  padding-bottom: 1px;
}

/* -------------------------------------------------------------------------- */
/* 🎯 气泡主体（伪元素 ::after，已移除箭头 ::before）                            */
/* -------------------------------------------------------------------------- */
.vue-custom-tooltip::after {
  position: absolute;
  content: attr(data-label);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  color: var(--tooltip-color);
  background-color: var(--tooltip-bg);
  border: 1px solid var(--tooltip-border-color);
  border-radius: var(--tooltip-radius);
  box-shadow: var(--tooltip-shadow);

  /* 防溢出核心 */
  width: auto;
  max-width: min(320px, calc(100vw - 32px)) !important;
  box-sizing: border-box;
  word-break: break-word;

  padding: 0.45rem 0.8rem;
  font-size: 0.8rem !important;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: normal !important;
  text-transform: none;
  z-index: 10000;
  white-space: nowrap;

  transition:
    opacity 150ms ease,
    visibility 150ms ease,
    transform 150ms ease;
}

/* 暗色模式自适应 */
:deep(.dark) .vue-custom-tooltip {
  --tooltip-border-color: rgba(255, 255, 255, 0.15);
  --tooltip-shadow: 0 6px 20px rgba(0, 0, 0, 0.55);
}

/* -------------------------------------------------------------------------- */
/* 🎯 Hover / Sticky 触发显示                                                  */
/* -------------------------------------------------------------------------- */
.vue-custom-tooltip:not([data-label='']):hover::after,
.vue-custom-tooltip:not([data-label='']).is-sticky::after {
  opacity: 1;
  visibility: visible;
}

/* -------------------------------------------------------------------------- */
/* 🎯 四向定位与微距悬浮动画 (Floating Elevation)                              */
/* -------------------------------------------------------------------------- */

/* 1. 上 (is-top) */
.vue-custom-tooltip.is-top::after {
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
}
.vue-custom-tooltip.is-top:hover::after,
.vue-custom-tooltip.is-top.is-sticky::after {
  transform: translateX(-50%) translateY(0);
}

/* 2. 下 (is-bottom) */
.vue-custom-tooltip.is-bottom::after {
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
}
.vue-custom-tooltip.is-bottom:hover::after,
.vue-custom-tooltip.is-bottom.is-sticky::after {
  transform: translateX(-50%) translateY(0);
}

/* 3. 左 (is-left) */
.vue-custom-tooltip.is-left::after {
  right: calc(100% + 6px);
  top: 50%;
  transform: translateY(-50%) translateX(4px);
}
.vue-custom-tooltip.is-left:hover::after,
.vue-custom-tooltip.is-left.is-sticky::after {
  transform: translateY(-50%) translateX(0);
}

/* 4. 右 (is-right) */
.vue-custom-tooltip.is-right::after {
  left: calc(100% + 6px);
  top: 50%;
  transform: translateY(-50%) translateX(-4px);
}
.vue-custom-tooltip.is-right:hover::after,
.vue-custom-tooltip.is-right.is-sticky::after {
  transform: translateY(-50%) translateX(0);
}

/* -------------------------------------------------------------------------- */
/* 🎯 多行文本与打印控制                                                       */
/* -------------------------------------------------------------------------- */
.vue-custom-tooltip.has-multiline::after {
  display: block;
  text-align: left;
  line-height: 1.45;
  white-space: pre-wrap;
}

.vue-custom-tooltip.has-multiline.is-small::after { width: 160px; }
.vue-custom-tooltip.has-multiline.is-medium::after { width: 240px; }
.vue-custom-tooltip.has-multiline.is-large::after {
  width: 320px;
  max-width: min(320px, calc(100vw - 32px)) !important;
}

.on-print {
  display: none;
}

@media print {
  .on-print {
    display: inline;
    font-size: 0.85em;
    color: var(--ic-text-subtle, #666666);
  }
}
</style>