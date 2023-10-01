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
        children: [
          { text: "SVD和PCA算法", icon: "pen-to-square", link: "SVD分解" },      
        ],
      },   
      {
        text: "机器学习模型",
        prefix: "机器学习模型/",
        children: [
          { text: "LeNet模型", icon: "pen-to-square", link: "LeNet" },      
          ],
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
      children: [
        { text: "线性方程组求解", icon: "pen-to-square", link: "线性方程组求解" },      
      ],
    },   

    ],
  },

]);
