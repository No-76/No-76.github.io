---
tittle: java
icon: pen-to-square
date: 2024-9-18
category:
  - java笔记
timeline: true 
tag:
  - 函数
  - 算法
---
# java
暂无
<!-- more -->

## 基础
### OOP
3. 多态                           
调用成员变量：编译看左边，运行看左边。  
调用成员方法：编译看左边，运行看右边。  
若父类中没有成员变量或方法，怎么都编译不通过。
### 权限修饰符  
访问权限修饰符有四种：private< default < protected < public。
### Java 反射 
反射就是加载类，加载到内存中并解刨出各个成分。反射是用来做框架的，破坏对象的封装性，idea之所以能提示生成哪些方法，就是基于反射的。反射的步骤如下：  
1. 获取类：获取对象的Class对象。
2. 获取构造方法：通过一系列函数getDeclaredConstructor() 可以获取类的构造方法对象，然后调用.newInstance()创建对象。注意针对私有化构造方法可以通过setAccessible(true)来修改权限。实现暴力反射。  
3. 获取类的成员变量：通过getDeclaredFields()可以获取类的成员变量对象，然后调用.get()获取成员变量的值。
4. 获取类的方法：通过getDeclaredMethods()可以获取类的方法对象，然后通过方法对象调用.invoke()触发某个方法的执行。
### 注解  
1. 自定义注解  
```java
public @interface 注解名称 {
   public 属性类型 属性名() default 默认值;
}
```
注解本质是一个接口，如果看.class文件就会发现，而且是继承自Annotation。而@注解 实际上是一个实现类对象，实现了该注解一级Annotatio接口。    

2. 元注解     

修饰注解的注解。
- @target：用来约束注解的范围，应该加载什么之上(类、方法、参数等)。
- @Retention: 声明注解的保留周期，分为SOURCE，CLASS，RUNTIME。分别是源代码、编译后、运行时存在。   


3. 注解解析  
    
就是判断注解是否存在，class、Method、Field、Constructor都实现了AnnotatedElement接口，它们都拥有解析拆解的能力。

## java数据结构
### 数组  
**Arrays中的方法**  
1. sort：对数组进行排序，其中comperato的构造中对于基本元素是无法使用的，例如int[],故排序需要构造比较的话一般使用Integer[].
2. parallelSort:并行排序，多线程，函数内部规定当数组长度小于8192时默认使用sort方法。
### 字符串
1. **String**：字符串，不可变对象。   
2. **StringBuilder**：常用于单线程中，多线程使用不安全。
3. **StringBuffer**：线程安全的，使用内部锁（这个锁是由对象本身提供的）来控制对它的访问，用于构建字符串。
4. **StringJoiner**：可以指定分隔符和开头结尾，用于构建字符串。  

其中java底层对StringBuilder进行过处理，如果打印他的对象不会返回对象的地址值，而是属性值。
  
**String比较大小的问题？**  
1. 字典顺序，使用String类中的compareTo方法，字典序按照编码顺序比较。
2. 自然顺序，使用Comparable方法，字典顺序是不关心大小写，只关心当前字母排序。

### 集合
Collection单列集合
![alt text](image-8.png)
#### List列表 
1. **ArrayList**：动态数组，支持随机访问。
2. **LinkedList**：链表，支持插入和删除操作。
3. **Vector**：线程安全的 ArrayList，支持同步访问。     

**列表转数组方法**  
```java
Object[] array = list.toArray();  
```
该方法返回的是一个 Object 数组，而不是 T[] 类型的数组。如果想要一个Integer数组，可以使用如下代码：
```java
Integer[] array = nums.toArray(new Integer[0]);
```  
通过new Integer[0]来避免自动装箱为Object[]，而因为0的存在限制了箱子大小，toArray()会创建一个大小合适的新数组。  
**注意：** Integer数组存储的是对象引用，每个引用占用4个字节（在32位和64位的JVM中），但每个Integer对象本身在堆上分配，所以实际上占用的内存更多。    
##### ArrayList  
ArrayList的实现结构为数组，底层原理如下： 
1. 不放数据默认容量为0。
2. 当第一次放入时候，会创建一个长度为10(默认)的数组。
3. 当数组大小不够时，会自动扩容(使用Arrays.copyOf)，扩容规则为：  
   1. 若能放下，则扩容为1.5倍。
   2. 若放不下，则扩充为加入新元素后的新数组大小。
##### LinkedList  
LindkedList的实现结构为链表，支持插入和删除操作,查询慢,增删快。

#### Set   
1. **HashSet**：基于哈希表的无序集合，不允许重复元素,且包含LinnkedHashSet。
2. **TreeSet**：基于红黑树的有序集合，不允许重复元素。
##### HashSet和LinkedHashSet
HashSet的实现结构为数组加链表加红黑树，底层原理如下：  
1. 创建一个默认长度为16，默认加载因子为0.75的数组。  
2. 根据哈希值计算得到应该存入的位置。  
   ```
   int index = (数组长度 -1) & 哈希值
   ```  
