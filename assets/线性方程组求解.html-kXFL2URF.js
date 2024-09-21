import{_ as a,c as e,a as s,b as i,d as l,o as p}from"./app-D2lKvT1Y.js";const t="/assets/image-DzXdnVyC.png",r="/assets/image-1-CRFzHqgT.png",d={};function c(m,n){return p(),e("div",null,[n[0]||(n[0]=s("h1",{id:"lu分解",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#lu分解"},[s("span",null,"LU分解")])],-1)),n[1]||(n[1]=s("p",null,"LU分解相较于传统的高斯消元法，虽然具有相同的时间复杂度，但是面对不同的b值并不需要像高斯消元那样多次运行。下面的代码中用一个矩阵存储L和U矩阵。",-1)),i(" more "),n[2]||(n[2]=l(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>def lu_decomposition(matrix):</span></span>
<span class="line"><span>    # 只能用于方阵</span></span>
<span class="line"><span>    if len(matrix)!=len(matrix[0]):</span></span>
<span class="line"><span>        return False</span></span>
<span class="line"><span>    n=len(matrix)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    lu_matrix = np.zeros((n,n))</span></span>
<span class="line"><span>    lu_matrix = lu_matrix.astype(float)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for i in range(n):</span></span>
<span class="line"><span>        # 计算上三角矩阵U的元素</span></span>
<span class="line"><span>        for j in range(i, n):</span></span>
<span class="line"><span>            sum = 0</span></span>
<span class="line"><span>            for k in range(i):</span></span>
<span class="line"><span>                sum += (lu_matrix[i][k] * lu_matrix[k][j])</span></span>
<span class="line"><span>            lu_matrix[i][j] = matrix[i][j] - sum</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 计算下三角矩阵L的元素</span></span>
<span class="line"><span>        for j in range(i + 1, n):</span></span>
<span class="line"><span>            sum = 0</span></span>
<span class="line"><span>            for k in range(i):</span></span>
<span class="line"><span>                sum += (lu_matrix[j][k] * lu_matrix[k][i])</span></span>
<span class="line"><span>            lu_matrix[j][i] = (matrix[j][i] - sum) / lu_matrix[i][i]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return lu_matrix</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def lu_solve(lu_matrix, b):</span></span>
<span class="line"><span>    n = len(lu_matrix)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 解下三角矩阵方程 LY = B</span></span>
<span class="line"><span>    y = np.zeros(n)</span></span>
<span class="line"><span>    for i in range(n):</span></span>
<span class="line"><span>        y[i] = b[i] - np.dot(lu_matrix[i][:i], y[:i])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 解上三角矩阵方程 UX = Y</span></span>
<span class="line"><span>    x = np.zeros(n)</span></span>
<span class="line"><span>    for i in range(n - 1, -1, -1):</span></span>
<span class="line"><span>        x[i] = (y[i] - np.dot(lu_matrix[i][i + 1:], x[i + 1:])) / lu_matrix[i][i]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return x</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="值得注意的" tabindex="-1"><a class="header-anchor" href="#值得注意的"><span>值得注意的</span></a></h2><p>numpy生成的[[ 3 1 2 11] [ 6 3 4 24] [ 3 2 5 22]] 和[[3, 1, 2, 11], [6, 3, 4, 24], [3, 2, 5, 22]]的区别：</p><p>从表面上看，这两个输入看起来非常相似，一个是通过字符串表示的二维NumPy数组，另一个是嵌套的列表。然而，实际上存在一个重要的区别，这会导致在应用高斯消元算法时得到不同的结果。</p><p>区别在于数据类型。第一个输入通过字符串表示，当使用eval()函数将其转换为NumPy数组时，数组的数据类型将是整数类型。而第二个输入是一个嵌套列表，其中的数字被默认视为整数或浮点数，具体取决于输入时的表示方式。</p><p>在高斯消元算法中，除法操作是一个关键步骤，而不同的数据类型可能会导致不同的结果。特别是在整数除法中，结果将被截断为整数部分。这可能会导致计算过程中的舍入误差，从而导致最终结果的差异。</p><h1 id="误差" tabindex="-1"><a class="header-anchor" href="#误差"><span>误差</span></a></h1><h2 id="条件数" tabindex="-1"><a class="header-anchor" href="#条件数"><span>条件数</span></a></h2><p><img src="`+t+'" alt="Alt text" loading="lazy"> 其中条件数即$cond(A)$是和最大误差放大因子一样的。其中大条件数的矩阵是<em><strong>病态的</strong></em>，这意味着方程组中两个方程的斜率相差很少，因为$A^{-1}$的无穷范数会很大。这就导致计算机在递推求解的时候会求出离真实值较大的值。<br> 几何解释如下：<br><img src="'+r+'" alt="Alt text" loading="lazy"></p>',9))])}const u=a(d,[["render",c],["__file","线性方程组求解.html.vue"]]),v=JSON.parse('{"path":"/%E8%AF%BE%E7%A8%8B%E5%AD%A6%E4%B9%A0/%E6%95%B0%E5%80%BC%E5%88%86%E6%9E%90/%E7%BA%BF%E6%80%A7%E6%96%B9%E7%A8%8B%E7%BB%84%E6%B1%82%E8%A7%A3.html","title":"LU分解","lang":"zh-CN","frontmatter":{"tittle":112,"icon":"pen-to-square","date":"2023-10-2","category":["课程学习"],"timeline":false,"tag":["LU","数值分析"],"description":"LU分解相较于传统的高斯消元法，虽然具有相同的时间复杂度，但是面对不同的b值并不需要像高斯消元那样多次运行。下面的代码中用一个矩阵存储L和U矩阵。","head":[["meta",{"property":"og:url","content":"https://GSpotMan.github.io/%E8%AF%BE%E7%A8%8B%E5%AD%A6%E4%B9%A0/%E6%95%B0%E5%80%BC%E5%88%86%E6%9E%90/%E7%BA%BF%E6%80%A7%E6%96%B9%E7%A8%8B%E7%BB%84%E6%B1%82%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"Lzy"}],["meta",{"property":"og:title","content":"LU分解"}],["meta",{"property":"og:description","content":"LU分解相较于传统的高斯消元法，虽然具有相同的时间复杂度，但是面对不同的b值并不需要像高斯消元那样多次运行。下面的代码中用一个矩阵存储L和U矩阵。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-22T08:42:49.000Z"}],["meta",{"property":"article:tag","content":"LU"}],["meta",{"property":"article:tag","content":"数值分析"}],["meta",{"property":"article:published_time","content":"2023-10-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-22T08:42:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"LU分解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-22T08:42:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lzy\\",\\"url\\":\\"https://GSpotMan.com\\"}]}"]]},"headers":[{"level":2,"title":"值得注意的","slug":"值得注意的","link":"#值得注意的","children":[]},{"level":2,"title":"条件数","slug":"条件数","link":"#条件数","children":[]}],"git":{"createdTime":1696184253000,"updatedTime":1697964169000,"contributors":[{"name":"GSpotMan","email":"964600114@qq.com","commits":5}]},"readingTime":{"minutes":2.27,"words":681},"filePathRelative":"课程学习/数值分析/线性方程组求解.md","localizedDate":"2023年10月2日","excerpt":"\\n<p>LU分解相较于传统的高斯消元法，虽然具有相同的时间复杂度，但是面对不同的b值并不需要像高斯消元那样多次运行。下面的代码中用一个矩阵存储L和U矩阵。</p>\\n","autoDesc":true}');export{u as comp,v as data};
