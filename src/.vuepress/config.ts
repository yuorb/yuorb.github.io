import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress"
import { getDirname, path } from 'vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import ReplaceParenthesesPlugin from './plugins/replaceParentheses'
import theme from "./theme";

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  // 🎯 已在此處融入自訂選項，強制 Vite 使用 esbuild 壓縮 CSS，繞過 LightningCSS 的偽元素 Bug
  bundler: viteBundler({
    viteOptions: {
      build: {
        cssMinify: 'esbuild'
      }
    }
  }),
  base: "/",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  locales: {
    "/": {
    lang: "zh-CN",
    title: "Yuorb",
    description: "悦耳部: New Ithkuil 语法 S·T·I（意指、翻译、解释）",
    },
    "/en/": {
    lang: "en-US",
    title: "Yuorb",
    description: "Yuorb: New Ithkuil Grammar S·T·I (Signification, Translation, Interpretation)",
    },
    "/fr/": {
    lang: "fr-Fr",
    title: "Yuorb",
    description: "Yuorb: La S·T·I (Signification, Traduction, ou Interprétation) de la Grammaire du Nouvel Ithkuil",
    },
    "/ja/": {
    lang: "ja-JP",
    title: "Yuorb",
    description: "ユオルブ：新イスクイル語文法 S・T・I (意味、翻訳、解釈)",
    },
    },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    ReplaceParenthesesPlugin(),
  ],
  theme,
  // Enable it with pwa
  shouldPrefetch: false,
});
