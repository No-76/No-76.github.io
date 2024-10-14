---
tittle: SpringBoot
icon: pen-to-square
date: 2024-10-8
category:
  - Java
timeline: true
tag:
  - Java
---  
# SpringBoot
笔记未完成状态。
<!-- more --> 
## 配置文件  
支持三种格式配置文件：application.properties，application.yml，application.yaml。优先级依次降低。(yml是主流)
## 自动配置
- 方案一：@ComponentScan，通过该注解，只能扫到包内bean。（使用繁琐）  
- 方案二：@Import导入，使用该注解导入的类会被加载导IOC容器内。并且可以使用@Enablexxxx注解，封装@Import注解。   
## 注解
- ```@SpringBootApplication```  
启动类注解由三部分组成：  
    - ```@SpringBootConfiguration```：声明是一个配置类，因此是可以引入Bean对象的。  
    - ```@ComponentScan```  
    - ```@EnableConfiguration```：主要通过封装@Import注解实现。  
- ```@Conditional```  
作用到方法或类之上，按照一定条件进行判断，符合条件才会注册Bean对象到IOC容器中。
## maven相关知识
- 继承与聚合？
- 聚合工程？  
标签```<modules> ```
- 版本锁定？  
标签```<Dependencymanage>```

