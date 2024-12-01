import{_ as o,c as n,a as t,b as s,d as r,o as i}from"./app-Cgf9RJfn.js";const a={};function p(c,e){return i(),n("div",null,[e[0]||(e[0]=t("h1",{id:"黑马点评",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#黑马点评"},[t("span",null,"黑马点评")])],-1)),e[1]||(e[1]=t("p",null,"主要是redis考察",-1)),s(" more "),e[2]||(e[2]=r('<h2 id="短信登录" tabindex="-1"><a class="header-anchor" href="#短信登录"><span>短信登录</span></a></h2><p><strong>短信登录/注册流程？</strong></p><p>发送验证码：首先针对客户端的手机号，双端建立连接，服务端随机生成一个随机数然后保存到session中，通过一些别的服务发送到客户端。<br> 登录/注册：客户端输入验证码登录后，服务端需要校验验证码是否正确，正确则根据手机号查询用户对象，不存在则创建用户对象（用户注册）。最终把用户休尼希保存到session中。</p><p><strong>登录校验流程？</strong></p><p>登录校验：首先根据sessionid查询session，如果存在用户则放在TreadLocal中，如果session中不存用户信息则返回错误信息。</p><p><strong>传统基于session的登录校验在nginx集群中为什么不行?</strong></p><p>首先客户端发送各请求时都会基于拦截器先发送cookie,服务器会根据cookie中携带的sessionid查询服务器内的session，看seesion内是否存在用户对象。然而大型项目服务器一般是nginx集群，这就导致nginx集群中别的无法获取session信息，所以session无法校验。</p><p><strong>基于redis的登录？</strong></p><p>区别1：发验证码时，生成的验证码保存到redis中而不是session中。<br> 区别2：登录/注册时，查询用户对象保存到redis中而不是session中。一般采用redis中的Hash结构存储，以随机token作为key。（比json更存储内存消耗小，方便crud）。<strong>且需要将token传到前端（不同于seesion登录）</strong><br> 区别3：登录校验：前端将token存储在<strong>sessionStorage</strong>中，每次发送请求携带token。sessionStorage 是一种 Web 存储 API，它允许 Web 应用程序在用户浏览器中存储键值对数据，并且这些数据只在单个浏览器标签页中有效，关闭则消失，与之相对的是localStorage，不会消失。</p>',9))])}const d=o(a,[["render",p],["__file","黑马点评.html.vue"]]),m=JSON.parse('{"path":"/%E9%A1%B9%E7%9B%AE%E7%AC%94%E8%AE%B0/%E9%BB%91%E9%A9%AC%E7%82%B9%E8%AF%84.html","title":"黑马点评","lang":"zh-CN","frontmatter":{"tittle":"黑马点评","icon":"pen-to-square","date":"2024-12-1","category":["Java","SpringBoot","项目"],"timeline":true,"tag":["Java","SpringBoot"],"description":"主要是redis考察","head":[["meta",{"property":"og:url","content":"https://github.com/No-76/%E9%A1%B9%E7%9B%AE%E7%AC%94%E8%AE%B0/%E9%BB%91%E9%A9%AC%E7%82%B9%E8%AF%84.html"}],["meta",{"property":"og:site_name","content":"Lzy"}],["meta",{"property":"og:title","content":"黑马点评"}],["meta",{"property":"og:description","content":"主要是redis考察"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-01T04:46:10.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:published_time","content":"2024-12-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-01T04:46:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"黑马点评\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-01T04:46:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lzy\\",\\"url\\":\\"https://github.com/No-76\\"}]}"]]},"headers":[{"level":2,"title":"短信登录","slug":"短信登录","link":"#短信登录","children":[]}],"git":{"createdTime":null,"updatedTime":1733028370000,"contributors":[{"name":"GSpotMan","email":"964600114@qq.com","commits":1}]},"readingTime":{"minutes":1.74,"words":523},"filePathRelative":"项目笔记/黑马点评.md","localizedDate":"2024年12月1日","excerpt":"\\n<p>主要是redis考察</p>\\n","autoDesc":true}');export{d as comp,m as data};
