import{_ as t,c as a,a as l,b as i,e as s,o as n}from"./app-BFx3-Q5T.js";const r={};function o(d,e){return n(),a("div",null,[e[0]||(e[0]=l("h1",{id:"工具相关",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#工具相关"},[l("span",null,"工具相关")])],-1)),e[1]||(e[1]=l("p",null,"记录写Spring使用过程中常用的一些工具。",-1)),i(" more "),e[2]||(e[2]=l("h2",{id:"mybatis及plus",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#mybatis及plus"},[l("span",null,"Mybatis及Plus")])],-1)),e[3]||(e[3]=l("p",null,"笔记未完成状态。",-1)),i(" more "),e[4]||(e[4]=s('<h3 id="mybatis" tabindex="-1"><a class="header-anchor" href="#mybatis"><span>Mybatis</span></a></h3><h4 id="参数占位符" tabindex="-1"><a class="header-anchor" href="#参数占位符"><span>参数占位符</span></a></h4><ul><li><code>#{...} </code><ul><li>执行SQL时，会将#{...}替换为？，生成预编译SQL，会自动设置参数。</li><li>使用时机：参数传递时，都使用#{...}。</li></ul></li><li><code>${...}</code><ul><li>拼接SQL,直接将参数拼接到SQL语句中，存在SQL注入问题。登录密码千万不要这样设置。</li><li>使用时机，如果对表明，列表名进行动态设置时。</li></ul></li></ul><h4 id="xml映射标签" tabindex="-1"><a class="header-anchor" href="#xml映射标签"><span>XML映射标签</span></a></h4><ul><li><code>&lt;if&gt;</code></li><li><code>&lt;where&gt;</code></li><li><code>&lt;set&gt;</code></li><li><code>&lt;foreach&gt;</code></li><li><code>&lt;sql&gt; </code></li><li><code>&lt;include&gt;</code></li><li><code>&lt;association&gt;</code>: 关联对象,处理多对一的关联。</li><li><code>&lt;collection&gt;</code>：关联集合，处理一对多的关联。</li><li><code>&lt;resultMap&gt;</code>：将结果映射到实体类中。resultMap可以配合标签association或collection来实现级联查询。这两个标签内除了常见属性property、column之外，还可以设置其他属性，如javaType来指定实体类中参数类型(可以为对象类型)、select语句，实现多表查询。</li></ul><h3 id="mybatis-plus" tabindex="-1"><a class="header-anchor" href="#mybatis-plus"><span>Mybatis-Plus</span></a></h3><h2 id="maven" tabindex="-1"><a class="header-anchor" href="#maven"><span>Maven</span></a></h2><p>Maven 是一个项目管理和构建自动化工具,它使用一个名为 POM（Project Object Model）的 XML 文件来描述项目的构建过程、依赖关系和其他配置。</p><ul><li>继承与聚合？</li><li>聚合工程？<br> 标签<code>&lt;modules&gt; </code></li><li>版本锁定？<br> 标签<code>&lt;Dependencymanage&gt;</code></li></ul><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h2><p>是一个开源的键值存储系统，通常用作数据库、缓存和消息代理。</p><ul><li>字符串(String) <ul><li>set key value：设置指定key的值</li><li>get key：获取指定key的值</li><li>setex key seconds value：设置指定key的值，并将key的过期时间设为seconds秒</li><li>setnx key value 只有在key不存在时设置key的值</li></ul></li><li>哈希(Hash) <ul><li>HSET key field value：将哈希表 key 中的字段 field 的值设为 value</li><li>HGET key field：获取存储在哈希表中指定字段的值。</li><li>hdel key field:删除哈希表中指定字段</li><li>hkeys key：获取哈希表中所有字段</li><li>hvals key：获取哈希表中所有值</li></ul></li><li>列表(List) <ul><li>l(r)push key value:将一个或者多个插入到列表头部(尾部)</li><li>l(r)pop key value:移除一个或者多个列表头部(尾部)元素</li><li>llen key：获取列表长度</li></ul></li><li>集合(Set) <ul><li>sadd key member:向集合中加入一个或多个成员</li><li>srem key member:删除集合中的一个或多个成员</li><li>sinter key1 [key2]:求交集</li><li>sunion key1 [key2]:求并集</li></ul></li><li>有序集合(Sorted Set) <ul><li>zadd key socre member:向有序集合中添加一个或多个成员</li><li>zrem key member:移除有序集合中一个或多个成员</li><li>zrange key start stop:通过索引区间返回指定区间的成员</li><li>zincrby key increment member:对指定成员加上分数增量increment</li></ul></li><li>通用命令 <ul><li>keys parttern:查找给定模式的key</li><li>exists key:检查是否存在key</li><li>type key:返回key所储存的值的类型</li><li>del key:存在时删除key</li></ul></li></ul><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h2><p>单机吞吐量1000左右。</p><h3 id="多表联合" tabindex="-1"><a class="header-anchor" href="#多表联合"><span>多表联合</span></a></h3><p>处理关联问题：</p><ul><li>同步存储：增加新的字段，在班级表中增加新的字段学生数量来进行维护。 <ul><li>优点：<br> 查询数量时只需要单表查询，执行速度快</li><li>缺点：<br> 需要维护额外的字段，维护成本高</li></ul></li><li>关联查询：编写关联查询语句，在mapper层进行封装。 <ul><li>优点：不需要额外的字段进行维护</li><li>缺点：查询较慢，当N较大时不适用</li></ul></li></ul><p>处理级联问题：</p><ul><li>级联查询：通常是指对象关系映射(ORM)中，即在查询时，将关联对象也查询出来。在mybatis中，使用association或collection标签来完成。</li></ul><h2 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka"><span>Kafka</span></a></h2><p>Kafka 是一个开源的分布式事件日志系统，单机吞吐量10w左右。</p><ul><li>应用场景 <ul><li>异步处理:将一些比较耗时的操作放在其他系统中</li><li>系统解耦:减少不同微服务之间的耦合性</li><li>流量削峰:根据消息队列高吞吐特性解决</li><li>日志处理(大数据领域)</li></ul></li><li>两种模型</li></ul><ol><li>生产者、消费者模型:不必保证消息的顺序，和消息持久化。</li><li>消息队列模式:必须保证消息的顺序性，和消息持久化。其中包括点对点，一对一。和发布订阅，一对多两种形式。</li></ol>',23))])}const p=t(r,[["render",o],["__file","工具相关.html.vue"]]),u=JSON.parse('{"path":"/java%E7%AC%94%E8%AE%B0/%E5%B7%A5%E5%85%B7%E7%9B%B8%E5%85%B3.html","title":"工具相关","lang":"zh-CN","frontmatter":{"tittle":"工具相关","icon":"pen-to-square","date":"2024-10-8","category":["Java"],"timeline":true,"tag":["Java","Mybatis","Maven","Redis"],"description":"记录写Spring使用过程中常用的一些工具。","head":[["meta",{"property":"og:url","content":"https://github.com/No-76/java%E7%AC%94%E8%AE%B0/%E5%B7%A5%E5%85%B7%E7%9B%B8%E5%85%B3.html"}],["meta",{"property":"og:site_name","content":"Lzy"}],["meta",{"property":"og:title","content":"工具相关"}],["meta",{"property":"og:description","content":"记录写Spring使用过程中常用的一些工具。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-05T08:49:07.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Mybatis"}],["meta",{"property":"article:tag","content":"Maven"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2024-10-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-05T08:49:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"工具相关\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-05T08:49:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lzy\\",\\"url\\":\\"https://github.com/No-76\\"}]}"]]},"headers":[{"level":2,"title":"Mybatis及Plus","slug":"mybatis及plus","link":"#mybatis及plus","children":[{"level":3,"title":"Mybatis","slug":"mybatis","link":"#mybatis","children":[]},{"level":3,"title":"Mybatis-Plus","slug":"mybatis-plus","link":"#mybatis-plus","children":[]}]},{"level":2,"title":"Maven","slug":"maven","link":"#maven","children":[]},{"level":2,"title":"Redis","slug":"redis","link":"#redis","children":[]},{"level":2,"title":"MySQL","slug":"mysql","link":"#mysql","children":[{"level":3,"title":"多表联合","slug":"多表联合","link":"#多表联合","children":[]}]},{"level":2,"title":"Kafka","slug":"kafka","link":"#kafka","children":[]}],"git":{"createdTime":1729059909000,"updatedTime":1730796547000,"contributors":[{"name":"GSpotMan","email":"964600114@qq.com","commits":3}]},"readingTime":{"minutes":3.58,"words":1075},"filePathRelative":"java笔记/工具相关.md","localizedDate":"2024年10月8日","excerpt":"\\n<p>记录写Spring使用过程中常用的一些工具。</p>\\n","autoDesc":true}');export{p as comp,u as data};
