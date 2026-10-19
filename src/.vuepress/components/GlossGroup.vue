<template>
  <!-- 语义等价于旧的 <div class="indent">，作为一组 gloss 示例的容器 -->
  <div class="indent">
    <slot />
  </div>
</template>

<script setup>
// GlossGroup: 包裹一组 <GlossEntry>，缩进样式由 index.scss 的 .indent 提供
</script>
