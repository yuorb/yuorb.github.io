import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "语法文档",
      prefix: "docs/",
      link: "docs/readme.md",
      children: [
        "term",
        "cheat",
        {
          text: "正文",
          children: ["00", "01","02","03","04","05","06","07","08","09","10","11","12","13","14", "15"],
        },
      ],
    },
    {
      text: "同人教学",
      prefix: "tutorial/",
      link: "tutorial/readme.md",
      children: [
        "beginner","numerals","loanwords",
      ],
    },
/*     {
      // icon: "discover",
      text: "案例",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      // icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    "slides", */
  ],
});
