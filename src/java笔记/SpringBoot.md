---
tittle: SpringBoot
icon: pen-to-square
date: 2024-10-1
category:
  - Java
timeline: true
tag:
  - Java
---
# SpringBoot
暂无
<!-- more -->
## 请求
- 实体参数  
使用方法：通过创建实体类,传入参数```User user```，类中创建get，set方法以及tostring。
- 数组参数  
使用方法：  
  1.传入参数```String[] name```  
  2.传入参数```@RequestParam List<String> name````
- 日期参数  
使用方法： ```@DateTimeFormat(patterm=yyyy-MM-dd HH:mm:ss)LocalDateTime updatetime```
- json参数  
使用方法：同实体参数不过加入注解,```@Requestbody User user```

其中注解```@RequestParam```和```@RequestBody```它允许你将请求体中的数据直接绑定到一个 Java 对象上，而不需要手动解析。可以减少处理 HTTP 请求数据的模板代码，使开发者可以更专注于业务逻辑。而```@RequestParam```主要处理简单类型的数据，而```@RequestBody```用于处理请求体中的数据,相比更复杂，如 JSON 或 XML 格式的数据。
