import{_ as n,c as k,a as i,b as r,d,e as p,w as l,r as g,o as A,f as s}from"./app-BYgVWJxn.js";const y={};function B(o,t){const h=g("CodeTabs");return A(),k("div",null,[t[4]||(t[4]=i("h1",{id:"函数",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#函数"},[i("span",null,"函数")])],-1)),t[5]||(t[5]=i("p",null,"暂无",-1)),r(" more "),t[6]||(t[6]=d('<h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串"><span>字符串</span></a></h2><p><strong>查询字串</strong><br> java:<br> 1.indexOf(String str)：返回子字符串 str 在字符串中第一次出现的索引。<br> 2.indexOf(int ch)：返回字符 ch 在字符串中第一次出现的索引。<br> 3.indexOf(String str, int fromIndex)：从 fromIndex 索引处开始搜索，返回子字符串 str 在字符串中第一次出现的索引。<br> 4.indexOf(int ch, int fromIndex)：从 fromIndex 索引处开始搜索，返回字符 ch 在字符串中第一次出现的索引。<br> go:<br> go中只有一个用法。<br><strong>注意</strong>：虽然时间复杂度同为O(n)，但是KMP算法仍然更高效。<br> 示例：</p>',2)),p(h,{id:"13",data:[{id:"java"},{id:"go"}],"tab-id":"shell"},{title0:l(({value:a,isActive:e})=>t[0]||(t[0]=[s("java")])),title1:l(({value:a,isActive:e})=>t[1]||(t[1]=[s("go")])),tab0:l(({value:a,isActive:e})=>t[2]||(t[2]=[i("div",{class:"language-java line-numbers-mode","data-highlighter":"shiki","data-ext":"java","data-title":"java",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"public"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," class"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," Main"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    public"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," static"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," void"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," main"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}},"String"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"[] "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"args"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},")"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}},"        String"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}}," str"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},' "Hello, world!"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},'        // 查找子字符串 "world" 的索引')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"        int"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}}," index1"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}}," str"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"indexOf"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"world"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}},"        System"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}},"out"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"println"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(index1); "),i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"// 输出：7")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"        // 查找字符 'l' 的索引")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"        int"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}}," index2"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}}," str"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"indexOf"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'l'"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}},"        System"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}},"out"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"println"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(index2); "),i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"// 输出：9")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},'        // 从索引 5 开始查找子字符串 "o" 的索引')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"        int"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}}," index3"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}}," str"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"indexOf"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"o"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"5"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}},"        System"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}},"out"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"println"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(index3); "),i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"// 输出：10")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"        // 从索引 5 开始查找字符 'l' 的索引")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"        int"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}}," index4"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}}," str"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"indexOf"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'l'"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"5"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}},"        System"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}},"out"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"println"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(index4); "),i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"// 输出：9")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),tab1:l(({value:a,isActive:e})=>t[3]||(t[3]=[i("div",{class:"language-go line-numbers-mode","data-highlighter":"shiki","data-ext":"go","data-title":"go",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"s"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}}," :="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},' "Hello, world!"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},'// 查找子字符串 "world" 的索引')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"index"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}}," :="),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}}," strings"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"Index"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"s"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"world"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"fmt"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"Println"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"index"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},") "),i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"// 输出：7")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1})])}const F=n(y,[["render",B],["__file","函数.html.vue"]]),m=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95%E7%AC%94%E8%AE%B0/%E5%87%BD%E6%95%B0.html","title":"函数","lang":"zh-CN","frontmatter":{"tittle":"函数","icon":"pen-to-square","date":"2023-9-18","category":["算法笔记"],"timeline":false,"tag":["函数","算法"],"description":"暂无","head":[["meta",{"property":"og:url","content":"https://GSpotMan.github.io/%E7%AE%97%E6%B3%95%E7%AC%94%E8%AE%B0/%E5%87%BD%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"Lzy"}],["meta",{"property":"og:title","content":"函数"}],["meta",{"property":"og:description","content":"暂无"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-21T09:13:32.000Z"}],["meta",{"property":"article:tag","content":"函数"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:published_time","content":"2023-09-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-21T09:13:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-21T09:13:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lzy\\",\\"url\\":\\"https://GSpotMan.com\\"}]}"]]},"headers":[{"level":2,"title":"字符串","slug":"字符串","link":"#字符串","children":[]}],"git":{"createdTime":1726742071000,"updatedTime":1726910012000,"contributors":[{"name":"GSpotMan","email":"964600114@qq.com","commits":3}]},"readingTime":{"minutes":1.07,"words":320},"filePathRelative":"算法笔记/函数.md","localizedDate":"2023年9月18日","excerpt":"\\n<p>暂无</p>\\n","autoDesc":true}');export{F as comp,m as data};
