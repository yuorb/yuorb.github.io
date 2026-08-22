// src/.vuepress/client.ts
import { defineClientConfig } from "vuepress/client";
import VariantSwitch from "./components/VariantSwitch.vue";

export default defineClientConfig({
  enhance({ app }) {
    // 注册为全局组件，供 navbarLayout 直接调用
    app.component("VariantSwitch", VariantSwitch);
  },
});