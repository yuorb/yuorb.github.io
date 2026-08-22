import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  { text: "Menu Utama", icon: "fas fa-house", link: "/id/" },
  { text: "Dokumentasi", icon: "fas fa-book-open", link: "/id/docs/" },
  { text: "Tutorial", icon: "fas fa-person-chalkboard", link: "/tutorial/" },
  {
    text: "Peralatan",
    icon: "fas fa-tools",
    children: [
      {
        text: "Kamus: Enţrirç",
        icon: "fas fa-book",
        link: "/enthrirhc/",
      },
      {
        text: "Alat pembentukan kata: Hwirbuvie-Ekţgyil",
        icon: "fas fa-pen-to-square",
        link: "https://chromonym.github.io/ithkapp/",
      },
      {
        text: "Perlengkapan Serbaguna Ithkuil",
        icon: "fas fa-pen",
        link: "https://v8.zsnout.com/ithkuil/kit",
      },
      {
        text: "Generator Aksara Ithkuil",
        icon: "fas fa-signature",
        link: "https://v8.zsnout.com/ithkuil/script",
      },
      {
        text: "Konverter Angka",
        icon: "fas fa-hashtag",
        link: "/id/tool/num",
      },
      {
        text: "Pemilih warna",
        icon: "fas fa-palette",
        link: "https://ithkuil.place/4/colors/",
      }
    ]
  },

]);
