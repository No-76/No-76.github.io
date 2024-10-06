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
笔记未完成状态。
<!-- more -->
SpringBoot的三层架构：  
**1.controller**:控制层，接受前端发送的请求，对请求进行处理，并响应数据。  
**2.service**：业务逻辑层，处理具体的业务逻辑。  
**3.dao**：数据访问层/持久层(Data Access Object，负责对数据库的访问操作，包括增删改查。  

SpringBoot有三大特点分别为：  
**1.IOC(Inversion Of Control)**:对象的控制权由程序自身转移到外部容器，实现解耦。  
**2.DI(Dependency injection)**:容器为应用程序提供运行时，所依赖的资源，成为依赖注入。  
**3.Bean对象**:IOC外部容器中所创建、管理的对象。

## 注解
### Controller层注解
- ```@RequestParam```和```@RequestBody```  
它允许你将请求体中的数据直接绑定到一个 Java 对象上，而不需要手动解析。可以减少处理 HTTP 请求数据的模板代码，使开发者可以更专注于业务逻辑。而```@RequestParam```主要处理简单类型的数据，而```@RequestBody```用于处理请求体中的数据,相比更复杂，如 JSON 或 XML 格式的数据。  
- ```@ResponBody```   
```@RestController= @Controller + @ResponseBody```其中ResponBody作用在controller类或者方法中上，将方法返回值直接响应，如果返回值类型是实体对象/集合，则为JSON格式数据。  
### IOC&DI注解
- ```@Component```  
控制反转注解，声明bean的机制注解，主要用于三层架构中的service层与dao层，将类放置于IOC容器中以便实现后续的解耦。它有三种衍生注解:```@Controller```,```@Service```和```@Repository```(标注在数据访问类上，由于与mybatis整合，用的少)。对于一些工具类，并不属于三层结构的，则使用注解```@Component```，否则使用衍生注解。  
- ```@ComponentScan```
不需要显示配置，但是实际上已经包含在了启动类声明注解@SpringBootApplication中，默认扫描的范围是启动类所在的包以及其子包。  
- ```@Autowired```  
依赖注入注解，主要用于解耦过程中对象声明。例如: 
```Java
  @Autowired
  private EmpService EmpService; //右侧无需new service层对象以实现解耦过程。
```
**以下三个注解用来解决多个相同类型bean的情况**
- ```@Primary```  
用于和Component组件注解同时使用，标注优先级。
- ```@Qualifier```    
意思是资格赛，匹配符，通过与Autowored注解同时使用来标注使用哪个bean对象。  
- ```@Resource```  
并不是springboot注解，而是jdk注解，不需要与Autowired配合使用，相当于Autowired+Qualifier
### Mybatis注解
- ```@Options```   
使用方法：```@Options(keyProperty = "id",useGeneratedKeys=true)```，放在Insert注解之上时，构造的新增对象会拿到一个主键的返回值，否则无返回值。

## 请求
- 实体参数  
使用方法：通过创建实体类,传入参数```User user```，类中创建get，set方法以及tostring。
- 数组参数  
使用方法：  
  - 传入参数```String[] name```  
  - 传入参数```@RequestParam List<String> name```
- 日期参数  
使用方法： ```@DateTimeFormat(patterm=yyyy-MM-dd HH:mm:ss)LocalDateTime updatetime```
- json参数  
使用方法：同实体参数不过加入注解,```@Requestbody User user```
- 路径参数  
使用方法：
```Java
@RequestMapping("/path/{id}/{name}")
public String path(@PathVariable Integer id, @PathVariable String name){}
```
- 统一响应  
使用方法：通过构造实体类以包含各种类型的数据，Integer,String等，```Public "自定义类" name（类名）```,通过写入get，set方法进行包装。

## Mybatis
### 参数占位符  
- #{...}  
  - 执行SQL时，会将#{...}替换为？，生成预编译SQL，会自动设置参数。
  - 使用时机：参数传递时，都使用#{...}。
- ${...}
  - 拼接SQL,直接将参数拼接到SQL语句中，存在SQL注入问题。登录密码千万不要这样设置。
  - 使用时机，如果对表明，列表名进行动态设置时。
  ### XML映射标签  
- ```<if>```
- ```<where>```
- ```<set>```
- ```<foreach>```
- ```<sql> ```
- ```<include>```
