---
tittle: Redis
icon: pen-to-square
date: 2024-11-30
category:
  - JVM
timeline: true 
tag:
  - Redis

---
# Redis
<!-- more -->  
## Redis基础  
1. **scan**  

scan主要基于游标与正则进行遍历，并且可以指定每次返回的数量。每次再次输入命令时需要输入上次的游标。主要传入三个参数，cursor（游标），第二个是key的正则模式，第三个是limit，表示需要遍历的槽位数。
在redis中所有的key都存储在一个很大的字典中，类似java中hashmap，每一次一维数组扩容翻倍。scan指令返回的游标就是一维数组的位置索引，这个位置索引被称为槽(slat)。之所以返回的结果可能多可能少，是因为不是所有槽位都拉了链表。每一次遍历都会将limit数量的槽位上挂接的所有链表元素进行模式匹配过来后，一次性返回。






## Java客户端  
SpringDataRedis是Spring中数据操作的模块，继承了不同的Redis客户端，如Jedis、Lettuce。其中提供了RedisTemplate，用于操作Redis。其中RedisTemplate中两种序列化方案如下：  

1. 自定义RedisTemplate：修改RedisTemplate中的序列化器为GenericJackson2JsonRedisSerializer。但缺点是序列化对象时会将类名一起序列化。  
2. 使用StringRedisTemplate：使用StringRedisTemplate，StringRedisTemplate默认的序列化器为StringRedisSerializer。手动进行序列化和反序列化。


## 分布式缓存  

**Redis如何做数据持久化？**
  
  
RDB持久化，全程Redis Database Backup file，有可能数据丢失。在服务终止时会执行save命令自动保存加载到磁盘。并且内部有RDB的自动触发机制，在conf文件中配置，会根据情况自动执行bgsave命令保存数据。bgsave会fork一个子进程，然后子进程执行save命令，父进程继续执行，实现异步保存。  
  
AOF持久化，全称Append Only File，追加文件，Redis处理的每一个写命令都会记录到AOF文件中。该功能默认关闭，记录频率比RDB高，一般采用每秒同步一次的方案。  

**Redis主从架构**  

Redis做主从架构不做负载均衡的原因，是因为Redis是读多写少，因此采用主从架构，只在主里面写。通过 从节点 slaveof 主机号 端口号，来实现。  


数据全量同步原理：  
  
![alt text](image-9.png)     

- Replication id:是数据集的标记，id一致则说明是同一个数据集。每一个master都有唯一的replid，salve会继承master的replid。
- Offset：数据集的偏移量，随着记录在repl_baklog中的数据增多而逐渐增大，为了判断同步进度。   
如何判断第一次？ 判断申请同步时候Replication是否一致。  
主从第一次同步是全量同步，但如果slave重启后同步，则执行增量同步。  
![ ](image-10.png)   
  
可以从下面几个方面优化redis主从集群：    

- 在master中配置repl-diskless-sync yes启用无磁盘复制，避免全量同步时的磁盘io。
- 减小Redis单节点的内存占用，减小RDB导致的磁盘io
- 增大repl_baklog大小，发现宕机，尽快恢复
- 限制一个master上的slave数量，可采用主-从-从链式结构，减少master的压力   

**Redis哨兵集群**
哨兵是Redis的一个组件，它负责监控Redis的主从节点，当主节点挂掉时，哨兵会自动切换新的主节点，保证服务的可用性。基于心跳检测服务状态  

- 主观下线：单个或几个哨兵认为主机挂了。
- 客观下线：超多个哨兵认为主机挂了。

如何配置：更改相关配置文件，启动哨兵监控整个集群，在java后台application.ymal中不再配置redis连接池，而是配置sentinel。    

```ymal
Spring:
  redis:
    sentinel:
      master: mymaster #指定master名称
      nodes: # 指定redis-sentinel集群信息
        - 192.168.1.1:26379
        - 192.168.1.2:26380
```  
同时需要配置bean配置类，这里省略。  

**分片集群结构**  
  
主从和哨兵解决高并发、高并发读的问题，但是无法解决海量存储，高并发写的问题，因此需要用到分片集群多个master。而且多个master之间互相监控。通过主节点写，从节点读实现读写分离。  
    
![alt text](image-11.png)  

1. 散列插槽： 

redis会把每一个master节点映射到16384个插槽上，平分到master，redis中key不与节点绑定，而是与插槽绑定。根据一定的hash算法将key映射到插槽，插槽与节点一一对应。  

如何将同一类数据保存在同一个redis实例？？？  
  
key可以都以{typeId}为前缀，对于有花括号的，插槽映射时候只会拿花括号内部分进行映射。  

2. 集群伸缩：  

即添加或删除节点，当添加节点是需要告知一个已存在的主机和端口号。然后还需要将**插槽从已存在的端口上削减转移一部分到新节点上。**
  
3. 故障转移：  

自动具备故障切换，当master宕机后，选择一个从节点作为新的master，重启后变成slave。利用cluster failover命令可以手动让集群中某个master宕机
实现无感知的数据迁移。  
![alt text](image-12.png)  

4. RedisTemplate配置：    

```ymal
spring:
  redis:
    cluster:
      nodes:
       192.168.1.1:7000,
       192.168.1.2:7001,
       192.168.1.3:7002
       ....
```

