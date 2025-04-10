import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as e,b as a,d as n,o as i}from"./app-BZbt6How.js";const l="/assets/image-DCvtoRY9.png",p={};function s(c,t){return i(),o("div",null,[t[0]||(t[0]=e("h1",{id:"短链接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#短链接"},[e("span",null,"短链接")])],-1)),t[1]||(t[1]=e("p",null,"段短短",-1)),a(" more "),t[2]||(t[2]=n('<h2 id="短链接后管系统" tabindex="-1"><a class="header-anchor" href="#短链接后管系统"><span>短链接后管系统</span></a></h2><p><strong>什么时候分库分表</strong></p><p>分库主要分为垂直模式和水平模式，垂直模式根据业务将数据库拆分为多个数据库，水平模式将相同业务数据库分为多个数据库。<br> 分表主要分为垂直分表和水平分表，垂直分表根据根据业务维度划分，将不常用的信息放在拓展表中，水平分表根据业务数据量划分，将数据量较大的表分表。</p><p>为什么不使用uri作为分表依据主键？</p><ul><li>如果将uri作为分表主键会导致分页查询时候出现<strong>读扩散</strong>问题，因为显示的是一个组内的。</li></ul><p>什么场景下分表？</p><ul><li>数据量过大或者数据库表对应的磁盘文件过大。</li><li>Q：多少数据分表？</li></ul><p>什么情况下分库？</p><ul><li>连接不够用。</li><li>MySQL Server 假设支持 4000 个数据库连接。一个服务连接池最大 10 个，假设有 40 个节点。已经占用了 400 个数据库连接。类似于这种服务，有10个，那你这个 MySQL Server 连接就不够了。</li><li>一般情况下做读写分离就够了。分库需要复杂的中间件。</li></ul><p>又分库又分表？</p><ul><li>高并发写入或查询场景。</li><li>数据量巨大场景。</li><li>ShardingSphere分库分表框架。</li></ul><h2 id="中台" tabindex="-1"><a class="header-anchor" href="#中台"><span>中台</span></a></h2><p><strong>重定向路由表问题</strong></p><p>短链接重定向时，用户发送的请求是短链接，然而数据库确实根据分组id来对数据进行分组的，也就是说无法根据用户请求进行查找。所以要有一个根据url来分表的同数量数据表来进行重定向，这些表只包含id，gid和url。</p><p><strong>跳转404页面功能</strong></p><p>当访问的短链接不存在时，跳转404页面功能。实现该功能时需要另外写一个Controller，<strong>并使用@Controller</strong>注解而不是@RestController注解，因为@RestController注解会返回json格式的数据，被@Controller标识的类中的方法返回值会经过SpringMVC中的视图解析器解析并渲染，最终将生成的 HTML 等格式的页面返回给客户端，常用于前后端不分离，返回值优先会在前端文件中适配查找。<br><img src="'+l+'" alt="" loading="lazy"></p>',16))])}const g=r(p,[["render",s]]),u=JSON.parse('{"path":"/%E9%A1%B9%E7%9B%AE%E7%AC%94%E8%AE%B0/%E7%9F%AD%E9%93%BE%E6%8E%A5.html","title":"短链接","lang":"zh-CN","frontmatter":{"tittle":"短链接","icon":"pen-to-square","date":"2024-12-8","category":["Java","SpringBoot","项目"],"timeline":true,"tag":["Java","SpringBoot"],"description":"段短短","head":[["meta",{"property":"og:url","content":"https://github.com/No-76/%E9%A1%B9%E7%9B%AE%E7%AC%94%E8%AE%B0/%E7%9F%AD%E9%93%BE%E6%8E%A5.html"}],["meta",{"property":"og:site_name","content":"Lzy"}],["meta",{"property":"og:title","content":"短链接"}],["meta",{"property":"og:description","content":"段短短"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-11T14:07:00.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:published_time","content":"2024-12-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-11T14:07:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"短链接\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-08T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-11T14:07:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lzy\\",\\"url\\":\\"https://github.com/No-76\\"}]}"]]},"headers":[{"level":2,"title":"短链接后管系统","slug":"短链接后管系统","link":"#短链接后管系统","children":[]},{"level":2,"title":"中台","slug":"中台","link":"#中台","children":[]}],"git":{"createdTime":1734451513000,"updatedTime":1741702020000,"contributors":[{"name":"GSpotMan","email":"964600114@qq.com","commits":2}]},"readingTime":{"minutes":2.06,"words":618},"filePathRelative":"项目笔记/短链接.md","localizedDate":"2024年12月8日","excerpt":"\\n<p>段短短</p>\\n","autoDesc":true}');export{g as comp,u as data};
