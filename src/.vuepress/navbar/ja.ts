import { navbar } from "vuepress-theme-hope";

export const jaNavbar = navbar([
  { text: "ホーム", icon: "fas fa-house", link: "/" },
  { text: "公式ドキュメント", icon: "fas fa-book-open", link: "/docs/" },
  { text: "同人チュートリアル", icon: "fas fa-person-chalkboard", link: "/tutorial/" },
  {
    text: "ツール",
    icon: "fas fa-tools",
    children: [
      {
        text: "辞書 Enţrirç",
        icon: "fas fa-book",
        link: "/enthrirhc/",
      },
      {
        text: "単語作成 Hwirbuvie-Ekţgyil",
        icon: "fas fa-pen-to-square",
        link: "https://thexxos.github.io/ithkapp/",
      },
      {
        text: "イスクイル文字生成",
        icon: "fa-s fa-signature",
        link: "https://v8.zsnout.com/ithkuil/script",
      },
      {
        text: "数変換",
        icon: "fas fa-hashtag",
        link: "/tool/num",
      },
      {
        text: "カラー選択",
        icon: "fas fa-palette",
        link: "https://ithkuil.place/4/colors/",
      }
    ]
  },

]);
