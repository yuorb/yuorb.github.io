import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Grammar docs",
      prefix: "docs/",
      link: "docs/readme.md",
      children: [
        // "term",
        "cheat",
        {
          text: "Sections",
          children: ["00", "01","02","03","04","05","06","07","08","09","10","11","12","13","14", "15", "pt"],
        },
      ],
    },
    /* {
      text: "Tutorials",
      prefix: "tutorial/",
      link: "tutorial/readme.md",
      children: [
        "beginner","numerals","loanwords","idioms","old"
      ],
    }, */
  ],
});
