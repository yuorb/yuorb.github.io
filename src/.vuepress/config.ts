import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";


export default defineUserConfig({
  base: "/NiGHT/",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "NiGHT",
      description: "新Ithkuil语法汉译",
    },
  },

  theme,
  plugins: [autoCatalogPlugin()],


  // Enable it with pwa
  // shouldPrefetch: false,
});