3. 当发生哈希碰撞时，使用equals方法判断，一致的话则去重，否则采用链表挂在后方。
4. 当数组大小不够时，会自动扩容，扩容规则为：  

   1. 超过75%时，会自动将数组长度翻倍。  
   2. 链表长度大于8，且数组长度大于64，转为红黑树。
**注意**:当hash用来存储对象时，需要重写hashCode()和equals()方法，否则无法去重，因为原来是根据地址生成的hashCode，会导致相同对象存到不同位置。   

LinkedHashSet跟HashSet一样，区别在于会用一个双向链表保存插入的顺序，因此可以保持插入的顺序。    
##### TreeSet
TreeSet的实现机制为红黑树，不需要重写equals和hashCode方法，底层原理：当插入元素时，通过比较(默认使用comparabel接口，无法比较则需要构造比较器)构建红黑树。比较差值为0，则舍弃。
因为是基于红黑树的，所以有几个比较特殊的函数：  
1. higher和lower方法，返回比给定元素大的最小元素，比给定元素小的最大元素。严格  
2. ceiling和floor方法，返回大于等于给定元素最小元素，小于等于给定元素最大的元素。不严格  
3. headset和tailset方法，返回小于或大于给定元素最大的元素treeset集合。是否严格根据所给bool值
4. subset，返回之间的数。是否严格根据所给bool值
### Map集合
Map集合和Clollection是并列关系，不过他是双列集合，键值对集合。  
![..](image-19.png)
类似集合中Set，不再介绍。
## 函数编程
### Stream
Stream流主要用在集合（Collection）类型数据的处理上，例如：过滤、映射、排序、查找等。  
1. **过滤**：使用 `filter()` 方法，根据给定的条件（例如，大于 5）来过滤出符合条件的元素。
2. **映射**：使用 `map()` 方法，将集合中的每个元素应用一个函数，得到一个新集合。
3. **排序**：使用 `sorted()` 方法，对集合进行排序。
4. **查找**：使用 `findAny()` 或 `findFirst()` 方法，返回流中的任意一个元素或第一个元素。
5. **收集**：使用 `collect()` 方法，将流中的元素收集到一个集合中。collect 方法是 Terminal   collect 操作，流就会被消费，不能再被使用。
```java
List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> result = list.stream()
                           .filter(n -> n > 5) // 过滤出大于5的元素
                           .map(n -> n * 2) // 映射每个元素乘以2
                           .sorted() // 对结果进行排序
                           .collect(Collectors.toList());
```
返回HashMap中最大的值如何操作：
```java
return map.entrySet().stream().mapToInt(Entry::getValue).max().orelse(0);
```
以下根据二进制1数目排序：
```java
  return Arrays.stream(arr)
                .boxed()
                .sorted(Comparator.comparingInt(Integer::bitCount)
                .thenComparingInt(Integer::intValue))
                .mapToInt(Integer::intValue)
                .toArray();
```  
以下是String中使用Stream的方法,字母排序后转换为新的字符串。
```java
return "hello".chars() //将字符串转换为int流，不同于之前使用stream方法。
            .mapToObj(c -> (char) c) //将int流转换为字符Stream<Character>
            .sorted() //对字符进行排序
            .map(String::valueOf) //转化为字符串Stream<String>
            .collect(Collectors.joining());
```

### Collections
在 Java 中，`Collections` 是一个位于 `java.util` 包中的类，它包含了一系列静态方法，用于操作和返回集合（Collection）类型的实例。这些方法主要用于对集合进行排序、搜索、替换、倒转等操作。以下是一些常用的 `Collections` 类方法：
1. **排序**
   - `sort(List<?> list)`: 按自然顺序对指定列表进行排序。
   - `sort(List<?> list, Comparator<? super T> c)`: 按提供的比较器对列表进行排序。

2. **搜索和替换**
   - `binarySearch(List<? extends Comparable<T>> list, T key)`: 在自然排序的列表中二分查找指定元素。
   - `binarySearch(List<? extends T> list, T key, Comparator<? super T> c)`: 在使用比较器排序的列表中二分查找指定元素。
   - `max(Collection<? extends T> coll)`: 返回集合中的最大元素。
   - `min(Collection<? extends T> coll)`: 返回集合中的最小元素。
3. **替换**
   - `replaceAll(List<?> list, Object oldVal, Object newVal)`: 将列表中所有等于 `oldVal` 的元素替换为 `newVal`。
4. **倒转**
   - `reverse(List<?> list)`: 反转列表的顺序。
8. **空集合**
   - `emptyList()`: 返回一个空的、不可修改的列表。
   - `emptySet()`: 返回一个空的、不可修改的集合。
   - `emptyMap()`: 返回一个空的、不可修改的映射。


