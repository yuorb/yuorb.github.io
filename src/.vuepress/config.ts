import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "NiGHT",
      description: "New Ithkuil 语法汉译",
    },
  },

  theme,


  // Enable it with pwa
  // shouldPrefetch: false,
});
