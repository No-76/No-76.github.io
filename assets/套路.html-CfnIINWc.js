import{_ as n,c as t,a,b as i,e,o as l}from"./app-d_aGmDAs.js";const p={};function m(h,s){return l(),t("div",null,[s[0]||(s[0]=a("h1",{id:"套路",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#套路"},[a("span",null,"套路")])],-1)),s[1]||(s[1]=a("p",null,"记录一些刷leetcode时候没想到的一些套路。",-1)),i(" more "),s[2]||(s[2]=e(`<ul><li>根据数据量设计算法，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn><msup><mn>0</mn><mn>5</mn></msup></mrow><annotation encoding="application/x-tex">10^5</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span>一般考虑复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mi>l</mi><mi>o</mi><mi>g</mi><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(nlogn)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn><msup><mn>0</mn><mn>3</mn></msup></mrow><annotation encoding="application/x-tex">10^3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span></span></span></span>一般考虑复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>，500往一般考虑<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><msup><mi>n</mi><mn>3</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n^3)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>。</li><li>字符串相关，可以考虑使用字典或者hash set相关数据结构，设长度为27。</li><li>字符串子序列长度相关，滑动窗口。滑动窗口：</li></ul><ol><li>双指针</li><li>定长集合</li></ol><ul><li>状态相关，可以用几个数字代表不同状态。（二叉树摄像头问题）</li><li>树形dp相关，可以用数组记录递归过程中结果。（打家劫舍3）</li><li>循环数组相关</li></ul><ol><li>可以拼接，擅长使用nums[i%size]。</li><li>不考虑头尾。</li><li>反复反转。</li></ol><ul><li>数组子序列有关常用递推关系式dp[i][j] = max(dp[i+1][j],dp[i][j-1])</li><li>数组求当前元素后更大或更小元素，可以使用单调栈减轻一个时间复杂度：</li></ul><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(nums)):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            while</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(stack)</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> and</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums[i] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nums[stack[</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]]:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                answer[stack[</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]] </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> stack[</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                stack.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">pop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            stack.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(i)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>基于数组当前元素寻找两边比他大或者比他小的元素可以采取<strong>单调栈</strong>。数组头尾可以加0</li><li>一个数组根据某个规则抽取元素构成数组的数组的问题，可以考虑使用字典数据结构将相同规则的放在一个key里。</li><li>发糖果问题考虑正反两次遍历</li><li>矩阵问题 <ul><li>数独问题用3哈希</li><li>螺旋矩阵用四边界</li><li>旋转矩阵，分为↖↗↙↘四块旋转</li><li>生命游戏，防止别的数据污染，暂时把位置数据改为无法识别的数据。</li></ul></li></ul>`,7))])}const o=n(p,[["render",m],["__file","套路.html.vue"]]),c=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95%E7%AC%94%E8%AE%B0/%E5%A5%97%E8%B7%AF.html","title":"套路","lang":"zh-CN","frontmatter":{"tittle":"套路","icon":"pen-to-square","date":"2024-10-13T00:00:00.000Z","category":["算法笔记"],"timeline":true,"tag":["算法"],"description":"记录一些刷leetcode时候没想到的一些套路。","head":[["meta",{"property":"og:url","content":"https://github.com/No-76/%E7%AE%97%E6%B3%95%E7%AC%94%E8%AE%B0/%E5%A5%97%E8%B7%AF.html"}],["meta",{"property":"og:site_name","content":"Lzy"}],["meta",{"property":"og:title","content":"套路"}],["meta",{"property":"og:description","content":"记录一些刷leetcode时候没想到的一些套路。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-31T12:55:58.000Z"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:published_time","content":"2024-10-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-31T12:55:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"套路\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-31T12:55:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lzy\\",\\"url\\":\\"https://github.com/No-76\\"}]}"]]},"headers":[],"git":{"createdTime":1728892217000,"updatedTime":1730379358000,"contributors":[{"name":"GSpotMan","email":"964600114@qq.com","commits":4}]},"readingTime":{"minutes":1.52,"words":456},"filePathRelative":"算法笔记/套路.md","localizedDate":"2024年10月13日","excerpt":"\\n<p>记录一些刷leetcode时候没想到的一些套路。</p>\\n","autoDesc":true}');export{o as comp,c as data};
