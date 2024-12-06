---
tittle: BUG日记
icon: pen-to-square
date: 2024-10-29
category:
  - Java
timeline: true
tag:
  - Java
---
# BUG日记
记录下碰到的BUG
<!-- more -->
 1. 前端分页查询不回显，后端不报错。   

 ```
 前端F12之后通过点击了查询按钮，发现响应数据为别的表中数据，查询xml语句后发现了问题，xml中表名写错了，更改表名正确后仍然无法回显。  
 F12后发现响应数据仍然为别的表中数据，对照每一个字段后发现domain实体类中，写Vo类时候继承错了，继承了别的表实体类，导致数据无法回显。 
 ```   
2. Git commit错误 error: RPC failed; curl 28 Recv failure: Connection was reset

```
git config --global http.postBuffer 524288000
``` 

3. docker前端配了半天，nginx端口没映射完。  

4. 接口测试返回406，发现是DTO中没写@DATA注解。
