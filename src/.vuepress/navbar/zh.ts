import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "首页", icon: "fas fa-house", link: "/" },
  { text: "官方文档", icon: "iconfont icon-read", link: "/docs/" },
  { text: "同人教学", icon: "fas fa-person-chalkboard", link: "/tutorial/" },
  {
    text: "工具",
    icon: "fas fa-tools",
    children: [
      {
        text: "词典 Enţrirç",
        icon: "fas fa-book",
        link: "/enthrirch/",
      },
      {
        text: "词典 Enţrirç",
        icon: "dictionary",
        link: "/enthrirch/",
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
