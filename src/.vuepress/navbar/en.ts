import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "机器学习",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "机器学习算法",
        prefix: "机器学习算法/",
        icon: "pen-to-square",
        children: ["机器学习基础","SVD分解"],
      },   
      {
        text: "机器学习模型",
        prefix: "机器学习模型/",
        icon: "pen-to-square",
        children: ["LeNet","AlexNet","VGGNet","GoogLeNet","ResNet"],
        },   
    ],
  
  },
  {
    text:"课程学习",
    icon: "pen-to-square",
    prefix:"/课程学习/",
    children: [{
      text: "数值分析",
      prefix: "数值分析/",
      icon: "pen-to-square",
      children: ["线性方程组求解","线性方程组求解(迭代法)","共轭梯度法","迭代法求特征值"],
    },   

    ],
  },

]);
