import { navbar } from "vuepress-theme-hope";

export const frNavbar = navbar([
  { text: "Maison", icon: "fas fa-house", link: "/fr/" },
  { text: "Docs", icon: "fas fa-book-open", link: "/fr/docs/" },
  { text: "Tutoriel", icon: "fas fa-person-chalkboard", link: "/tutorial/" },
  {
    text: "Outils",
    icon: "fas fa-tools",
    children: [
      {
        text: "Dictionnaire: Enţrirç",
        icon: "fas fa-book",
        link: "/enthrirhc/",
      },
      {
        text: "Outil de formation de mots: Hwirbuvie-Ekţgyil",
        icon: "fas fa-pen-to-square",
        link: "https://thexxos.github.io/ithkapp/",
      },
      {
        text: "Générateur de Script Ithkuil",
        icon: "fas fa-signature",
        link: "https://v8.zsnout.com/ithkuil/script",
      },
      {
        text: "Convertisseur des Numéraux",
        icon: "fas fa-hashtag",
        link: "/fr/tool/num",
      },
      {
        text: "Pipette à couleurs",
        icon: "fas fa-palette",
        link: "https://ithkuil.place/4/colors/",
      }
    ]
  },

]);
