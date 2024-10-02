import { sidebar } from "vuepress-theme-hope";

export default sidebar({
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
    {
      text: "目标检测",
      icon: "book",
      prefix: "目标检测/",
      link: "/",
      children: "structure",
      
    },
    {
      text: "论文学习",
      icon: "book",
      prefix: "论文学习/",
      link: "论文学习/",
      children: "structure",
      
    },
    {
      text: "算法笔记",
      icon: "book",
      prefix: "算法笔记/",
      link: "算法笔记/",
      children: "structure",
      
    },
    {
      text: "java笔记",
      icon: "book",
      prefix: "java笔记/",
      link: "java笔记/",
      children: "structure",
      
    },

  ],
});
