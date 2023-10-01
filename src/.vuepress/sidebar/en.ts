import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "课程学习",
      icon: "laptop-code",
      prefix: "课程学习/",
      link: "课程学习/",
      children: "structure",
    },
    {
      text: "机器学习",
      icon: "book",
      prefix: "posts/",
      link: "posts/",
      children: "structure",
    },

  ],
});
