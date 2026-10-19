---
title: Gloss 组件化 PoC（新旧对照）
---

# Gloss 组件化 PoC

本页用于对照验证 `<GlossEntry>` / `<GlossGroup>` 组件与遗留 HTML 的渲染等价性。
上排为原始 HTML，下排为组件版本，二者应逐像素一致。

## 1. 单条示例

**遗留 HTML：**

<dl class="gloss">
    <dt>rrala</dt>
    <dd>“cat”-<b>UPX</b></dd>
</dl>
<div class="glend"><q>a cat</q></div>

**组件版本：**

<GlossEntry word="rrala" gloss="“cat”-<b>UPX</b>">a cat</GlossEntry>

## 2. 缩进组（多条）

**遗留 HTML：**

<div class="indent">
  <dl class="gloss">
    <dt>čväřţa</dt>
  </dl>
  <div class="glend"><q>a mishmash of various tools</q></div>
  <dl class="gloss">
    <dt>arsweřţ</dt>
  </dl>
  <div class="glend"><q>a disorganized group of planets</q></div>
  <dl class="gloss">
    <dt>zvařta</dt>
  </dl>
  <div class="glend"><q>a rag-tag group of dogs</q></div>
  <dl class="gloss">
    <dt>sřaňa</dt>
  </dl>
  <div class="glend"><q>a room with disparate purposes</q></div>
</div>

**组件版本：**

<GlossGroup>
  <GlossEntry word="čväřţa">a mishmash of various tools</GlossEntry>
  <GlossEntry word="arsweřţ">a disorganized group of planets</GlossEntry>
  <GlossEntry word="zvařta">a rag-tag group of dogs</GlossEntry>
  <GlossEntry word="sřaňa">a room with disparate purposes</GlossEntry>
</GlossGroup>

## 3. 增强演示：可交互词条（parse 属性）

<IthkuilWord word="wetace" /> 是已知可解析的词；下面的 gloss 条目启用了 `parse`，
悬停 Ithkuil 词条可即时形态解析、点击复制 gloss：

<GlossEntry word="wetace" parse gloss="<b>STV</b> thematic root example">a thematic root</GlossEntry>

## 4. gloss 结构化解析演示

规则：`-`（引号外）切分 → 缩写术语挂 tooltip 词典；引号/CJK 语义段标记为可译单元
（`.gloss-sem`）；其余透传。

**术语 + 语义（标准型）：**

<GlossEntry word="rrala" gloss="“cat”-<b>UPX</b>">a cat</GlossEntry>

**多术语：**

<GlossEntry word="wutra" gloss="<b>CSV</b>-<b>ASM</b>-“house”">a conservative assumptive house</GlossEntry>

**未知术语（词典未收录 → 无 tooltip，原样显示）：**

<GlossEntry word="pránja" gloss="“cloud”-<b>XYZ</b>">a cloud</GlossEntry>

**遗留直引号 + 中文语义（zh 源典型形态）：**

<GlossEntry word="rrala" gloss="&quot;cat&quot;-UPX">猫</GlossEntry>

<GlossEntry word="hřeška" gloss="“工具的大杂烩”-<b>ASO</b>">各种工具的大杂烩</GlossEntry>

---

迁移备忘：全仓遗留量统计见 `src/docs`（zh）与 `src/en/docs`：各约
1,475 处 `dl.gloss`、372 处 `indent`、1,000 处 `<q>`。本组件 1:1 保留原有
class 结构，SCSS 无需任何改动；迁移脚本可安全地按段落级正则批量替换。
zh 源的中英混杂 gloss 由迁移脚本第二遍归一化：CJK 语义段自动识别为可译单元，
未加引号的语义段输出到人工复查清单。
