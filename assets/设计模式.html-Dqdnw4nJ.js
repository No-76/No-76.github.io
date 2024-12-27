import{_ as k,c as r,a as i,b as d,d as p,e as h,f as a,r as g,o as A,g as s}from"./app-CGrWg95H.js";const o={};function y(c,l){const n=g("CodeTabs");return A(),r("div",null,[l[8]||(l[8]=i("h1",{id:"设计模式",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#设计模式"},[i("span",null,"设计模式")])],-1)),l[9]||(l[9]=i("p",null,"结合尚硅谷设计模式和书籍《图解设计模式》。首先是基础讲解，然后是各个设计模式。",-1)),d(" more "),l[10]||(l[10]=p('<h2 id="类图和七大设计原则" tabindex="-1"><a class="header-anchor" href="#类图和七大设计原则"><span>类图和七大设计原则</span></a></h2><h2 id="交给子类" tabindex="-1"><a class="header-anchor" href="#交给子类"><span>交给子类</span></a></h2><p>交给子类的设计模式主要有两种，模板方法(Template Method)模式和工厂模式，区别在于模板方式相当于一个加工线，关注的是在一系列固定的流程模板中具体某个算法的实现，由子类在父加工线的基础上实现自己的算法步骤，算法步骤流程由父类定义。而工厂模式相当于一个工厂，主要职责是创建对，子类可以通过实现父类的创建逻辑，自由选择创建哪种类型的对象，工厂模式关注的是对象的创建，而非算法步骤的具体实现。</p><h2 id="生成实例" tabindex="-1"><a class="header-anchor" href="#生成实例"><span>生成实例</span></a></h2><p>待总结</p><h3 id="singleton模式-只有一个实例" tabindex="-1"><a class="header-anchor" href="#singleton模式-只有一个实例"><span>Singleton模式 - 只有一个实例</span></a></h3><p>单例模式可以分为静态常量饿汉式，静态代码块饿汉式，线程不安全懒汉式，线程安全懒汉式和同步代码块懒汉式。例如jdk中的RunTime就是经典的单例模式且是恶汉，保证系统中时间只有一个实例，还有SpringBoot中的bean。<br> 其中饿汉式单例对象由静态属性持有，要提前准备好，防止以后饿的时候才创建。而懒汉式则是在第一次调用的时候才创建，懒得做饭，饿的时候才会去调用创建。</p><ol><li><strong>饿汉式</strong></li></ol><p>通过使用私有的构造函数保证单例，基于类加载器的机制构造实例避免线程安全问题。</p>',9)),h(n,{id:"38",data:[{id:"静态常量"},{id:"静态代码块"}]},{title0:a(({value:e,isActive:t})=>l[0]||(l[0]=[s("静态常量")])),title1:a(({value:e,isActive:t})=>l[1]||(l[1]=[s("静态代码块")])),tab0:a(({value:e,isActive:t})=>l[2]||(l[2]=[i("div",{class:"language-java line-numbers-mode","data-highlighter":"shiki","data-ext":"java","data-title":"java",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"public"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}}," Singleton{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    private"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," static"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," Singleton"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}}," singleton "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," new"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," Singleton"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"()"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    private"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," Singleton"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"(){}"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    public"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," static"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," Singleton"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," getInstance"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"(){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"        return"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}}," singleton"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),tab1:a(({value:e,isActive:t})=>l[3]||(l[3]=[i("div",{class:"language-java line-numbers-mode","data-highlighter":"shiki","data-ext":"java","data-title":"java",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"public"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}}," Singleton{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    private"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," static"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," Singleton"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}}," singleton"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    static"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"        singleton "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," new"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," Singleton"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"()"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    private"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," Singleton"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"(){}"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    public"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," static"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," Singleton"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," getInstance"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"(){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"        return"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}}," singleton"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),l[11]||(l[11]=i("p",null,"缺点是在装载时候实现实例化，没有达到懒加载的效果，从而导致内存浪费。",-1)),l[12]||(l[12]=i("ol",{start:"2"},[i("li",null,[i("strong",null,"懒汉式")])],-1)),l[13]||(l[13]=i("p",null,"通过使用私有的构造函数保证单例，但是不是基于类加载器,volatile常用于多线程，一个线程更改后会立即写入堆内存，其他线程可以立即读取。",-1)),h(n,{id:"62",data:[{id:"线程不安全懒汉式"},{id:"线程安全懒汉式"}]},{title0:a(({value:e,isActive:t})=>l[4]||(l[4]=[s("线程不安全懒汉式")])),title1:a(({value:e,isActive:t})=>l[5]||(l[5]=[s("线程安全懒汉式")])),tab0:a(({value:e,isActive:t})=>l[6]||(l[6]=[i("div",{class:"language-java line-numbers-mode","data-highlighter":"shiki","data-ext":"java","data-title":"java",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"public"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," class"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," Singleton"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    private"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," static"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," Singleton"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}}," singleton "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," null"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    private"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," Singleton"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(){};")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    public"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," static"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," Singleton"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," getInstance"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"        if"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(singleton "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"=="),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," null"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"            singleton "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," new"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," Singleton"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"        return"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," singleton;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),tab1:a(({value:e,isActive:t})=>l[7]||(l[7]=[i("div",{class:"language-java line-numbers-mode","data-highlighter":"shiki","data-ext":"java","data-title":"java",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"public"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," class"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," Singleton"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    private"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," static"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," volatile"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," Singleton"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}}," singleton "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," null"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    private"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," Singleton"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(){};")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"    public"),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," static"),i("span",{style:{"--shiki-light":"#C18401","--shiki-dark":"#E5C07B"}}," Singleton"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," getInstance"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"        if"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(singleton "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"=="),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," null"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"            synchronized"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}},"Singleton"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}},"class"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"                if"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(singleton "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"=="),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," null"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"                    singleton "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," new"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," Singleton"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"                }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"            }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"        return"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," singleton;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),l[14]||(l[14]=i("p",null,"缺点是线程不安全懒汉式如果高并发会产生多个实例，而线程安全懒汉式通过双重检查避免了懒加载的问题，但缺点是单例对象可能会被反复创建，因为存在gc的问题。一般场景使用懒汉式。",-1))])}const u=k(o,[["render",y],["__file","设计模式.html.vue"]]),m=JSON.parse('{"path":"/java%E7%AC%94%E8%AE%B0/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html","title":"设计模式","lang":"zh-CN","frontmatter":{"tittle":"设计模式","icon":"pen-to-square","date":"2024-12-27T00:00:00.000Z","category":["JVM"],"timeline":true,"tag":["设计模式"],"description":"结合尚硅谷设计模式和书籍《图解设计模式》。首先是基础讲解，然后是各个设计模式。","head":[["meta",{"property":"og:url","content":"https://github.com/No-76/java%E7%AC%94%E8%AE%B0/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"Lzy"}],["meta",{"property":"og:title","content":"设计模式"}],["meta",{"property":"og:description","content":"结合尚硅谷设计模式和书籍《图解设计模式》。首先是基础讲解，然后是各个设计模式。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-24T14:38:27.000Z"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2024-12-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-24T14:38:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-24T14:38:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lzy\\",\\"url\\":\\"https://github.com/No-76\\"}]}"]]},"headers":[{"level":2,"title":"类图和七大设计原则","slug":"类图和七大设计原则","link":"#类图和七大设计原则","children":[]},{"level":2,"title":"交给子类","slug":"交给子类","link":"#交给子类","children":[]},{"level":2,"title":"生成实例","slug":"生成实例","link":"#生成实例","children":[{"level":3,"title":"Singleton模式 - 只有一个实例","slug":"singleton模式-只有一个实例","link":"#singleton模式-只有一个实例","children":[]}]}],"git":{"createdTime":1735051107000,"updatedTime":1735051107000,"contributors":[{"name":"GSpotMan","email":"964600114@qq.com","commits":1}]},"readingTime":{"minutes":2.49,"words":746},"filePathRelative":"java笔记/设计模式.md","localizedDate":"2024年12月27日","excerpt":"\\n<p>结合尚硅谷设计模式和书籍《图解设计模式》。首先是基础讲解，然后是各个设计模式。</p>\\n","autoDesc":true}');export{u as comp,m as data};
