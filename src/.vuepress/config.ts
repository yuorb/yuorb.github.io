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
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],

    // 1. 提前建立网络连接 (预解析 DNS 与 TLS 握手)
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.lpsub.com' }],
    ['link', { rel: 'preconnect', href: 'https://yuorb.github.io' }],

    // 2. Google Fonts 11 款字体极速合并版 (带 display=swap 避免白屏)
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400;1,700&family=Arsenal:ital,wght@0,400;0,700;1,400;1,700&family=Dosis:wght@200..800&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Fira+Sans:ital,wght@0,100..900;1,100..900&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Noto+Sans+SC:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&family=Ysabeau:ital,wght@0,1..1000;1,1..1000&display=swap'
    }],

    // 3. 其他 CDN 与自定义字体 (与 HTML 解析并行下载)
    ['link', { rel: 'stylesheet', href: '//yuorb.github.io/assets/fonts/customfonts.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/lxgw-wenkai-tc-webfont@1.2.0/style.css' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.lpsub.com/css/sarasa-gothic-sc.css' }]
  ],
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
