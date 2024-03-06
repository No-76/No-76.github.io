import{_ as s,o as a,c as t,e as p,b as n,d as o,a as e}from"./app-b1fb0b06.js";const c="/assets/image-3-e34be908.png",i="/assets/image-4-0651f7de.png",l="/assets/image-5-3e74d6bc.png",u="/assets/image-2-6e634c18.png",r={},k=n("h1",{id:"共轭梯度法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#共轭梯度法","aria-hidden":"true"},"#"),o(" 共轭梯度法")],-1),d=n("p",null,"需要注意共轭梯度法对于n为矩阵，最多只需要n步就可以迭代到最优解，后跟梯度下降进行对比。",-1),v=e('<p><img src="'+c+'" alt="Alt text" loading="lazy"><br> 在最优化课程讲到了他的证明。<br><img src="'+i+'" alt="Alt text" loading="lazy"><br><img src="'+l+'" alt="Alt text" loading="lazy"></p><p>现在解决下面问题：<br><img src="'+u+`" alt="Alt text" loading="lazy"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd


<span class="token comment"># 共轭梯度法</span>
<span class="token keyword">def</span> <span class="token function">conjugate_gradient</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x0<span class="token punctuation">,</span> tol<span class="token operator">=</span><span class="token number">1e-6</span><span class="token punctuation">,</span> max_iter<span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> x0
    r <span class="token operator">=</span> b <span class="token operator">-</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>A<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
    p <span class="token operator">=</span> r
    rsold <span class="token operator">=</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>r<span class="token punctuation">,</span> r<span class="token punctuation">)</span>

    table <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    headers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;iterations&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;x&quot;</span><span class="token punctuation">]</span>


    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>max_iter<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Ap <span class="token operator">=</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>A<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
        alpha <span class="token operator">=</span> rsold <span class="token operator">/</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>p<span class="token punctuation">,</span> Ap<span class="token punctuation">)</span>
        x <span class="token operator">=</span> x <span class="token operator">+</span> alpha <span class="token operator">*</span> p
        r <span class="token operator">=</span> r <span class="token operator">-</span> alpha <span class="token operator">*</span> Ap
        rsnew <span class="token operator">=</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>r<span class="token punctuation">,</span> r<span class="token punctuation">)</span>

        table<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> x<span class="token punctuation">]</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> np<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>rsnew<span class="token punctuation">)</span> <span class="token operator">&lt;</span> tol<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Conjugate Gradient converged in&quot;</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;iterations.&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span>

        p <span class="token operator">=</span> r <span class="token operator">+</span> <span class="token punctuation">(</span>rsnew <span class="token operator">/</span> rsold<span class="token punctuation">)</span> <span class="token operator">*</span> p
        rsold <span class="token operator">=</span> rsnew
    df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>table<span class="token punctuation">,</span> columns<span class="token operator">=</span>headers<span class="token punctuation">)</span>
    df<span class="token operator">=</span>df<span class="token punctuation">.</span>to_string<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span>

    <span class="token keyword">return</span> x

<span class="token comment"># 梯度下降法</span>
<span class="token keyword">def</span> <span class="token function">gradient_descent</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x0<span class="token punctuation">,</span> learning_rate<span class="token operator">=</span><span class="token number">0.01</span><span class="token punctuation">,</span> tol<span class="token operator">=</span><span class="token number">1e-6</span><span class="token punctuation">,</span> max_iter<span class="token operator">=</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> x0
    residual <span class="token operator">=</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>A<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token operator">-</span> b
    iter_count <span class="token operator">=</span> <span class="token number">0</span>

    table <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    headers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;iterations&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;x&quot;</span><span class="token punctuation">]</span>

    <span class="token keyword">while</span> np<span class="token punctuation">.</span>linalg<span class="token punctuation">.</span>norm<span class="token punctuation">(</span>residual<span class="token punctuation">)</span> <span class="token operator">&gt;</span> tol <span class="token keyword">and</span> iter_count <span class="token operator">&lt;</span> max_iter<span class="token punctuation">:</span>
        gradient <span class="token operator">=</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>A<span class="token punctuation">.</span>T<span class="token punctuation">,</span> residual<span class="token punctuation">)</span>
        x <span class="token operator">=</span> x <span class="token operator">-</span> learning_rate <span class="token operator">*</span> gradient
        residual <span class="token operator">=</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>A<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token operator">-</span> b
        iter_count <span class="token operator">+=</span> <span class="token number">1</span>

        table<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span>iter_count<span class="token punctuation">,</span> x<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> iter_count <span class="token operator">==</span> max_iter<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Gradient Descent did not converge within the maximum number of iterations.&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Gradient Descent converged in&quot;</span><span class="token punctuation">,</span> iter_count<span class="token punctuation">,</span> <span class="token string">&quot;iterations.&quot;</span><span class="token punctuation">)</span>

    df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>table<span class="token punctuation">,</span> columns<span class="token operator">=</span>headers<span class="token punctuation">)</span>

    result_df <span class="token operator">=</span> pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>df<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> columns<span class="token operator">=</span>headers<span class="token punctuation">)</span><span class="token punctuation">,</span> df<span class="token punctuation">.</span>tail<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reset_index<span class="token punctuation">(</span>
        drop<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    result_df <span class="token operator">=</span> result_df<span class="token punctuation">.</span>to_string<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>result_df<span class="token punctuation">)</span>


    <span class="token keyword">return</span> x


<span class="token comment"># 示例用法</span>
A <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
x0 <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Conjugate Gradient Method:&quot;</span><span class="token punctuation">)</span>
solution_cg <span class="token operator">=</span> conjugate_gradient<span class="token punctuation">(</span>A<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x0<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Solution:&quot;</span><span class="token punctuation">,</span> solution_cg<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\nGradient Descent Method:&quot;</span><span class="token punctuation">)</span>
solution_gd <span class="token operator">=</span> gradient_descent<span class="token punctuation">(</span>A<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x0<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Solution:&quot;</span><span class="token punctuation">,</span> solution_gd<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>Conjugate Gradient Method:
Conjugate Gradient converged in 3 iterations.
 iterations                                                             x
          1                [0.0, 0.5704918032786885, -1.3311475409836064]
          2  [0.5945700329433148, 0.8895452307925329, -1.315877163088341]
          3 [1.0000000000000002, 2.0000000000000004, -0.9999999999999998]
Solution: [ 1.  2. -1.]

Gradient Descent Method:
Gradient Descent converged in 3915 iterations.
iterations                                                             x
         1                                          [-0.06, 0.13, -0.38]
         2                       [-0.0848, 0.21450000000000002, -0.6509]
         3                   [-0.089082, 0.26945600000000003, -0.844955]
       ...                                                           ...
      3913  [0.9999991627289648, 1.999998575517787, -1.0000003235489727]
      3914 [0.9999991657162858, 1.9999985806002338, -1.0000003223945741]
      3915 [0.9999991686929481, 1.9999985856645468, -1.0000003212442943]
Solution: [ 0.99999917  1.99999859 -1.00000032]
</code></pre>`,4);function m(b,g){return a(),t("div",null,[k,d,p(" more "),v])}const x=s(r,[["render",m],["__file","共轭梯度法.html.vue"]]);export{x as default};
