---
title: オンライン Ithkuil 語彙解析サンドボックス
icon: fas fa-cubes
category:
  - ツール
tag:
  - Ithkuil
  - 構文解析器
---

# オンライン Ithkuil 語彙解析サンドボックス

以下のインタラクティブツールを使用して、New Ithkuil 語彙の形態論的構造をリアルタイムで解析・分解できます（単語解析および AST 構文解析データの表示に対応）：

<IthkuilSandbox />

::: info ヒント
本ツールは完全にお使いのブラウザ上で動作し、バックエンドは `@zsnout/ithkuil` 語彙状態マシンによって駆動されています。
:::

---

### 💡 記事内インライン解析コンポーネント (Inline Glosser)

上記のサンドボックスに加え、本サイトの全記事で `<IthkuilWord>` インラインコンポーネントが利用可能です：
* **ホバー操作**：単語（例: <IthkuilWord word="wetace" /> や <IthkuilWord word="itrutļalžá" />）にマウスを乗せると、形態論的分解データがポップアップ表示されます。
* **クリック操作**：単語をクリックすると、その略式グロス（Short Gloss）を**ワンタップでクリップボードにコピー**できます。