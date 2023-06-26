// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import { defineRevealConfig } from "vuepress-plugin-md-enhance/client";

defineRevealConfig({
    margin: 0.08
});

export default defineClientConfig({

});