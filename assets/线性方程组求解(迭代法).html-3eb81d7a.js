import{_ as s,o as a,c as t,e as p,b as n,d as o,a as e}from"./app-6cc7be11.js";const c="/assets/image3-53d725ac.png",i="/assets/image4-fef7e015.png",u={},l=n("h1",{id:"线性方程组求解-迭代法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#线性方程组求解-迭代法","aria-hidden":"true"},"#"),o(" 线性方程组求解(迭代法)")],-1),k=n("p",null,"主要介绍雅可比跌打，高斯赛德尔迭代和SOR迭代用于线性方程组求解。",-1),r=e('<figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">jacobi_iteration</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x0<span class="token punctuation">,</span> max_iterations<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span> tolerance<span class="token operator">=</span><span class="token number">1e-6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span>
    x <span class="token operator">=</span> x0<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">float</span><span class="token punctuation">)</span>
    iterations <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> k <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>max_iterations<span class="token punctuation">)</span><span class="token punctuation">:</span>
        x_new <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros_like<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
             x_new<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">,</span> <span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> x<span class="token punctuation">[</span><span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> x<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> A<span class="token punctuation">[</span>i<span class="token punctuation">,</span> i<span class="token punctuation">]</span>
             x_new<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token string">&quot;%.8f&quot;</span> <span class="token operator">%</span>x_new<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        iterations<span class="token punctuation">.</span>append<span class="token punctuation">(</span>x_new<span class="token punctuation">)</span>

        <span class="token keyword">if</span> np<span class="token punctuation">.</span>linalg<span class="token punctuation">.</span>norm<span class="token punctuation">(</span>x_new <span class="token operator">-</span> x<span class="token punctuation">,</span> <span class="token builtin">ord</span><span class="token operator">=</span>np<span class="token punctuation">.</span>inf<span class="token punctuation">)</span> <span class="token operator">&lt;</span> tolerance<span class="token punctuation">:</span>
            <span class="token keyword">return</span> x_new<span class="token punctuation">,</span> iterations
        x <span class="token operator">=</span> x_new
    <span class="token keyword">return</span> x<span class="token punctuation">,</span> iterations

