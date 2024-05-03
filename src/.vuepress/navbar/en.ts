import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  { text: "Home", icon: "fas fa-house", link: "/" },
  { text: "Docs", icon: "fas fa-book-open", link: "/docs/" },
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
        link: "https://thexxos.github.io/ithkapp/",
      },
      {
        text: "Ithkuil Script Generator",
        icon: "fas fa-signature",
        link: "https://v8.zsnout.com/ithkuil/script",
      },
      {
        text: "Numeral Converter",
        icon: "fas fa-hashtag",
        link: "/tool/num",
      },
      {
        text: "Color picker",
        icon: "fas fa-palette",
        link: "https://ithkuil.place/4/colors/",
      }
    ]
  },

]);
