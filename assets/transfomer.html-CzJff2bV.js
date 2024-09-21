import{_ as t,c as n,a,b as e,d as p,o as m}from"./app-BYgVWJxn.js";const l="/assets/image-HwZbu09f.png",i="/assets/image-1-7-lk_VIW.png",r="/assets/image-2-BZhGKnPG.png",c={};function o(g,s){return m(),n("div",null,[s[0]||(s[0]=a("h1",{id:"transformer",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#transformer"},[a("span",null,"Transformer")])],-1)),s[1]||(s[1]=a("p",null,"本文从相关知识开始逐步讲解transformer",-1)),e(" more "),s[2]||(s[2]=p('<h2 id="相关知识" tabindex="-1"><a class="header-anchor" href="#相关知识"><span>相关知识</span></a></h2><p>本章节主要介绍编码器与解码器，注意力机制的起源，也是transformer论文的灵感来源。</p><h3 id="编码器与解码器" tabindex="-1"><a class="header-anchor" href="#编码器与解码器"><span>编码器与解码器</span></a></h3><p>编码器-解码器（Encoder-Decoder）架构在不同的领域和任务中有不同的首次提及。在自然语言处理领域，特别是在序列到序列（seq2seq）模型中，这种架构被广泛应用于机器翻译等任务。而在计算机视觉领域，如<strong>图像分割</strong>任务中，SegNet是最早提出并使用编码器-解码器架构的网络之一，其论文为《SegNet: A Deep Convolutional Encoder-Decoder Architecture for Image Segmentation》。<br><img src="'+l+'" alt="alt text" loading="lazy"><br> 最初的编码器解码器使用的是基于cnn的结构，并用于图像分割，SegNet 的核心是一个编码器网络，它与 VGG16 网络的前 13 个卷积层在拓扑上是相同的，以及一个相应的解码器网络，其作用是将低分辨率的编码器特征图映射回原始输入分辨率的特征图，以便进行像素级的分类。SegNet 的创新之处在于解码器上采样低分辨率输入特征图的方式，它使用编码器最大池化步骤中计算的池化索引来执行<strong>非线性上采样</strong>，从而消除了上采样的学习需求。</p><h3 id="注意力机制" tabindex="-1"><a class="header-anchor" href="#注意力机制"><span>注意力机制</span></a></h3><p>Transformer原文中在介绍注意力机制的部分有下面这句话：</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那么所谓的相加性质的注意力函数到底是怎么回事呢？在NLP相关论文对齐翻译NEURAL MACHINE TRANSLATION BY JOINTLY LEARNING TO ALIGN AND TRANSLATE中首次提到这种注意力函数，论文首次提出了一种新的神经机器翻译方法。这种方法的核心思想是，不同于传统的编码器-解码器模型将整个源句子编码成一个固定长度的向量，该方法允许模型在生成目标词汇时，自动地（软搜索）寻找与预测目标词最相关的源句子部分，而不必显式地将这些部分形成硬片段。<br><img src="'+r+'" alt="" width="300" height="500" loading="lazy"><br> 上图为该论文中所使用方法模型的示意图，本文中将使用自顶向下的方法由解码器开始来解读。</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>p</mi><mo stretchy="false">(</mo><msub><mi>y</mi><mi>i</mi></msub><mo>∣</mo><msub><mi>y</mi><mn>1</mn></msub><mo separator="true">,</mo><mo>⋯</mo><mtext> </mtext><mo separator="true">,</mo><msub><mi>y</mi><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow></msub><mo separator="true">,</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>g</mi><mo stretchy="false">(</mo><msub><mi>y</mi><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow></msub><mo separator="true">,</mo><msub><mi>s</mi><mi>i</mi></msub><mo separator="true">,</mo><msub><mi>c</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex"> p(y_{i} \\mid y_{1}, \\cdots, y_{i-1}, x) = g(y_{i-1}, s_{i}, c_{i}) </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∣</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></span></p><p>是的是的</p>',10))])}const d=t(c,[["render",o],["__file","transfomer.html.vue"]]),y=JSON.parse('{"path":"/%E8%AE%BA%E6%96%87%E5%AD%A6%E4%B9%A0/transfomer.html","title":"Transformer","lang":"zh-CN","frontmatter":{"tittle":"函数","star":true,"icon":"pen-to-square","date":"2024-9-18","category":["算法笔记"],"timeline":false,"watermark":{"width":200,"height":200,"content":"uestc-lzy","opacity":0.5},"tag":["论文","注意力机制","编码器解码器"],"description":"本文从相关知识开始逐步讲解transformer","head":[["meta",{"property":"og:url","content":"https://GSpotMan.github.io/%E8%AE%BA%E6%96%87%E5%AD%A6%E4%B9%A0/transfomer.html"}],["meta",{"property":"og:site_name","content":"Lzy"}],["meta",{"property":"og:title","content":"Transformer"}],["meta",{"property":"og:description","content":"本文从相关知识开始逐步讲解transformer"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-21T09:13:32.000Z"}],["meta",{"property":"article:tag","content":"论文"}],["meta",{"property":"article:tag","content":"注意力机制"}],["meta",{"property":"article:tag","content":"编码器解码器"}],["meta",{"property":"article:published_time","content":"2024-09-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-21T09:13:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Transformer\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-21T09:13:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lzy\\",\\"url\\":\\"https://GSpotMan.com\\"}]}"]]},"headers":[{"level":2,"title":"相关知识","slug":"相关知识","link":"#相关知识","children":[{"level":3,"title":"编码器与解码器","slug":"编码器与解码器","link":"#编码器与解码器","children":[]},{"level":3,"title":"注意力机制","slug":"注意力机制","link":"#注意力机制","children":[]}]}],"git":{"createdTime":1726910012000,"updatedTime":1726910012000,"contributors":[{"name":"GSpotMan","email":"964600114@qq.com","commits":1}]},"readingTime":{"minutes":2.23,"words":668},"filePathRelative":"论文学习/transfomer.md","localizedDate":"2024年9月18日","excerpt":"\\n<p>本文从相关知识开始逐步讲解transformer</p>\\n","autoDesc":true}');export{d as comp,y as data};