<span class="token keyword">def</span> <span class="token function">gauss_seidel_iteration</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x0<span class="token punctuation">,</span> max_iterations<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span> tolerance<span class="token operator">=</span><span class="token number">1e-6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span>
    x <span class="token operator">=</span> x0<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">float</span><span class="token punctuation">)</span>
    iterations <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> k <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>max_iterations<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
            x<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">,</span> <span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> x<span class="token punctuation">[</span><span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> x<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> A<span class="token punctuation">[</span>i<span class="token punctuation">,</span> i<span class="token punctuation">]</span>
            x<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;%.8f&quot;</span> <span class="token operator">%</span> x<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        iterations<span class="token punctuation">.</span>append<span class="token punctuation">(</span>x<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> np<span class="token punctuation">.</span>linalg<span class="token punctuation">.</span>norm<span class="token punctuation">(</span>A @ x <span class="token operator">-</span> b<span class="token punctuation">,</span> <span class="token builtin">ord</span><span class="token operator">=</span>np<span class="token punctuation">.</span>inf<span class="token punctuation">)</span> <span class="token operator">&lt;</span> tolerance<span class="token punctuation">:</span>
            <span class="token keyword">return</span> x<span class="token punctuation">,</span> iterations
    <span class="token keyword">return</span> x<span class="token punctuation">,</span> iterations

<span class="token keyword">def</span> <span class="token function">sor_iteration</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x0<span class="token punctuation">,</span> omega<span class="token punctuation">,</span> max_iterations<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span> tolerance<span class="token operator">=</span><span class="token number">1e-6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span>
    x <span class="token operator">=</span> x0<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">float</span><span class="token punctuation">)</span>
    iterations <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> k <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>max_iterations<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
            x<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> omega<span class="token punctuation">)</span> <span class="token operator">*</span> x<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> omega <span class="token operator">*</span> <span class="token punctuation">(</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">,</span> <span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> x<span class="token punctuation">[</span><span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> x<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span> A<span class="token punctuation">[</span>i<span class="token punctuation">,</span> i<span class="token punctuation">]</span>
            x<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;%.8f&quot;</span> <span class="token operator">%</span> x<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        iterations<span class="token punctuation">.</span>append<span class="token punctuation">(</span>x<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> np<span class="token punctuation">.</span>linalg<span class="token punctuation">.</span>norm<span class="token punctuation">(</span>A @ x <span class="token operator">-</span> b<span class="token punctuation">,</span> <span class="token builtin">ord</span><span class="token operator">=</span>np<span class="token punctuation">.</span>inf<span class="token punctuation">)</span> <span class="token operator">&lt;</span> tolerance<span class="token punctuation">:</span>
            <span class="token keyword">return</span> x<span class="token punctuation">,</span> iterations
    <span class="token keyword">return</span> x<span class="token punctuation">,</span> iterations
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 测试</span>
A <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token builtin">float</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token builtin">float</span><span class="token punctuation">)</span>
x0 <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token builtin">float</span><span class="token punctuation">)</span>



jacobi_solution<span class="token punctuation">,</span> jacobi_iterations <span class="token operator">=</span> jacobi_iteration<span class="token punctuation">(</span>A<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x0<span class="token punctuation">)</span>
gauss_seidel_solution<span class="token punctuation">,</span> gauss_seidel_iterations <span class="token operator">=</span> gauss_seidel_iteration<span class="token punctuation">(</span>A<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x0<span class="token punctuation">)</span>
sor_solution<span class="token punctuation">,</span> sor_iterations <span class="token operator">=</span> sor_iteration<span class="token punctuation">(</span>A<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x0<span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">)</span>
sor_solution1<span class="token punctuation">,</span> sor_iterations1 <span class="token operator">=</span> sor_iteration<span class="token punctuation">(</span>A<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x0<span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span>

max_iterations <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>jacobi_iterations<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>gauss_seidel_iterations<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sor_iterations<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token builtin">len</span><span class="token punctuation">(</span>sor_iterations1<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 填充解向量，使其长度一致</span>
jacobi_iterations<span class="token punctuation">.</span>extend<span class="token punctuation">(</span><span class="token punctuation">[</span>np<span class="token punctuation">.</span>nan<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max_iterations <span class="token operator">-</span> <span class="token builtin">len</span><span class="token punctuation">(</span>jacobi_iterations<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
gauss_seidel_iterations<span class="token punctuation">.</span>extend<span class="token punctuation">(</span><span class="token punctuation">[</span>np<span class="token punctuation">.</span>nan<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max_iterations <span class="token operator">-</span> <span class="token builtin">len</span><span class="token punctuation">(</span>gauss_seidel_iterations<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
sor_iterations<span class="token punctuation">.</span>extend<span class="token punctuation">(</span><span class="token punctuation">[</span>np<span class="token punctuation">.</span>nan<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max_iterations <span class="token operator">-</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sor_iterations<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
sor_iterations1<span class="token punctuation">.</span>extend<span class="token punctuation">(</span><span class="token punctuation">[</span>np<span class="token punctuation">.</span>nan<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max_iterations <span class="token operator">-</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sor_iterations1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;Jacobi&#39;</span><span class="token punctuation">:</span> jacobi_iterations<span class="token punctuation">,</span>
        <span class="token string">&#39;Gauss-Seidel&#39;</span><span class="token punctuation">:</span> gauss_seidel_iterations<span class="token punctuation">,</span>
        <span class="token string">&#39;SOR-1.2&#39;</span><span class="token punctuation">:</span> sor_iterations<span class="token punctuation">,</span>
        <span class="token string">&#39;SOR-0.8&#39;</span><span class="token punctuation">:</span> sor_iterations1<span class="token punctuation">,</span>
       <span class="token punctuation">}</span>

df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token comment"># 对每个元素应用保留小数位数</span>

pd<span class="token punctuation">.</span>set_option<span class="token punctuation">(</span><span class="token string">&#39;display.max_columns&#39;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>index<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Iteration&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>                                           Jacobi  \\
Iteration                                           
0                      [-0.66666667, -0.125, 0.8]   
1               [-0.975, -0.40833333, 0.95833333]   
2          [-1.12222222, -0.48645833, 1.07666667]   
3          [-1.18770833, -0.53444445, 1.12173611]   
4          [-1.21872685, -0.55389757, 1.14443056]   
5           [-1.23277604, -0.5634485, 1.15452488]   
6          [-1.23932446, -0.56772822, 1.15924491]   
7          [-1.24232438, -0.56972678, 1.16141054]   
8          [-1.24371244, -0.57064318, 1.16241023]   
9          [-1.24435114, -0.57106661, 1.16287112]   
10         [-1.24464591, -0.57126167, 1.16308355]   
11         [-1.24478174, -0.57135163, 1.16318152]   
12          [-1.24484438, -0.5713931, 1.16322667]   
13          [-1.24487326, -0.57141222, 1.1632475]   
14          [-1.24488657, -0.57142103, 1.1632571]   
15          [-1.24489271, -0.5714251, 1.16326152]   
16         [-1.24489554, -0.57142697, 1.16326356]   
17          [-1.24489684, -0.57142783, 1.1632645]   
18         [-1.24489744, -0.57142823, 1.16326493]   
19                                            NaN   

                                     Gauss-Seidel  \\
Iteration                                           
0               [-0.66666667, -0.20833333, 0.975]   
1              [-1.06111111, -0.50138889, 1.1125]   
2           [-1.20462963, -0.5537037, 1.15166667]   
3           [-1.23512346, -0.5673071, 1.16048611]   
4           [-1.24259774, -0.57044624, 1.1626088]   
5          [-1.24435168, -0.57119616, 1.16310957]   
6          [-1.24476858, -0.57137346, 1.16322841]   
7          [-1.24486729, -0.57141551, 1.16325656]   
8          [-1.24489069, -0.57142548, 1.16326323]   
9          [-1.24489624, -0.57142784, 1.16326482]   
10          [-1.24489755, -0.5714284, 1.16326519]   
11                                            NaN   
12                                            NaN   
13                                            NaN   
14                                            NaN   
15                                            NaN   
16                                            NaN   
17                                            NaN   
18                                            NaN   
19                                            NaN   

                                          SOR-1.2  \\
Iteration                                           
0                           [-0.8, -0.27, 1.2168]   
1               [-1.23472, -0.646248, 1.16807232]   
2          [-1.27878413, -0.56298972, 1.16841126]   
3          [-1.23680357, -0.57344597, 1.16077764]   
4          [-1.24632873, -0.57049341, 1.16388179]   
5           [-1.24448433, -0.5717385, 1.16311712]   
6          [-1.24504538, -0.57134424, 1.16331008]   
7          [-1.24485265, -0.57145207, 1.16325112]   
8          [-1.24491075, -0.57142153, 1.16326952]   
9          [-1.24489427, -0.57143069, 1.16326409]   
10         [-1.24489906, -0.57142795, 1.16326566]   
11          [-1.24489763, -0.57142875, 1.1632652]   
12         [-1.24489805, -0.57142852, 1.16326534]   
13                                            NaN   
14                                            NaN   
15                                            NaN   
16                                            NaN   
17                                            NaN   
18                                            NaN   
19                                            NaN   

                                          SOR-0.8  
Iteration                                          
0          [-0.53333333, -0.15333333, 0.74986667]  
1          [-0.88085333, -0.36872533, 0.98990592]  
2          [-1.07180567, -0.47890682, 1.08609518]  
3          [-1.16502833, -0.52950323, 1.12834409]  
4           [-1.20843162, -0.55241263, 1.1474039]  
5          [-1.22830407, -0.56279371, 1.15605642]  
6          [-1.23735418, -0.56750544, 1.15998882]  
7          [-1.24146931, -0.56964578, 1.16177618]  
8          [-1.24333972, -0.57061836, 1.16258853]  
9          [-1.24418978, -0.57106036, 1.16295773]  
10         [-1.24457611, -0.57126123, 1.16312552]  
11         [-1.24475169, -0.57135252, 1.16320178]  
12         [-1.24483148, -0.57139401, 1.16323643]  
13         [-1.24486775, -0.57141286, 1.16325218]  
14         [-1.24488423, -0.57142143, 1.16325934]  
15          [-1.24489172, -0.57142533, 1.1632626]  
16          [-1.24489513, -0.5714271, 1.16326408]  
17          [-1.24489667, -0.5714279, 1.16326475]  
18         [-1.24489737, -0.57142827, 1.16326505]  
19         [-1.24489769, -0.57142843, 1.16326519]  
</code></pre><p><strong>总结</strong><br> 收敛速度：Gauss-Seidel&gt;SOR-1.2&gt;Jacobi&gt;SOR-0.8<br> 只对比高斯赛德尔和雅可比迭代会发现他们的代码是几乎一样的，只是高斯赛德尔会在计算中途拿出内存存储中途的数值。</p><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p><strong>定义测试用稀疏矩阵方法</strong><br> 并没有采取一些特殊的存储稀疏矩阵的方法，而是直接用numpy生成，主要考虑到numpy中有对对角线等数值初始化的函数，初始化比较方便，而对b向量的取值方法也是利用numpy生成了一个数值为1.2.3.4.5......的向量。（结果对内存的消耗是巨大的）<br><strong>对比过程</strong><br> 分别测试10，100，1000，10000，100000维矩阵。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#高斯消元</span>
<span class="token keyword">def</span> <span class="token function">gaussian_elimination</span><span class="token punctuation">(</span>matrix<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 增广矩阵</span>
    matrix <span class="token operator">=</span> np<span class="token punctuation">.</span>hstack<span class="token punctuation">(</span><span class="token punctuation">(</span>matrix<span class="token punctuation">,</span> np<span class="token punctuation">.</span>expand_dims<span class="token punctuation">(</span>b<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    rows <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span>
    columns <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    matrix <span class="token operator">=</span> matrix<span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">float</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 如果行头为0，则跟下面行交换</span>
        <span class="token keyword">if</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> i_1 <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> rows<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> matrix<span class="token punctuation">[</span>i_1<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
                    matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>i_1<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i_1<span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
                    <span class="token keyword">break</span>

        <span class="token comment"># 改行头化为1</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>columns <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">/=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span>

        <span class="token comment"># 减下去</span>
        <span class="token keyword">for</span> i_1 <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> rows<span class="token punctuation">)</span><span class="token punctuation">:</span>
            k <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i_1<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> columns<span class="token punctuation">)</span><span class="token punctuation">:</span>
                matrix<span class="token punctuation">[</span>i_1<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-=</span> k <span class="token operator">*</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>

    <span class="token comment"># 求解</span>
    k <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span>rows<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>rows <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        k<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>columns <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> rows<span class="token punctuation">)</span><span class="token punctuation">:</span>
            k<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">*</span> k<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    <span class="token keyword">return</span> k

<span class="token comment"># 重写高斯赛德尔迭代</span>
<span class="token keyword">def</span> <span class="token function">gauss_seidel_iteration</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> b<span class="token punctuation">,</span> x0<span class="token punctuation">,</span> max_iterations<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">,</span> tolerance<span class="token operator">=</span><span class="token number">1e-7</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span>
    x <span class="token operator">=</span> x0<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">float</span><span class="token punctuation">)</span>
    times<span class="token operator">=</span><span class="token number">0</span>
    <span class="token keyword">for</span> k <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>max_iterations<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
            x<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">,</span> <span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> x<span class="token punctuation">[</span><span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> x<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> A<span class="token punctuation">[</span>i<span class="token punctuation">,</span> i<span class="token punctuation">]</span>
        times<span class="token operator">+=</span><span class="token number">1</span>
        <span class="token keyword">if</span> np<span class="token punctuation">.</span>linalg<span class="token punctuation">.</span>norm<span class="token punctuation">(</span>A @ x <span class="token operator">-</span> b<span class="token punctuation">,</span><span class="token builtin">ord</span><span class="token operator">=</span>np<span class="token punctuation">.</span>inf<span class="token punctuation">)</span> <span class="token operator">&lt;</span> tolerance<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高斯迭代次数:&quot;</span><span class="token punctuation">,</span>times<span class="token punctuation">)</span>
            <span class="token keyword">return</span> x
    <span class="token keyword">return</span> x


<span class="token comment"># 初始化稀疏矩阵</span>
<span class="token keyword">def</span> <span class="token function">a_test</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    arr <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token punctuation">[</span>n<span class="token punctuation">,</span> n<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">float</span><span class="token punctuation">)</span>
    np<span class="token punctuation">.</span>fill_diagonal<span class="token punctuation">(</span>np<span class="token punctuation">.</span>flipud<span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
    np<span class="token punctuation">.</span>fill_diagonal<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    np<span class="token punctuation">.</span>fill_diagonal<span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    np<span class="token punctuation">.</span>fill_diagonal<span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    ones_vector <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">,</span>ones_vector
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>A<span class="token punctuation">,</span>b<span class="token operator">=</span>a_test<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
x0<span class="token operator">=</span>np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;10维矩阵&quot;</span><span class="token punctuation">)</span>
separator <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">80</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>separator<span class="token punctuation">)</span>

start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高斯消元结果：&quot;</span><span class="token punctuation">,</span>gaussian_elimination<span class="token punctuation">(</span>A<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
end_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高斯消元运行时间：&quot;</span><span class="token punctuation">,</span> end_time <span class="token operator">-</span> start_time<span class="token punctuation">,</span> <span class="token string">&quot;秒&quot;</span><span class="token punctuation">)</span>

separator <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">80</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>separator<span class="token punctuation">)</span>

start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高斯迭代结果：&quot;</span><span class="token punctuation">,</span> gauss_seidel_iteration<span class="token punctuation">(</span>A<span class="token punctuation">,</span>b<span class="token punctuation">,</span>x0<span class="token punctuation">)</span><span class="token punctuation">)</span>
end_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;迭代程序运行时间：&quot;</span><span class="token punctuation">,</span> end_time <span class="token operator">-</span> start_time<span class="token punctuation">,</span> <span class="token string">&quot;秒&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>10维矩阵
--------------------------------------------------------------------------------
高斯消元结果： [-0.29433495  0.42079733  0.34498178  0.67254767  1.02571074  1.25032011
  1.22332892  1.74341928  1.37392233  2.92441505]
高斯消元运行时间： 0.00101470947265625 秒
--------------------------------------------------------------------------------
高斯迭代次数: 31
高斯迭代结果： [-0.29433491  0.42079726  0.34498186  0.6725476   1.02571079  1.25032006
  1.22332898  1.74341923  1.37392238  2.92441503]
迭代程序运行时间： 0.0021147727966308594 秒
</code></pre><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>A<span class="token punctuation">,</span>b<span class="token operator">=</span>a_test<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
x0<span class="token operator">=</span>np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;100维矩阵&quot;</span><span class="token punctuation">)</span>
separator <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">80</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>separator<span class="token punctuation">)</span>

start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高斯消元结果：&quot;</span><span class="token punctuation">,</span>gaussian_elimination<span class="token punctuation">(</span>A<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
end_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高斯消元运行时间：&quot;</span><span class="token punctuation">,</span> end_time <span class="token operator">-</span> start_time<span class="token punctuation">,</span> <span class="token string">&quot;秒&quot;</span><span class="token punctuation">)</span>

separator <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">80</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>separator<span class="token punctuation">)</span>

start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高斯迭代结果：&quot;</span><span class="token punctuation">,</span> gauss_seidel_iteration<span class="token punctuation">(</span>A<span class="token punctuation">,</span>b<span class="token punctuation">,</span>x0<span class="token punctuation">)</span><span class="token punctuation">)</span>
end_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;迭代程序运行时间：&quot;</span><span class="token punctuation">,</span> end_time <span class="token operator">-</span> start_time<span class="token punctuation">,</span> <span class="token string">&quot;秒&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>100维矩阵
--------------------------------------------------------------------------------
高斯消元结果： [-4.54749355  0.30511631 -2.49263577 -0.53922446 -1.25202307 -0.54050034
 -0.5697674  -0.21965404 -0.06205108  0.19269221  0.39858753  0.62899404
  0.84711758  1.07139119  1.29258708  1.51532267  1.73728814  1.95963876
  2.18179678  2.40405111  2.62625728  2.84848752  3.07070573  3.29292996
  3.51515118  3.73737391  3.95959587  4.18181823  4.40404037  4.62626267
  4.84848477  5.07070722  5.29292901  5.51515209  5.73737257  5.95959833
  6.1818133   6.40405058  6.62624092  6.84853257  7.07059792  7.29319124
  7.51448851  7.73914296  7.95464538  8.19621856  8.36090446  8.75820842
  8.43906977 10.35319552 10.50134367  9.14277348  9.85080101  9.92571927
 10.19158893 10.40140464 10.62687444 10.84840054 11.07067967 11.29296482
 11.5151269  11.7373882  11.95958806 12.18182235 12.40403826 12.62626372
 12.84848429 13.07070735 13.29292915 13.51515159 13.73737369 13.959596
 14.18181813 14.40404049 14.62626246 14.84848518 15.0707064  15.29293063
 15.51514884 15.73737909 15.95958526 16.18183959 16.40399759 16.62634827
 16.84831353 17.07104981 17.29224352 17.51652405 17.73462555 17.96510229
 18.17077381 18.42623017 18.58156123 18.93891316 18.88658299 19.67158804
 18.72466443 21.4240309  16.24956076 28.67472867]
高斯消元运行时间： 0.1686081886291504 秒
--------------------------------------------------------------------------------
高斯迭代次数: 43
高斯迭代结果： [-4.54749352  0.30511626 -2.49263569 -0.53922455 -1.25202296 -0.54050046
 -0.56976727 -0.21965417 -0.06205096  0.19269209  0.39858765  0.62899393
  0.84711767  1.07139111  1.29258715  1.51532261  1.73728819  1.95963872
  2.18179681  2.40405108  2.6262573   2.84848751  3.07070574  3.29292995
  3.51515119  3.7373739   3.95959587  4.18181823  4.40404037  4.62626267
  4.84848477  5.07070721  5.29292901  5.51515209  5.73737258  5.95959833
  6.18181331  6.40405058  6.62624092  6.84853256  7.07059793  7.29319123
  7.51448852  7.73914295  7.95464539  8.19621855  8.36090447  8.75820841
  8.43906978 10.35319552 10.50134367  9.14277347  9.85080102  9.92571927
 10.19158894 10.40140464 10.62687445 10.84840054 11.07067968 11.29296482
 11.51512691 11.73738819 11.95958806 12.18182234 12.40403826 12.62626372
 12.8484843  13.07070735 13.29292915 13.51515159 13.73737369 13.959596
 14.18181813 14.40404049 14.62626246 14.84848518 15.07070641 15.29293062
 15.51514885 15.73737907 15.95958528 16.18183956 16.40399763 16.62634822
 16.84831359 17.07104974 17.29224359 17.51652396 17.73462564 17.96510219
 18.17077392 18.42623006 18.58156134 18.93891306 18.88658309 19.67158795
 18.7246645  21.42403084 16.24956079 28.67472866]
迭代程序运行时间： 0.014518260955810547 秒
</code></pre><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>A<span class="token punctuation">,</span>b<span class="token operator">=</span>a_test<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
x0<span class="token operator">=</span>np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;1000维矩阵&quot;</span><span class="token punctuation">)</span>
separator <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">80</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>separator<span class="token punctuation">)</span>

start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
gaussian_elimination<span class="token punctuation">(</span>A<span class="token punctuation">,</span>b<span class="token punctuation">)</span>
end_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高斯消元运行时间：&quot;</span><span class="token punctuation">,</span> end_time <span class="token operator">-</span> start_time<span class="token punctuation">,</span> <span class="token string">&quot;秒&quot;</span><span class="token punctuation">)</span>

separator <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">80</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>separator<span class="token punctuation">)</span>

start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
gauss_seidel_iteration<span class="token punctuation">(</span>A<span class="token punctuation">,</span>b<span class="token punctuation">,</span>x0<span class="token punctuation">)</span>
end_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;迭代程序运行时间：&quot;</span><span class="token punctuation">,</span> end_time <span class="token operator">-</span> start_time<span class="token punctuation">,</span> <span class="token string">&quot;秒&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>1000维矩阵
--------------------------------------------------------------------------------
高斯消元运行时间： 167.5573434829712 秒
--------------------------------------------------------------------------------
高斯迭代次数: 49
迭代程序运行时间： 0.21146845817565918 秒
</code></pre><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>A<span class="token punctuation">,</span>b<span class="token operator">=</span>a_test<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>
x0<span class="token operator">=</span>np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;10000维矩阵&quot;</span><span class="token punctuation">)</span>
separator <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">80</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>separator<span class="token punctuation">)</span>


<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高斯消元运行时间：G了&quot;</span><span class="token punctuation">)</span>

separator <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">80</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>separator<span class="token punctuation">)</span>

start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高斯迭代结果：&quot;</span><span class="token punctuation">,</span> gauss_seidel_iteration<span class="token punctuation">(</span>A<span class="token punctuation">,</span>b<span class="token punctuation">,</span>x0<span class="token punctuation">)</span><span class="token punctuation">)</span>
end_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;迭代程序运行时间：&quot;</span><span class="token punctuation">,</span> end_time <span class="token operator">-</span> start_time<span class="token punctuation">,</span> <span class="token string">&quot;秒&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>10000维矩阵
--------------------------------------------------------------------------------
高斯消元运行时间：G了
--------------------------------------------------------------------------------
高斯迭代次数: 56
高斯迭代结果： [-472.074089    -13.35179958 -312.16683475 ... 2186.74983181 1652.59264494
 2861.14813319]
迭代程序运行时间： 5.981794118881226 秒
</code></pre><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
A<span class="token punctuation">,</span>b<span class="token operator">=</span>a_test<span class="token punctuation">(</span><span class="token number">100000</span><span class="token punctuation">)</span>
x0<span class="token operator">=</span>np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token number">100000</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;100000维矩阵&quot;</span><span class="token punctuation">)</span>
separator <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">80</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>separator<span class="token punctuation">)</span>


<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高斯消元运行时间：G了&quot;</span><span class="token punctuation">)</span>

separator <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">80</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>separator<span class="token punctuation">)</span>

start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;高斯迭代结果：&quot;</span><span class="token punctuation">,</span> gauss_seidel_iteration<span class="token punctuation">(</span>A<span class="token punctuation">,</span>b<span class="token punctuation">,</span>x0<span class="token punctuation">)</span><span class="token punctuation">)</span>
end_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;迭代程序运行时间：&quot;</span><span class="token punctuation">,</span> end_time <span class="token operator">-</span> start_time<span class="token punctuation">,</span> <span class="token string">&quot;秒&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>---------------------------------------------------------------------------

MemoryError                               Traceback (most recent call last)

Cell In[36], line 1
----&gt; 1 A,b=a_test(100000)
      2 x0=np.zeros(100000)
      4 print(&quot;100000维矩阵&quot;)


Cell In[11], line 52, in a_test(n)
     51 def a_test(n):
---&gt; 52     arr = np.zeros([n, n], float)
     53     np.fill_diagonal(np.flipud(arr), 0.5)
     54     np.fill_diagonal(arr, 3)


MemoryError: Unable to allocate 74.5 GiB for an array with shape (100000, 100000) and data type float64
</code></pre><p>通过比较可以发现高斯赛德尔迭代是一个很好的方法，但是当我处理十万维的稀疏矩阵时候，报内存溢出错误，需要70个g的内存。<br><strong>解决方法</strong><br> 使用稀疏矩阵，可以考虑使用稀疏矩阵表示形式，如 scipy.sparse 模块中的稀疏矩阵类型。scipy.sparse 模块提供了多种稀疏矩阵的存储格式，可以使用其中的cooc格式，使用三个数组分别存储非零元素的行索引、列索引和对应的数值。</p>`,20);function d(m,v){return a(),t("div",null,[l,k,p(" more "),r])}const _=s(u,[["render",d],["__file","线性方程组求解(迭代法).html.vue"]]);export{_ as default};
