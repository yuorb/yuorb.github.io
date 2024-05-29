import { defineClientConfig } from "vuepress/client";
import { defineMermaidConfig } from "vuepress-plugin-md-enhance/client";

defineMermaidConfig({
    // 在此设置 mermaid 选项
    theme: 'dark',
});

export default defineClientConfig({

});