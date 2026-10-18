import { navbar } from "vuepress-theme-hope";

export const esNavbar = navbar([
  { text: "Inicio", icon: "fas fa-house", link: "/es/" },
  { text: "Documentos", icon: "fas fa-book-open", link: "/es/docs/" },
  { text: "Tutoriales", icon: "fas fa-person-chalkboard", link: "/tutorial/" },
  {
    text: "Herramientas",
    icon: "fas fa-tools",
    children: [
      { text: "Diccionario: Enţrirç", icon: "fas fa-book", link: "/enthrirhc/" },
      { text: "Herramienta de formación de palabras: Hwirbuvie-Ekţgyil", icon: "fas fa-pen-to-square", link: "https://chromonym.github.io/ithkapp/" },
      { text: "Kit de utilidades de Ithkuil", icon: "fas fa-pen", link: "https://v8.zsnout.com/ithkuil/kit" },
      { text: "Generador de escritura de Ithkuil", icon: "fas fa-signature", link: "https://v8.zsnout.com/ithkuil/script" },
      { text: "Conversor de numerales", icon: "fas fa-hashtag", link: "/es/tool/num" },
      { text: "Sandbox de morfología", icon: "fas fa-cubes", link: "/es/tool/gloss" },
      { text: "Selector de colores", icon: "fas fa-palette", link: "https://ithkuil.place/4/colors/" }
    ]
  },
]);