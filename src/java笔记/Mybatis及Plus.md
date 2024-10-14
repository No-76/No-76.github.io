---
tittle: Mybatis及Plus
icon: pen-to-square
date: 2024-10-8
category:
  - Java
timeline: true
tag:
  - Java
  - Mybatis
---

# Mybatis及Plus
笔记未完成状态。
<!-- more -->
## Mybatis
### 参数占位符  
- ```#{...} ```
  - 执行SQL时，会将#{...}替换为？，生成预编译SQL，会自动设置参数。
  - 使用时机：参数传递时，都使用#{...}。
- ```${...}```
  - 拼接SQL,直接将参数拼接到SQL语句中，存在SQL注入问题。登录密码千万不要这样设置。
  - 使用时机，如果对表明，列表名进行动态设置时。
  ### XML映射标签  
- ```<if>```
- ```<where>```
- ```<set>```
- ```<foreach>```
- ```<sql> ```
- ```<include>```
