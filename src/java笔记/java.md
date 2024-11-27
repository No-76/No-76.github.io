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
## java数据结构
### Java 中的队列和栈
```java
Deque<String> stack = new ArrayDeque<String>();
```    
**通常使用以上双端队列来模拟队列和栈**  
1. **插入方法**
   - **`addFirst(E e)`**：在队列头部插入一个元素。
   - **`addLast(E e)`**：在队列尾部插入一个元素。
   - **`offerFirst(E e)`**：在队列头部插入一个元素，如果成功返回 `true`。
   - **`offerLast(E e)`**：在队列尾部插入一个元素，如果成功返回 `true`。
2. **移除方法**
   - **`removeFirst()`**：移除并返回队列头部的元素，如果队列为空则抛出 `NoSuchElementException`。
   - **`removeLast()`**：移除并返回队列尾部的元素，如果队列为空则抛出 `NoSuchElementException`。
   - **`pollFirst()`**：移除并返回队列头部的元素，如果队列为空则返回 `null`。
   - **`pollLast()`**：移除并返回队列尾部的元素，如果队列为空则返回 `null`。  
## Java 中的列表  
1. **ArrayList**：动态数组，支持随机访问。
2. **LinkedList**：链表，支持插入和删除操作。
3. **Vector**：线程安全的 ArrayList，支持同步访问。  
### 列表转数组方法  
```java
Object[] array = list.toArray();  
```
该方法返回的是一个 Object 数组，而不是 T[] 类型的数组。如果想要一个Integer数组，可以使用如下代码：
```java
Integer[] array = nums.toArray(new Integer[0]);
```  
通过new Integer[0]来避免自动装箱为Object[]，而因为0的存在限制了箱子大小，toArray()会创建一个大小合适的新数组。  
**注意：** Integer数组存储的是对象引用，每个引用占用4个字节（在32位和64位的JVM中），但每个Integer对象本身在堆上分配，所以实际上占用的内存更多。     

如果想要一个int类型数组，可以使用如下代码：
```java
var array = nums.stream().mapToInt(i -> i).toArray();
```
## Java库函数
### Stream
Stream流主要用在集合（Collection）类型数据的处理上，例如：过滤、映射、排序、查找等。  
1. **过滤**：使用 `filter()` 方法，根据给定的条件（例如，大于 5）来过滤出符合条件的元素。
2. **映射**：使用 `map()` 方法，将集合中的每个元素应用一个函数，得到一个新集合。
3. **排序**：使用 `sorted()` 方法，对集合进行排序。
4. **查找**：使用 `findAny()` 或 `findFirst()` 方法，返回流中的任意一个元素或第一个元素。
5. **收集**：使用 `collect()` 方法，将流中的元素收集到一个集合中。collect 方法是 Terminal Operation，这意味着一旦执行了 collect 操作，流就会被消费，不能再被使用。
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
                .sorted(Comparator.comparingInt(Integer::bitCount).thenComparingInt(Integer::intValue))
                .mapToInt(Integer::intValue)
                .toArray();
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
## Java中对象类方法
都继承自Object类。
### String
**查询子串**  
* java:  
1.indexOf(String str)：返回子字符串 str 在字符串中第一次出现的索引。  
2.indexOf(int ch)：返回字符 ch 在字符串中第一次出现的索引。  
3.indexOf(String str, int fromIndex)：从 fromIndex 索引处开始搜索，返回子字符串 str 在字符串中第一次出现的索引。  
4.indexOf(int ch, int fromIndex)：从 fromIndex 索引处开始搜索，返回字符 ch 在字符串中第一次出现的索引。  
```java
public class Main {
    public static void main(String[] args) {
        String str = "Hello, world!";

        // 查找子字符串 "world" 的索引
        int index1 = str.indexOf("world");
        System.out.println(index1); // 输出：7

        // 查找字符 'l' 的索引
        int index2 = str.indexOf('l');
        System.out.println(index2); // 输出：9

        // 从索引 5 开始查找子字符串 "o" 的索引
        int index3 = str.indexOf("o", 5);
        System.out.println(index3); // 输出：10

        // 从索引 5 开始查找字符 'l' 的索引
        int index4 = str.indexOf('l', 5);
        System.out.println(index4); // 输出：9
    }
}  
```
**处理字符串**    

针对下列python代码进行讨论：  
```python
return ' '.join(reversed(words.split()))
``` 
1. ' '.join: 其中join用来遍历可迭代元素，其中.前面的元素被视为连接元素的"胶水"。  
2. split()：将字符串分割成子字符串，并且返回为列表格式。    

对于java而言：
```java
List<String> wordList = Arrays.asList(words.trim().split("\\s+"));
Collections.reverse(wordList);
String result = String.join(" ",wordList);
```  
1. tirm(): 用于去除首尾的全部空格和换行符，如果不适用tirm得到的结果["", "Hello", "World"， ""]，相比原结果两端有空白字符。
2. split(): 这里使用转义字符加正则表达式\s+来匹配多个空格，因为在Java中" "这种空格只能匹配单个空格，无法匹配多个。
## 垃圾回收 
在Java中，垃圾回收器（Garbage Collector）负责回收不再使用的对象。垃圾回收器是一个后台线程。  
1. 可达性分析：通过一系列成为"GC Roots"的对象开始，通过引用链找到所有可以访问到的对象。GC ROOTS包含：   
- 栈中引用的对象
- 方法区中静态属性引用的对象
- 方法区中常量引用的对象
- 本地方法栈JNI 引用的对象
2. 回收算法：  
**标记-清除算法**：产生大量内存碎片。  
**标记-整理算法**：无内存碎片。  
**复制算法**：将内存分为两块，每次只使用一块，当这一块用完，反复复制实现去除碎片。  
**分代垃圾回收**：分为新生代和老年代，新生代包含eden、survivor(包括from和to区)。
   - Minor GC:也称为新生代GC，是针对新生代survivor区的垃圾回收。**采用复制算法**，开始全部放在伊甸区，存活下来进入form区并且年龄不断增大，from区被回收的进入to区等待下次垃圾回收，再回到from区(from和to来回互换，总比例8：1：1)。回收后进入老年区。
   - Full GC:也称为Major GC或老年代GC，是针对整个内存的垃圾回收。当老年代、元空间或者堆空间满时触发。**采用标记-整理算法**。
3. 垃圾收集器：  
- Serial：最基本的收集器，单线程，回收效率高，需要STW。    
![alt text](image-4.png)   
- ParNew：基于Serial的并行收集器，多线程，但需要STW。适合多cpu(单cpu线程切换需要开销)
![alt text](image-5.png)  
**老年代也能并行，别的收集器**
- CMS：Concurrent Mark Sweep，并发标记-清除算法，分为四步：1.初始标记（仅仅标记GC ROOT关联的）-->2.并发标记--->3.并发清除--->4.并发复制。只有初始标记和并发标记需要STW。缺点：并发清除阶段垃圾无法清除产生浮动垃圾(浮动垃圾过多时候需要采用备胎Serial)，大量垃圾碎片。
![alt text](image-6.png)
- G1：Garbage Fisrt，默认的垃圾收集器。化整为零，将内存化为上千个部分，采用分代回收，灵活分配。
![alt text](image-7.png)