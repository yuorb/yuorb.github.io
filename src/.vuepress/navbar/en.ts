import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  { text: "Home", icon: "fas fa-house", link: "/en/" },
  { text: "Docs", icon: "fas fa-book-open", link: "/en/docs/" },
  { text: "Tutorial", icon: "fas fa-person-chalkboard", link: "/tutorial/" },
  {
    text: "Tools",
    icon: "fas fa-tools",
    children: [
      {
        text: "Dictionary: Enţrirç",
        icon: "fas fa-book",
        link: "/enthrirhc/",
      },
      {
        text: "Word formation tool: Hwirbuvie-Ekţgyil",
        icon: "fas fa-pen-to-square",
        link: "https://chromonym.github.io/ithkapp/",
      },
      {
        text: "Ithkuil Utility Kit",
        icon: "fas fa-pen",
        link: "https://v8.zsnout.com/ithkuil/kit",
      },
      {
        text: "Ithkuil Script Generator",
        icon: "fas fa-signature",
        link: "https://v8.zsnout.com/ithkuil/script",
      },
      {
        text: "Numeral Converter",
        icon: "fas fa-hashtag",
        link: "/en/tool/num",
      },
      {
        text: "Color picker",
        icon: "fas fa-palette",
        link: "https://ithkuil.place/4/colors/",
      }
    ]
  },

]);
