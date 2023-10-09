const t=JSON.parse('{"key":"v-a481784a","path":"/posts/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E7%AE%97%E6%B3%95/SVD%E5%88%86%E8%A7%A3.html","title":"SVD分解和PCA主成分析","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-9-23","category":["机器学习算法"],"order":2,"tag":["svd","pca"],"description":"SVD分解和PCA主成分析 奇异值分解（Singular Value Decomposition，简称SVD）是一种常用的矩阵分解方法，用于将一个矩阵分解为三个矩阵的乘积。SVD在许多领域中都有广泛的应用，如数据降维、图像压缩、推荐系统等。 数学公式表示 SVD的数学公式表示如下： 给定一个 m×nm×nm×n 的矩阵AAA，其SVD表示为：","head":[["meta",{"property":"og:url","content":"https://GSpotMan.github.io/posts/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E7%AE%97%E6%B3%95/SVD%E5%88%86%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"Lzy"}],["meta",{"property":"og:title","content":"SVD分解和PCA主成分析"}],["meta",{"property":"og:description","content":"SVD分解和PCA主成分析 奇异值分解（Singular Value Decomposition，简称SVD）是一种常用的矩阵分解方法，用于将一个矩阵分解为三个矩阵的乘积。SVD在许多领域中都有广泛的应用，如数据降维、图像压缩、推荐系统等。 数学公式表示 SVD的数学公式表示如下： 给定一个 m×nm×nm×n 的矩阵AAA，其SVD表示为："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-09T10:08:51.000Z"}],["meta",{"property":"article:author","content":"Lzy"}],["meta",{"property":"article:tag","content":"svd"}],["meta",{"property":"article:tag","content":"pca"}],["meta",{"property":"article:published_time","content":"2023-09-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-09T10:08:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SVD分解和PCA主成分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-09T10:08:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lzy\\",\\"url\\":\\"https://GSpotMan.com\\"}]}"]]},"headers":[{"level":2,"title":"数学公式表示","slug":"数学公式表示","link":"#数学公式表示","children":[]},{"level":2,"title":"几何意义","slug":"几何意义","link":"#几何意义","children":[]},{"level":2,"title":"SVD算法步骤","slug":"svd算法步骤","link":"#svd算法步骤","children":[]},{"level":2,"title":"图像压缩算法实现","slug":"图像压缩算法实现","link":"#图像压缩算法实现","children":[{"level":3,"title":"方法一","slug":"方法一","link":"#方法一","children":[]},{"level":3,"title":"方法二","slug":"方法二","link":"#方法二","children":[]}]},{"level":2,"title":"数学公式表示","slug":"数学公式表示-1","link":"#数学公式表示-1","children":[]},{"level":2,"title":"几何意义","slug":"几何意义-1","link":"#几何意义-1","children":[]},{"level":2,"title":"图像压缩算法实现","slug":"图像压缩算法实现-1","link":"#图像压缩算法实现-1","children":[]}],"git":{"createdTime":1695920198000,"updatedTime":1696846131000,"contributors":[{"name":"GSpotMan","email":"964600114@qq.com","commits":3}]},"readingTime":{"minutes":10.15,"words":3046},"filePathRelative":"posts/机器学习算法/SVD分解.md","localizedDate":"2023年9月23日","excerpt":"<h1> SVD分解和PCA主成分析</h1>\\n<p>奇异值分解（Singular Value Decomposition，简称SVD）是一种常用的矩阵分解方法，用于将一个矩阵分解为三个矩阵的乘积。SVD在许多领域中都有广泛的应用，如数据降维、图像压缩、推荐系统等。</p>\\n<h2> 数学公式表示</h2>\\n<p>SVD的数学公式表示如下：<br>\\n给定一个 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>m</mi><mo>×</mo><mi>n</mi></mrow><annotation encoding=\\"application/x-tex\\">m×n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6667em;vertical-align:-0.0833em;\\"></span><span class=\\"mord mathnormal\\">m</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">×</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4306em;\\"></span><span class=\\"mord mathnormal\\">n</span></span></span></span> 的矩阵<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\\"application/x-tex\\">A</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\">A</span></span></span></span>，其SVD表示为：</p>","autoDesc":true}');export{t as data};
