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
          { text: "Lenet模型", icon: "pen-to-square", link: "" },      
          ],
        },   
    ],
  
  },
  {
    text:"课程学习",
    icon: "pen-to-square",
    prefix:"/课程学习/",
    children: [

    ],
  },

]);
