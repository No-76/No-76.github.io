import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { watermarkPlugin } from '@vuepress/plugin-watermark'
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/", 
  lang: "zh-CN",
  head: [
    ['link', { rel: 'icon', href: '/touxiang.jpg' }]
  ],
  title: "Lzy" ,
  description: "学习学习",
  theme,
  port:80,
  plugins: [
    watermarkPlugin({
      // options
      enabled: false,

    }),
    
  ],

  alias: {
    
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",),
  },
});
