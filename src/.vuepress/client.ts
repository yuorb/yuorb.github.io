import { defineClientConfig } from "vuepress/client";
import VariantSwitch from "./components/VariantSwitch.vue";
import { convertText, type BCP47Lang } from "./utils/opencc";
import { copyToClipboard } from "./utils/clipboard";
import { I18N_DICTIONARY } from "./i18n";

type DictModule = keyof typeof I18N_DICTIONARY;

function getI18nText(moduleName: DictModule, key: string): string {
  if (typeof window === "undefined") return key;

  const pathname = window.location.pathname;
  const matchedLocale = ["/en/", "/fr/", "/ja/"].find((prefix) => pathname.startsWith(prefix)) || "/";

  // @ts-ignore
  const moduleDict = I18N_DICTIONARY[moduleName] || I18N_DICTIONARY["common"];
  // @ts-ignore
  const localeDict = moduleDict[matchedLocale] || moduleDict["/"];

  return localeDict?.[key] || key;
}

async function showToast(msg: string) {
  if (typeof window === "undefined") return;

  const savedLang = (localStorage.getItem("site_lang_bcp47") as BCP47Lang) || "zh-Hans";

  let finalMsg = msg;
  if (savedLang !== "zh-Hans") {
    try {
      finalMsg = await convertText(msg, savedLang);
    } catch {
      // 降级使用原文
    }
  }

  const oldToast = document.querySelector(".custom-copy-toast");
  if (oldToast) oldToast.remove();

  const toast = document.createElement("div");
  toast.className = "custom-copy-toast";
  toast.innerText = finalMsg;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 200);
  }, 2000);
}

export default defineClientConfig({
  enhance({ app }) {
    app.component("VariantSwitch", VariantSwitch);

    if (typeof window === "undefined") return;

    // 全局事件委托
    document.addEventListener("click", async (e) => {
      const target = (e.target as HTMLElement)?.closest("[data-copy]") as HTMLElement;
      if (!target) return;

      e.preventDefault();
      const textToCopy = target.dataset.copy;
      if (!textToCopy) return;

      const success = await copyToClipboard(textToCopy);
      if (success) {
        // 优先读取元素上指定的 data-copy-toast 提示词，若无则使用 common.copied
        const toastMessage = target.dataset.copyToast || getI18nText("common", "copied");
        showToast(toastMessage);
      }
    });
  },
});