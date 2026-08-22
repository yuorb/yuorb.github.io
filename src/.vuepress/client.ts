import { defineClientConfig } from "vuepress/client";
import VariantSwitch from "./components/VariantSwitch.vue";
import { convertText, type BCP47Lang } from "./utils/opencc";

// 渲染现代轻量 Toast
async function showToast(msg: string) {
  if (typeof window === "undefined") return;

  // 读取当前选中的语言变体
  const savedLang = (localStorage.getItem("site_lang_bcp47") as BCP47Lang) || "zh-Hans";

  // 如果非简体，动态转换 Toast 文本
  let finalMsg = msg;
  if (savedLang !== "zh-Hans") {
    try {
      finalMsg = await convertText(msg, savedLang);
    } catch {
      // 降级使用原文
    }
  }

  // 清除旧 Toast
  const oldToast = document.querySelector(".custom-copy-toast");
  if (oldToast) oldToast.remove();

  // 创建新 Toast
  const toast = document.createElement("div");
  toast.className = "custom-copy-toast";
  toast.innerText = finalMsg;
  document.body.appendChild(toast);

  // 触发渐入动画
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // 2 秒后自动消失
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
    document.addEventListener("click", (e) => {
      const target = (e.target as HTMLElement)?.closest("[data-copy]") as HTMLElement;
      if (!target) return;

      e.preventDefault();
      const textToCopy = target.dataset.copy;
      if (!textToCopy) return;

      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => showToast("复制群号成功"))
          .catch(() => fallbackCopy(textToCopy));
      } else {
        fallbackCopy(textToCopy);
      }
    });
  },
});

function fallbackCopy(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  showToast("复制群号成功");
}