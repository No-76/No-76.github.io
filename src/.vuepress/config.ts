import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "@vuepress/utils";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";


const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/touxiang.jpg' }]
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Lzy" ,
      description: "学习学习",

    }
  },

  theme,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
        __dirname,
        "./components/BlogHero.vue",
    ),
  },
  port:80

  // Enable it with pwa
  // shouldPrefetch: false,
});
