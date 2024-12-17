import { navbar } from "vuepress-theme-hope";


export default navbar([
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
        text: "网络模型",
        prefix: "网络模型/",
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
  {
    text: "目标检测",
    icon: "pen-to-square",
    prefix: "/目标检测/",
    children: [{
      text: "算法",
      prefix: "算法/",
      icon: "pen-to-square",
      children: ["算法基础"],
    }, ],
    
  },  
  
  {
    text: "论文学习",
    icon: "pen-to-square",
    prefix: "/论文学习/",
    children: ["transformer"],
  
  },  
  {
    text: "算法笔记",
    icon: "pen-to-square",
    prefix: "/算法笔记/",
    children: [
        "套路",
      {
        text: "F",
        prefix: "F/",
        icon: "pen-to-square",
        children: ["字符串","树","回溯","动态规划","图","单调栈"],
      }, 
    ],
  
  },
  {
    text: "java笔记",
    icon: "pen-to-square",
    prefix: "/java笔记/",
    children: ["java","JVM","Redis","Spring","工具相关","注解"],
  
  },  
  {
    text: "项目笔记",
    icon: "pen-to-square",
    prefix: "/项目笔记/",
    children: ["代码库","黑马点评","短链接"],
  
  },  


]);
