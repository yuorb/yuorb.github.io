import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "首页", icon: "fas fa-house", link: "/" },
  { text: "官方文档", icon: "fas fa-book-open", link: "/docs/" },
  { text: "同人教学", icon: "fas fa-person-chalkboard", link: "/tutorial/" },
  {
    text: "工具",
    icon: "fas fa-tools",
    children: [
      {
        text: "词典 Enţrirç",
        icon: "fas fa-book",
        link: "/enthrirhc/",
      },
      {
        text: "构词器 Hwirbuvie-Ekţgyil",
        icon: "fas fa-pen-to-square",
        link: "https://chromonym.github.io/ithkapp/",
      },
      {
        text: "Ithkuil 实用工具包",
        icon: "fas fa-pen",
        link: "https://v8.zsnout.com/ithkuil/kit",
      },
      {
        text: "Ithkuil 文字生成器",
        icon: "fas fa-signature",
        link: "https://v8.zsnout.com/ithkuil/script",
      },
      {
        text: "数字转换工具",
        icon: "fas fa-hashtag",
        link: "/tool/num",
      },
      {
        text: "选色",
        icon: "fas fa-palette",
        link: "https://ithkuil.place/4/colors/",
      },
    ]
  },
/*  { text: "案例", icon: "discover", link: "/demo/" },
   {
    text: "指南",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
   {
    text: "V2 文档",
    icon: "note",
    link: "https://theme-hope.vuejs.press/",
  },*/
]);
