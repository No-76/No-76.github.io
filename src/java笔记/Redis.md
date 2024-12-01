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
## Java客户端  
SpringDataRedis是Spring中数据操作的模块，继承了不同的Redis客户端，如Jedis、Lettuce。其中提供了RedisTemplate，用于操作Redis。其中RedisTemplate中两种序列化方案如下：  

1. 自定义RedisTemplate：修改RedisTemplate中的序列化器为GenericJackson2JsonRedisSerializer。但缺点是序列化对象时会将类名一起序列化。  
2. 使用StringRedisTemplate：使用StringRedisTemplate，StringRedisTemplate默认的序列化器为StringRedisSerializer。手动进行序列化和反序列化。
