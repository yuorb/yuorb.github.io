import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.ts";
import { zhSidebar } from "./sidebar/index.ts";
import { enNavbar } from "./navbar/index.ts";
import { enSidebar } from "./sidebar/index.ts";
import { jaNavbar } from "./navbar/index.ts";
import { jaSidebar } from "./sidebar/index.ts";

export default hopeTheme({
  hostname: "https://yuorb.github.io",

  author: {
    name: "天邪弱 Lucifer Caelius Delicatus",
    url: "https://www.zhihu.com/people/ryanlo713",
  },

  iconAssets: ["fontawesome-with-brands", "fontawesome", "iconify"],

  logo: "/logo.svg",

  repo: "yuorb/yuorb.github.io",

  docsDir: "/src",

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "Yuorb: 该非官方组织旨在为提供 New Ithkuil 的 S·T·I（意指、翻译、解释）服务。",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Yuorb: The unofficial organization aiming to provide the S·T·I (Signification, Translation, Interpretation) service for New Ithkuil.",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
    "/ja/": {
      // navbar
      navbar: jaNavbar,

      // sidebar
      sidebar: jaSidebar,

      footer: "Yuorb: New Ithkuil に S・T・I (Signification、Translation、Interpretation) サービスを提供することを目的とした非公式組織",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  /* encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  }, */

  plugins: {

  docsearch: {
    appId: "Q8IC2K1VXW",
    apiKey: "f254e5608a1e396f9bde071de83c5284",
    indexName: "yuorbio",
    locales: {
      "/": {
        placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
    },
  },

  comment: {
    // ts-expect-error: You should generate and use your own comment service
    provider: "Giscus",
    repo: "yuorb/yuorb.github.io",
    repoId: "R_kgDOJq7_KQ",
    category: "General",
    categoryId: "DIC_kwDOJq7_Kc4CbRCM"
  },

  // all features are enabled for demo, only preserve features you need here
  mdEnhance: {
    align: true,
    attrs: true,
    chart: true,
    codetabs: true,
    demo: true,
    echarts: true,
    figure: true,
    flowchart: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    katex: true,
    mark: true,
    mermaid: true,
    component: true,
    playground: {
      presets: ["ts", "vue"],
    },
    revealJs: {
      plugins: ["highlight", "math", "search", "notes", "zoom"],
      themes: [
        "auto",
        "beige",
        "black",
        "blood",
        "league",
        "moon",
        "night",
        "serif",
        "simple",
        "sky",
        "solarized",
        "white",
      ],
    },
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    vPre: true,
    vuePlayground: true,
    spoiler: true,
  },

  components: {
    // 你想使用的组件
    components: [
      "Badge",
      "BiliBili",
      "CodePen",
      "PDF",
      "Share",
      "SiteInfo",
      "StackBlitz",
      "VidStack",
      "XiGua",
      "VPCard",
    ],
  },

  // uncomment these if you want a pwa
  pwa: {
    favicon: "/favicon.ico",
    cacheHTML: false,
    cacheImage: false,
    appendBase: true,
    apple: {
      icon: "/assets/icon/apple-icon-152.png",
      statusBarColor: "black",
    },
    msTile: {
      image: "/assets/icon/ms-icon-144.png",
      color: "#ffffff",
    },
    manifest: {
      "icons": [
        {
          src: "/assets/icon/windows11/SmallTile.scale-100.png",
          sizes: "71x71",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/SmallTile.scale-125.png",
          sizes: "89x89",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/SmallTile.scale-150.png",
          sizes: "107x107",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/SmallTile.scale-200.png",
          sizes: "142x142",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/SmallTile.scale-400.png",
          sizes: "284x284",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square150x150Logo.scale-100.png",
          sizes: "150x150",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square150x150Logo.scale-125.png",
          sizes: "188x188",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square150x150Logo.scale-150.png",
          sizes: "225x225",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square150x150Logo.scale-200.png",
          sizes: "300x300",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square150x150Logo.scale-400.png",
          sizes: "600x600",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Wide310x150Logo.scale-100.png",
          sizes: "310x150",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Wide310x150Logo.scale-125.png",
          sizes: "388x188",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Wide310x150Logo.scale-150.png",
          sizes: "465x225",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Wide310x150Logo.scale-200.png",
          sizes: "620x300",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Wide310x150Logo.scale-400.png",
          sizes: "1240x600",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/LargeTile.scale-100.png",
          sizes: "310x310",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/LargeTile.scale-125.png",
          sizes: "388x388",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/LargeTile.scale-150.png",
          sizes: "465x465",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/LargeTile.scale-200.png",
          sizes: "620x620",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/LargeTile.scale-400.png",
          sizes: "1240x1240",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.scale-100.png",
          sizes: "44x44",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.scale-125.png",
          sizes: "55x55",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.scale-150.png",
          sizes: "66x66",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.scale-200.png",
          sizes: "88x88",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.scale-400.png",
          sizes: "176x176",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/StoreLogo.scale-100.png",
          sizes: "50x50",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/StoreLogo.scale-125.png",
          sizes: "63x63",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/StoreLogo.scale-150.png",
          sizes: "75x75",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/StoreLogo.scale-200.png",
          sizes: "100x100",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/StoreLogo.scale-400.png",
          sizes: "200x200",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/SplashScreen.scale-100.png",
          sizes: "620x300",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/SplashScreen.scale-125.png",
          sizes: "775x375",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/SplashScreen.scale-150.png",
          sizes: "930x450",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/SplashScreen.scale-200.png",
          sizes: "1240x600",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/SplashScreen.scale-400.png",
          sizes: "2480x1200",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.targetsize-16.png",
          sizes: "16x16",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.targetsize-20.png",
          sizes: "20x20",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.targetsize-24.png",
          sizes: "24x24",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.targetsize-30.png",
          sizes: "30x30",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.targetsize-32.png",
          sizes: "32x32",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.targetsize-36.png",
          sizes: "36x36",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.targetsize-40.png",
          sizes: "40x40",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.targetsize-44.png",
          sizes: "44x44",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.targetsize-48.png",
          sizes: "48x48",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.targetsize-60.png",
          sizes: "60x60",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.targetsize-64.png",
          sizes: "64x64",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.targetsize-72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.targetsize-80.png",
          sizes: "80x80",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.targetsize-96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.targetsize-256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
          sizes: "16x16",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
          sizes: "20x20",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
          sizes: "24x24",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
          sizes: "30x30",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
          sizes: "32x32",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
          sizes: "36x36",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
          sizes: "40x40",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
          sizes: "44x44",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
          sizes: "48x48",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
          sizes: "60x60",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
          sizes: "64x64",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
          sizes: "80x80",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
          sizes: "16x16",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
          sizes: "20x20",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
          sizes: "24x24",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
          sizes: "30x30",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
          sizes: "32x32",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
          sizes: "36x36",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
          sizes: "40x40",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
          sizes: "44x44",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
          sizes: "48x48",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
          sizes: "60x60",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
          sizes: "64x64",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
          sizes: "80x80",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "/assets/icon/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "/assets/icon/android/android-launchericon-512-512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "/assets/icon/android/android-launchericon-192-192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/assets/icon/android/android-launchericon-144-144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "/assets/icon/android/android-launchericon-96-96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "/assets/icon/android/android-launchericon-72-72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "/assets/icon/android/android-launchericon-48-48.png",
          sizes: "48x48",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/16.png",
          sizes: "16x16",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/20.png",
          sizes: "20x20",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/29.png",
          sizes: "29x29",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/32.png",
          sizes: "32x32",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/40.png",
          sizes: "40x40",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/50.png",
          sizes: "50x50",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/57.png",
          sizes: "57x57",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/58.png",
          sizes: "58x58",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/60.png",
          sizes: "60x60",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/64.png",
          sizes: "64x64",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/76.png",
          sizes: "76x76",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/80.png",
          sizes: "80x80",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/87.png",
          sizes: "87x87",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/100.png",
          sizes: "100x100",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/114.png",
          sizes: "114x114",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/120.png",
          sizes: "120x120",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/128.png",
          sizes: "128x128",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/152.png",
          sizes: "152x152",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/167.png",
          sizes: "167x167",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/180.png",
          sizes: "180x180",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "/assets/icon/ios/1024.png",
          sizes: "1024x1024"
        }
      ]
      // icons: [
      //   {
      //     src: "/assets/icon/chrome-mask-512.png",
      //     sizes: "512x512",
      //     purpose: "maskable",
      //     type: "image/png",
      //   },
      //   {
      //     src: "/assets/icon/chrome-mask-192.png",
      //     sizes: "192x192",
      //     purpose: "maskable",
      //     type: "image/png",
      //   },
      //   {
      //     src: "/assets/icon/chrome-512.png",
      //     sizes: "512x512",
      //     type: "image/png",
      //   },
      //   {
      //     src: "/assets/icon/chrome-192.png",
      //     sizes: "192x192",
      //     type: "image/png",
      //   },
      // ],
      // shortcuts: [
      //   {
      //     name: "Demo",
      //     short_name: "Demo",
      //     url: "/demo/",
      //     icons: [
      //       {
      //         src: "/assets/icon/guide-maskable.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //     ],
      //   },
      // ],
    },
  },
},
});
