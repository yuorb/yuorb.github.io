---
title: 在线 Ithkuil 词条解析沙盒
icon: main
category:
  - 工具
tag:
  - Ithkuil
  - 语法解析器
---

# 在线 Ithkuil 词条解析沙盒

使用下方互动工具可即时拆解 New Ithkuil 词汇的形态学结构（支持单字解析与 AST 语法树检视）：

<IthkuilSandbox />

::: info 提示
本工具完全于浏览器端运作，底层由 `@zsnout/ithkuil` 词法状态机驱动。
:::

---

### 💡 教程行内解析组件 (Inline Glosser)

除了上述沙盒外，本站文章已全面支援行内语法解析组件 `<IthkuilWord>`。在阅读教程时：
* **滑鼠悬停**：即可浮动预览词条的完整形态学解构，例如 <IthkuilWord word="wetace" /> 或 <IthkuilWord word="itrutļalžá" />。
* **点击单字**：可将该词汇的简短注解 (Short Gloss) **一键复制** 至剪贴簿，方便笔记与社群讨论。