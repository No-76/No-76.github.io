import{_ as t,c as a,a as i,b as r,d as s,o as l}from"./app-Dr_fjaV7.js";const n="/assets/image-DOIWO0oJ.png",p="/assets/image-1-BLyLaI6J.png",o={};function h(d,e){return l(),a("div",null,[e[0]||(e[0]=i("h1",{id:"spring",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#spring"},[i("span",null,"Spring")])],-1)),e[1]||(e[1]=i("p",null,"笔记未完成状态。",-1)),r(" more "),e[2]||(e[2]=s('<p>Spring特点有：</p><ul><li>MVC三层架构：<br><strong>1.controller</strong>:控制层，接受前端发送的请求，对请求进行处理，并响应数据。<br><strong>2.service</strong>：业务逻辑层，处理具体的业务逻辑。<br><strong>3.dao</strong>：数据访问层/持久层(Data Access Object，负责对数据库的访问操作，包括增删改查。</li><li>IOC&amp;DI:<br><strong>1.IOC(Inversion Of Control)</strong>:对象的控制权由程序自身转移到外部容器，实现解耦。<br><strong>2.DI(Dependency injection)</strong>:容器为应用程序提供运行时，所依赖的资源，成为依赖注入。<br><strong>3.Bean对象</strong>:IOC外部容器中所创建、管理的对象。</li><li>面向切面编程（AOP）:<br> 1.连接点：Joinpoint，可以被AOP控制的方法<br> 2.通知：Advice，重复的逻辑，也就是公用的控制方法<br> 3.切入点：Pointcut，匹配连接点的条件，通知仅在切入点方法执行时应用。</li></ul><h2 id="会话技术" tabindex="-1"><a class="header-anchor" href="#会话技术"><span>会话技术</span></a></h2><p><img src="'+n+'" alt="" loading="lazy"><br> 登陆过程需要建立一次会话，因为HTTP协议是无状态的，在一次会话中可以包含多次请求和响应。</p><ul><li>会话跟踪:一种维护浏览器状态的方法，服务器需要识别多次请求是否来自于同一浏览器，以便在同一次会话的多次请求间共享数据。</li><li>会话跟踪方案： <ul><li>客户端会话跟踪技术：Cookie <ul><li>优点：HTTP协议自带结束</li><li>缺点：移动端无法使用，不安全，用户可以自己禁用，且cookie不能跨域。</li></ul></li><li>服务端会话跟踪技术： Session <ul><li>优点：存储在服务端，更安全</li><li>缺点：服务器集群环境无法使用，cookie的缺点。</li></ul></li><li>令牌技术 <ul><li>优点：支持多端，集群环境，减轻服务器端存储压力。</li><li>缺点：需要自己实现。</li></ul></li></ul></li></ul><h3 id="jwt令牌" tabindex="-1"><a class="header-anchor" href="#jwt令牌"><span>JWT令牌</span></a></h3><p>全称：JSON Web Token</p><h3 id="filter过滤器" tabindex="-1"><a class="header-anchor" href="#filter过滤器"><span>Filter过滤器</span></a></h3><p>是Java Servlet规范的一部分，可以通过实现javax.servlet.Filter接口来创建。作用于Servlet之前，可以对几乎所有的请求进行拦截，包括静态资源（如图片、CSS、JS等）。</p><ul><li>拦截执行过程：<br> 1.执行放行前逻辑。<br> 2.放行。<br> 3.在web服务器中实现与web资源的交互。<br> 4.放行之后的逻辑。</li><li>拦截路径：<br> 1./login(单个)<br> 2./depts/(多个)<br> 3./(全部)</li></ul><h3 id="interceptor拦截器" tabindex="-1"><a class="header-anchor" href="#interceptor拦截器"><span>Interceptor拦截器</span></a></h3><p>是Spring框架提供的一个概念，可以通过实现org.springframework.web.servlet.HandlerInterceptor接口或使用@Interceptor注解来创建。作用于Spring的DispatcherServlet之后，只对经过DispatcherServlet的请求有效，通常不包括静态资源。<br><img src="'+p+`" alt="拦截器与过滤器的区别图" loading="lazy"></p><h3 id="消息转换器" tabindex="-1"><a class="header-anchor" href="#消息转换器"><span>消息转换器</span></a></h3><p>Spring 的消息转换器（HttpMessageConverter）主要负责将请求报文绑定为方法中的形参对象，以及将方法的返回值转换为 HTTP 响应的内容。当 Controller 方法返回一个对象时，Spring MVC 使用消息转换器将该对象转换为 HTTP 响应体的内容<br> 。消息转换器负责将 Java 对象转换为特定的媒体类型，例如 JSON、XML、HTML 等。<br> Spring 还允许通过 extendMessageConverters 方法在配置转换器后扩展或修改转换器列表<br> 。这可以用于添加自定义转换器或者在默认转换器注册后插入自定义转换器。(例如可以自动修改日期格式)</p><h4 id="请求类型" tabindex="-1"><a class="header-anchor" href="#请求类型"><span>请求类型</span></a></h4><ul><li>实体参数<br> 使用方法：通过创建实体类,传入参数<code>User user</code>，类中创建get，set方法以及tostring。</li><li>数组参数<br> 使用方法： <ul><li>传入参数<code>String[] name</code></li><li>传入参数<code>@RequestParam List&lt;String&gt; name</code></li></ul></li><li>日期参数<br> 使用方法： <code>@DateTimeFormat(patterm=yyyy-MM-dd HH:mm:ss)LocalDateTime updatetime</code></li><li>json参数<br> 使用方法：同实体参数不过加入注解,<code>@Requestbody User user</code></li><li>路径参数<br> 使用方法：</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">RequestMapping</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/path/{id}/{name}&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> path</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">PathVariable</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">PathVariable</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> name){}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>统一响应<br> 使用方法：通过构造实体类以包含各种类型的数据，Integer,String等，<code>Public &quot;自定义类&quot; name（类名）</code>,通过写入get，set方法进行包装。</li></ul>`,18))])}const g=t(o,[["render",h],["__file","Spring.html.vue"]]),k=JSON.parse('{"path":"/java%E7%AC%94%E8%AE%B0/Spring.html","title":"Spring","lang":"zh-CN","frontmatter":{"tittle":"Spring","icon":"pen-to-square","date":"2024-10-1","category":["Java"],"timeline":true,"tag":["Java"],"description":"笔记未完成状态。","head":[["meta",{"property":"og:url","content":"https://github.com/No-76/java%E7%AC%94%E8%AE%B0/Spring.html"}],["meta",{"property":"og:site_name","content":"Lzy"}],["meta",{"property":"og:title","content":"Spring"}],["meta",{"property":"og:description","content":"笔记未完成状态。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-14T07:50:17.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2024-10-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-14T07:50:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-14T07:50:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lzy\\",\\"url\\":\\"https://github.com/No-76\\"}]}"]]},"headers":[{"level":2,"title":"会话技术","slug":"会话技术","link":"#会话技术","children":[{"level":3,"title":"JWT令牌","slug":"jwt令牌","link":"#jwt令牌","children":[]},{"level":3,"title":"Filter过滤器","slug":"filter过滤器","link":"#filter过滤器","children":[]},{"level":3,"title":"Interceptor拦截器","slug":"interceptor拦截器","link":"#interceptor拦截器","children":[]},{"level":3,"title":"消息转换器","slug":"消息转换器","link":"#消息转换器","children":[]}]}],"git":{"createdTime":1728892217000,"updatedTime":1728892217000,"contributors":[{"name":"GSpotMan","email":"964600114@qq.com","commits":1}]},"readingTime":{"minutes":3.35,"words":1005},"filePathRelative":"java笔记/Spring.md","localizedDate":"2024年10月1日","excerpt":"\\n<p>笔记未完成状态。</p>\\n","autoDesc":true}');export{g as comp,k as data};
