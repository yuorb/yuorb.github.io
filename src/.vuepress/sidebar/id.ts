import { sidebar } from "vuepress-theme-hope";

export const idSidebar = sidebar({
  "/id/docs": [
    {
      text: "Dokumentasi tata bahasa",
      link: "",
      children: [
        "term",
        "cheat",
        {
          text: "Bagian",
          children: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "pt"],
        },
      ],
    },
  ],
  "/turorial": [
    {
      text: "Tutorial",
      link: "",
      children: [
        "beginner", "numerals", "loanwords", "idioms", "old"
      ],
    },
  ],
  "/en/sup": [
    "",
  ],
});
