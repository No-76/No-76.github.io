import{_ as a,c as i,a as t,b as e,d as o,o as r}from"./app-BqJ_sBbh.js";const s="/assets/image-15-BE2anbWe.png",n="/assets/image-13-YOIr0cbz.png",p="/assets/image-4-BDtOrmrJ.png",g="/assets/image-5-BRN3vtFy.png",d="/assets/image-6-EmBoJljm.png",c="/assets/image-17-LGrMSWZs.png",m={};function u(h,l){return r(),i("div",null,[l[0]||(l[0]=t("h1",{id:"jvm",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#jvm"},[t("span",null,"JVM")])],-1)),l[1]||(l[1]=t("p",null,"JVM主要包含以下三大功能：",-1)),l[2]||(l[2]=t("ul",null,[t("li",null,"解释运行"),t("li",null,"内存管理"),t("li",null,"即时编译")],-1)),e(" more "),l[3]||(l[3]=o('<h2 id="类加载器" tabindex="-1"><a class="header-anchor" href="#类加载器"><span>类加载器</span></a></h2><p><strong>类加载器分类</strong></p><p>类加载器涉及到类的生命周期中的初始化阶段和连接中的解析阶段。三个类加载器：</p><p>类加载器分为有c++实现的启动类加载器Bootstrap，包含一些默认文件中存在的jar包，后续也可添加，例如使用String.class.getClassLoader()方法是无法查看的结果为null。</p><p>第二种是java实现的扩展类加载器Extension和应用程序加载器Application。他们的源码都位于sun.misc.launcher中，是一个静态内部类，继承自URLClassLoader,具备通过目录或者指定jar包将字节码文件加载到内存中。应用程序加载器Application加载一些自己写的类以及第三方类，扩展类加载器Extension不重要，加载一些类例如java中可以加载jsp代码。<br><img src="'+s+'" alt="alt text" loading="lazy"></p><p>且这三个类加载器互为父子。</p><p><strong>类的生命周期？</strong></p><p>总共分为5个阶段：加载、连接、初始化、使用、卸载。而连接的过程又可以分为三个阶段：验证、准备、解析。</p><ol><li>加载阶段： 类加载器在加载完类后，java虚拟机会将字节码中的信息(基本信息,常量池,字段,方法)保存在内存的方法区中,生成一个InstanceKlass对象(使用c++),保存类的所有信息,还包含多态信息. 同时,在堆中生成一份与方法区中数据类似的java.long.Class对象(使用java),作用是获取类的信息以及存储静态字段的信息。<br> 复制到堆的优点:只复制开发者可以访问的数据,更加安全。</li><li>连接阶段：分为三个流程，首先是验证，验证内容是否符合java虚拟机规范，然后是准备阶段，主要是给静态变量赋初值(final 变量直接赋值，否则赋值0)，最后是解析阶段，将常量池中的符号引用替换成指向实际数据的指针。</li><li>初始化阶段：初始化阶段执行静态代码中的代码，并为静态变量赋值。如下打印顺序为DACBCB。静态代码块(加载时候打印一次)-&gt;实例(局部)代码块-&gt;构造代码块.<br><img src="'+n+'" alt="alt text" loading="lazy"></li></ol><p>对于继承类问题,访问父类的静态变量不需要初始化子类,初始化子类之前一定会初始化父类.</p><p><strong>双亲委派机制？</strong></p><p>主要解决一个类到底由哪个类加载器加载问题。双亲委派机制的作用如下： 、</p><ol><li>保证类加载的安全性：避免恶意代码替换JDK的核心类库例如String。</li><li>避免重复加载：避免一个类被多个类加载器加载。</li></ol><p>类加载过程：</p><ol><li>向上查询：自底向上看父加载器是否加载了这个类，向上查如果加载过，则返回对象。</li><li>向下委派：自顶向下尝试加载，主要看在不在自己的加载目录中，如果不在则委派给子类。</li></ol><p>**注意：**虽然逻辑上启动类加载器是拓展类加载器的父加载器，但是实际上查询拓展类加载器的父类时得到的是null，因为启动类加载器无法获得，拿不到他的对象。</p><p><strong>打破双亲委派机制？</strong></p><ol><li>自定义类加载器：</li></ol><p>类加载器中主要有这几个方法：loadClass，findClass，defineClass,resolveClass。其中loadClass方法中默认实现双亲委派机制，包括向上的查询，向下委派过程中主要通过findClass方法，其中校验这个类在不在负责的加载路径，然后调用defineClass，resolveClass主要负责类的连接和初始化。<br> 正确的去实现一个自定义类加载器的方法是重写findClass方法。如果想要打破双亲委派机制，只需要重写loadClass方法，去掉其中关于双亲委派的代码。</p><ol start="2"><li>JDBC案例：</li></ol><p>JDBC加载不符合双亲委派机制，首先启动类加载器加载DriverManager，在初始化DriverManager时通过SPI机制加载jar包中的myql驱动(利用了线程上下文类加载器，通过Thread.currentThread().getContextClassLoader())。<br><strong>但其实并没有打破双亲委派机制，没有重写loadClass方法。</strong></p><ol start="3"><li>Osgi框架的类加载器：</li></ol><p>历史上的OSGI框架中，自身实现了打破，自定义类加载器可以委托另一个自定义类加载器。<br> 使用alrthas实现热部署(额外知识点)：</p><ul><li>程序启动后，字节码文件会恢复，除非class文件放入jar包更新</li><li>热部署不能添加方法或字段，也不能更新正在执行的方法。</li></ul><p><strong>JDK8以后的类加载器？</strong></p><ul><li>由于JDK9引入了module的概念，类加载器的设计发生了很多变化。</li></ul><ol><li>启动类加载器使用java编写，位于jdk.internal.loader.ClassLoaders类中。JAVA中的BootClassLoader继承自BUiltinClassLoader实现从模块中找到想要加载的字节码资源文件。<strong>启动类加载器依然无法通过java代码获取，返回仍然是null。</strong></li><li>扩展类加载器被替换为平台类加载器，继承关系从URLClassLoader变成了BuiltinClassLoader，BuiltinClassLoader实现了从模块中加载字节码文件。<strong>平台类加载器的存在更多时与老版本的设计兼容，自身没有特殊逻辑。</strong></li></ol><h2 id="运行时数据区" tabindex="-1"><a class="header-anchor" href="#运行时数据区"><span>运行时数据区</span></a></h2><p>在Java虚拟机中，运行时数据区分为以下几类：</p><ul><li>线程共享：方法区，堆。(存在线程安全问题)</li><li>线程不共享：程序计数器，java虚拟机栈，本地方法区。</li></ul><ol><li><strong>程序计数器</strong>：</li></ol><p>程序计数器又叫PC寄存器，每个线程会通过程序计数器记录当前要执行的字节码指令地址。<br> 在字节码加载阶段，虚拟机会将字节文件中的指令读取到内存之后，会将源文件的偏移量转换为内存地址，每一条字节码指令都会拥有一个内存地址。在多线程执行情况下，Java虚拟机需要通过程序计数器记录CPU切换前解释执行到那一句指令并继续解释执行。</p><ol start="2"><li><strong>栈</strong>：</li></ol><p>每一个线程都会包含一个自己的虚拟机栈。栈帧包括：</p><ul><li>局部变量表：保存的内容有：实例方法的this对象，方法参数，方法体内局部变量。栈帧中的局部变量表是一个数组，每一个位置称之为槽，long和double占了，其他占一个。<strong>槽位是可以被复用的</strong></li><li>操作数栈：在执行过程中用来存放临时数据的一块区域。int i =1 + 1，就会有深度为二的临时操作数栈存两个1。</li><li>帧数据：帧数据主要包含动态链接、方法出口、异常表的引用。</li></ul><p>如果java虚拟机中栈帧过多，会产生内存溢出</p><ol start="3"><li><strong>堆</strong>：</li></ol><p>堆空间中有三个需要关注的值且线程共享：used，total和max，used是指当前已经使用的堆内存，total是java虚拟机中已经分配的可用堆内存，<br> max是java虚拟机中可以分配的最大堆内存。在服务端程序开发时，建议将total和max设置成相同的值。</p><p><strong>堆的回收</strong></p><ul><li>引用计数器法：缺点是每次引用和取消引用都需要维护计数器，而且存在循环引用问题，即使栈内存已经无法引用到堆中对象了，但计数器仍不为0。无法回收出现内存泄漏。</li><li>可达性分析： 见垃圾回收章节</li><li>几种常见的对象引用：强引用(可达性算法)、软引用、弱引用、虚引用、终结器引用。 <ul><li>软引用：当程序内存不足时，会将软引用中数据进行回收，常用于缓存中，通过new SoftReference创建软引用对象。</li><li>弱引用：类似于软引用，但总是会被回收，通过new WeakReference创建弱引用对象。一般不会使用，ThreadLocal中会使用到。</li></ul></li></ul><ol start="4"><li><strong>方法区(元数据区)</strong>：</li></ol><p>方法区存放基础信息，主要包含三个部分：类的元信息，运行时常量池和字符串常量池。</p><ul><li>类的元信息即加载阶段的InstanceKlass对象。</li><li>运行时常量池主要区别于静态常量池(磁盘中编译生成的.class文件)，他是静态常量池通过加载连接的得到的可以通过真实内存地址快速定位到常量的。在jdk7之前放在堆中的永久代，之后放在元空间。且元空间脱离jvm虚拟机上限，由操作系统管理。元空间最大大小可以限制，而且会发生内存溢出。</li><li>字符串常量池保存代码中定义的常量字符串内容，在定义字符串时可以选择加new或者不加来选择放在堆中还是字符串常量池中。而在使用加号运算字符串时因为底层用的是StringBuilder，所以会放到堆内存中，</li></ul><p>jdk7之前静态变量放在方法区中，jdk8之后放在堆中Class对象中。<br><strong>方法区的回收</strong>中，判定一个了类可以被卸载需要满足三个条件：</p><ol><li><p>类中所有实例对象都已被回收，再堆中不存在任何改类的实例对象以及子类对象。</p></li><li><p>加载该类的类加载器已被回收。</p></li><li><p>该类的java.long.Class对象没有任何地方引用。</p></li><li><p><strong>直接内存</strong>：</p></li></ol><p>直接内存的使用主要为了解决以下问题：</p><ul><li>堆中对象垃圾回收时会影响性能。</li><li>IO操作时需要把文件先读入内存，再复制到堆中。直接存内存减小了数据复制的开销。</li></ul><h2 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收"><span>垃圾回收</span></a></h2><p>在Java中，垃圾回收器（Garbage Collector）负责回收不再使用的对象。垃圾回收器是一个后台线程。</p><ol><li>可达性分析：通过一系列成为&quot;GC Roots&quot;的对象开始，通过引用链找到所有可以访问到的对象。GC ROOTS包含：</li></ol><ul><li>栈中引用的对象(线程对象)</li><li>系统类加载器加载的java.long.Class对象，launcher</li><li>监视器对象，同步锁锁持有的对象</li><li>方法区运行时常量池和静态属性(类的元信息)引用的对象</li><li>本地方法JNI引用的对象</li></ul><ol start="2"><li>回收算法：</li></ol><p><strong>标记-清除算法</strong>：产生大量内存碎片，且分配速度慢<br><strong>标记-整理算法</strong>：无内存碎片。内存使用率高，但整理阶段效率不高<br><strong>复制算法</strong>：将内存分为两块，每次只使用一块，当这一块用完，反复复制实现去除碎片。吞吐量高，只需要一次遍历，但是内存使用率低<br><strong>分代垃圾回收</strong>：分为新生代和老年代，新生代包含eden、survivor(包括from和to区)。</p><ul><li>Minor GC:也称为新生代GC，是针对新生代survivor区的垃圾回收。<strong>采用复制算法</strong>，开始全部放在伊甸区，存活下来进入form区并且年龄不断增大，from区被回收的进入to区等待下次垃圾回收，再回到from区(from和to来回互换，总比例8：1：1)。回收后进入老年区。</li><li>Full GC:也称为Major GC或老年代GC，是针对整个内存的垃圾回收。当老年代、元空间或者堆空间满时触发。当老年代空间不足是首先进行Minor GC，再不行才会使用full GC(尽管年龄不到，但是新生代不够只能放老年代)<strong>采用标记-整理算法</strong>。</li></ul><ol start="3"><li>垃圾收集器：</li></ol><ul><li><p>Serial：最基本的收集器，单线程，回收效率高，需要STW。<br><img src="'+p+'" alt="alt text" loading="lazy"></p></li><li><p>ParNew：基于Serial的并行收集器，多线程，但需要STW。适合多cpu(单cpu线程切换需要开销)<br><img src="'+g+'" alt="alt text" loading="lazy"><br><strong>老年代也能并行，别的收集器</strong></p></li><li><p>CMS：Concurrent Mark Sweep，并发标记-清除算法，分为四步：1.初始标记（仅仅标记GC ROOT关联的）--&gt;2.并发标记---&gt;3.并发清除---&gt;4.并发复制。只有初始标记和重新标记需要STW。缺点：并发清除阶段垃圾无法清除产生浮动垃圾(浮动垃圾过多时候需要采用备胎Serial)，大量垃圾碎片,退化问题。<br><img src="'+d+'" alt="alt text" loading="lazy"></p></li><li><p>G1：Garbage Fisrt，默认的垃圾收集器。化整为零，将内存化为上千个部分，采用分代回收，灵活分配，使用复制算法。<br><img src="'+c+'" alt="alt text" loading="lazy"></p></li></ul><p>总的来说：堆使用效率、吞吐量、以及最大暂停时间不可兼得。堆内存越大，最大暂停时间越长，想要减少最大暂停时间需要减低吞吐量。</p><h2 id="内存泄漏" tabindex="-1"><a class="header-anchor" href="#内存泄漏"><span>内存泄漏</span></a></h2><p>内存泄漏主要是因为引用没有及时释放，导致对象无法被回收。</p><p><strong>代码中的内存泄漏</strong></p><ol><li>没有重写equals和hashCode方法导致。</li></ol><p>比如hashMap中主键为对象的情况，如果hashCode方法没有重载，会导致相同id的学生对象计算出来的hash值不同，如果equals没有实现，会导致即使id相同也无法判定为同一对象，在长时间运行时会产生大量相同id的学生数据。</p><ol start="2"><li>引用局部内部类导致。</li></ol><p>创建内部类时，内部类会自动调用其外部类，导致其外部类无法被回收。匿名内部类对象如果是非静态创建，会持有其调用者对象，垃圾回收无法回收其调用者。解决方法是将内部类改为静态内部类。</p><ol start="3"><li>ThreadLocal的错误使用。</li></ol><p>如果仅仅使用手动创建的线程，就算没有调用TreadLocal的remove方法，也不会导致内存泄漏，因为线程被回收时，ThreadLocal同时也被回收，但是如果使用线程池就不行了。解决方案是调用remove方法及时清理对象。</p><ol start="4"><li>String的intern方法导致(内存溢出)。</li></ol><p>jdk6中字符串常量池位于堆内存永久代而不是方法区中，且他不会被清理，就会导致内存泄漏。</p><ol start="5"><li>使用静态字段保存对象。</li></ol><p>如果大量的数据在静态变量中被长期引用，数据就不会被释放，如果这些数据不在使用就会发生内存泄漏。</p><p>解决方案：</p><ul><li>不再使用将静态变量置为null。</li><li>使用单例模式时，尽量使用懒加载，而不是立即加载。</li><li>Spring的Bean中不要长期存放大对象。</li></ul><ol start="6"><li>资源没有正常关闭</li></ol><p>连接和流这些资源会占用内存，如果使用完后没有关闭，这部分内存不一定会发生内存泄漏，因为可能没使用静态变量，解决方法时在finally中关闭，或放在try代码块中。</p><p><strong>高并发产生的内存泄漏</strong></p><p>大量的并发请求或者大量积压导致。解决方案：定位到对象是由哪一个端口产生的。</p>',76))])}const v=a(m,[["render",u],["__file","JVM.html.vue"]]),j=JSON.parse('{"path":"/java%E7%AC%94%E8%AE%B0/JVM.html","title":"JVM","lang":"zh-CN","frontmatter":{"tittle":"java","icon":"pen-to-square","date":"2024-11-30T00:00:00.000Z","category":["JVM"],"timeline":true,"tag":["JVM","垃圾回收","内存泄漏"],"description":"JVM主要包含以下三大功能： 解释运行 内存管理 即时编译","head":[["meta",{"property":"og:url","content":"https://github.com/No-76/java%E7%AC%94%E8%AE%B0/JVM.html"}],["meta",{"property":"og:site_name","content":"Lzy"}],["meta",{"property":"og:title","content":"JVM"}],["meta",{"property":"og:description","content":"JVM主要包含以下三大功能： 解释运行 内存管理 即时编译"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-24T14:38:27.000Z"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:tag","content":"垃圾回收"}],["meta",{"property":"article:tag","content":"内存泄漏"}],["meta",{"property":"article:published_time","content":"2024-11-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-24T14:38:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-24T14:38:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lzy\\",\\"url\\":\\"https://github.com/No-76\\"}]}"]]},"headers":[{"level":2,"title":"类加载器","slug":"类加载器","link":"#类加载器","children":[]},{"level":2,"title":"运行时数据区","slug":"运行时数据区","link":"#运行时数据区","children":[]},{"level":2,"title":"垃圾回收","slug":"垃圾回收","link":"#垃圾回收","children":[]},{"level":2,"title":"内存泄漏","slug":"内存泄漏","link":"#内存泄漏","children":[]}],"git":{"createdTime":1732722474000,"updatedTime":1735051107000,"contributors":[{"name":"GSpotMan","email":"964600114@qq.com","commits":7}]},"readingTime":{"minutes":12.97,"words":3890},"filePathRelative":"java笔记/JVM.md","localizedDate":"2024年11月30日","excerpt":"\\n<p>JVM主要包含以下三大功能：</p>\\n<ul>\\n<li>解释运行</li>\\n<li>内存管理</li>\\n<li>即时编译</li>\\n</ul>\\n","autoDesc":true}');export{v as comp,j as data};
