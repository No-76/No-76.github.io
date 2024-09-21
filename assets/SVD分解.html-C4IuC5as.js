import{_ as i,c as p,d as n,a,f as e,o as l}from"./app-D2lKvT1Y.js";const r="/assets/image-B3jy06O6.png",d="/assets/image-1-CCqKkrBg.png",c="/assets/image-2-D4KdEP-5.png",t="/assets/image-4-C-nH5NLX.png",m="/assets/image-5-D5tfMXdp.png",v={};function o(u,s){return l(),p("div",null,s[0]||(s[0]=[n(`<h1 id="svd分解和pca主成分析" tabindex="-1"><a class="header-anchor" href="#svd分解和pca主成分析"><span>SVD分解和PCA主成分析</span></a></h1><p>奇异值分解（Singular Value Decomposition，简称SVD）是一种常用的矩阵分解方法，用于将一个矩阵分解为三个矩阵的乘积。SVD在许多领域中都有广泛的应用，如数据降维、图像压缩、推荐系统等。</p><h2 id="数学公式表示" tabindex="-1"><a class="header-anchor" href="#数学公式表示"><span>数学公式表示</span></a></h2><p>SVD的数学公式表示如下： 给定一个 $m×n$ 的矩阵$A$，其SVD表示为：</p><p>$$ A = U \\Sigma V^T $$</p><p>其中，$U$是一个$m \\times m$的酉矩阵，表示$AA^T$的特征向量构成的矩阵；$\\Sigma$是一个$m \\times n$的对角矩阵，表示$A$的奇异值构成的矩阵；$V$是一个$n \\times n$的酉矩阵，表示$A^TA$的特征向量构成的矩阵。</p><h2 id="几何意义" tabindex="-1"><a class="header-anchor" href="#几何意义"><span>几何意义</span></a></h2><p>$U$是一个正交矩阵，表示旋转操作；$\\Sigma$是一个对角矩阵，表示缩放操作；$V$是另一个正交矩阵，表示再旋转操作。</p><p>具体而言，SVD的几何意义可以解释如下：</p><p>$U$表示将原始空间中的向量旋转到一个新的坐标系中。这个新坐标系的基向量是$U$的列向量，它们是原始坐标系中的标准正交基向量的旋转版本。</p><p>$\\Sigma$表示在每个坐标轴上的缩放因子。$\\Sigma$的对角线上的元素称为奇异值，它们表示原始向量在每个旋转后的坐标轴上的缩放程度。奇异值按照降序排列，因此，前面的奇异值对应着更重要的特征。</p><p>$V$表示将旋转后的向量再次旋转回原始坐标系。$V$的列向量是原始坐标系中的标准正交基向量的再旋转版本。</p><p>总的来说是将一个矩阵通过旋转，拉伸，再旋转，而拉伸即用中间的奇异值矩阵进行表示。通过SVD，我们可以将一个矩阵 $A$ 表示为一系列几何操作的组合，从而揭示了原始数据的主要几何特征。SVD在降维、信号处理、图像压缩等领域中具有广泛的应用，可以提取数据的重要特征、去除噪声和冗余信息，并帮助理解数据的结构和模式。</p><h2 id="svd算法步骤" tabindex="-1"><a class="header-anchor" href="#svd算法步骤"><span>SVD算法步骤</span></a></h2><p>SVD算法的基本步骤如下：</p><ol><li>给定一个$m \\times n$的矩阵$A$，其中$m$是行数，$n$是列数。</li><li>计算$A$的转置矩阵$A<sup>T$与$A$的乘积$AA</sup>T$。</li><li>对$AA^T$进行特征值分解，得到特征值和特征向量。</li><li>计算$A<sup>T$的转置矩阵$(A</sup>T)<sup>T$与$A</sup>T$的乘积$A^TA$。</li><li>对$A^TA$进行特征值分解，得到特征值和特征向量。</li><li>根据特征值和特征向量构建奇异值矩阵$\\Sigma$。</li><li>对$A$进行奇异值分解，得到矩阵$U$、$\\Sigma$和$V$。</li></ol><h2 id="图像压缩算法实现" tabindex="-1"><a class="header-anchor" href="#图像压缩算法实现"><span>图像压缩算法实现</span></a></h2><p>这里主要使用python实现对目标图片进行压缩。通过查阅相关资料了解到可以通过使用pytorch中的svd函数进行实现， 也可以通过使用python中numpy库中线性代数相关的函数进行分解，这里选择采用第二种方式。其次这次试验要求 处理的图像为一张图像，因此转化为张量形式之后三维的，通道深度为3，分别表示红绿蓝三色。而传统的SVD分解算法 则只能处理二维矩阵形式，也就是灰度图。因此考虑到两种方法对其进行分解，一种是将3维张量reshape成2维， 在进行相关压缩之后再reshape回来。第二种方法是对3个通道分别进行SVD分解，然后再把三个通道叠加成三维张量 的形式。</p><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一"><span>方法一</span></a></h3><p>方法一将3维张量reshape成2维，在进行相关压缩之后再reshape回来，并使用pytorch中的SVD函数进行处理。 代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import numpy as np</span></span>
<span class="line"><span>import matplotlib.pyplot as plt</span></span>
<span class="line"><span>import torch</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 读取图片</span></span>
<span class="line"><span>imag = plt.imread(&#39;butterfly.bmp&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tensor_image = torch.tensor(imag)</span></span>
<span class="line"><span>reshaped_image = tensor_image.reshape(-1,437)</span></span>
<span class="line"><span>float_image = reshaped_image.float()</span></span>
<span class="line"><span>U, S, V = torch.svd(float_image)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 误差</span></span>
<span class="line"><span>errors=[]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 按照奇异值数量倒序进行图片展示，每次减少25个奇异值</span></span>
<span class="line"><span>for k in range(len(S), 0, -25):</span></span>
<span class="line"><span># 分解</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      compressed_S = np.diag(S[:k])</span></span>
<span class="line"><span>      compressed_U = U[:, :k]</span></span>
<span class="line"><span>      compressed_V= V[:k, :]</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>      # 计算</span></span>
<span class="line"><span>      reconstructed_array = np.dot(compressed_U, np.dot(compressed_S, compressed_V))</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>      # 回滚</span></span>
<span class="line"><span>      reconstructed_image_array = reconstructed_array.reshape(imag.shape)</span></span>
<span class="line"><span>      reconstructed_image = reconstructed_image_array.astype(np.uint8)</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      # 误差分析</span></span>
<span class="line"><span>      diff = imag - reconstructed_image</span></span>
<span class="line"><span>      mse = np.mean(np.square(diff))</span></span>
<span class="line"><span>      errors.append(mse)</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      # # 图片展示,如需要可以将注释打开</span></span>
<span class="line"><span>      # plt.imshow(reconstructed_image)</span></span>
<span class="line"><span>      # plt.show()</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 误差分析</span></span>
<span class="line"><span>plt.plot(range(len(S), 0, -25),errors)</span></span>
<span class="line"><span>plt.xlabel(&#39;奇异值数&#39;,fontproperties=&#39;SimHei&#39;)</span></span>
<span class="line"><span>plt.ylabel(&#39;均方误差&#39;,fontproperties=&#39;SimHei&#39;)</span></span>
<span class="line"><span>plt.show()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面分别为误差图和压缩图： <img src="`+r+`" alt="Alt text" loading="lazy"> 可以看到如果先将三维张量压缩为二维在进行SVD分解，之后再还原成三维的方法是不行的。造成这种结果的原因 可能是在将三个通道压缩成一个通道之后，奇异值所代表的特征是三个通道叠加的，在进行相关压缩之后再reshape回来后 就会出现一些错误。</p><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二"><span>方法二</span></a></h3><p>第二种方法是对3个通道分别进行SVD分解，采用的是numpy库中关于线性代数的相关函数。把三个通道拆分为R，G，B,对三个 不同的矩阵分别处理，之后再叠加，代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import numpy as np</span></span>
<span class="line"><span>import matplotlib.pyplot as plt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 读取图片</span></span>
<span class="line"><span>imag = plt.imread(&#39;butterfly.bmp&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 图片深度是3，拆分为深度1的3个矩阵分别进行分解</span></span>
<span class="line"><span>red_channel = imag[:, :, 0]</span></span>
<span class="line"><span>green_channel = imag[:, :, 1]</span></span>
<span class="line"><span>blue_channel = imag[:, :, 2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 进行分解</span></span>
<span class="line"><span>U_red, S_red, V_red = np.linalg.svd(red_channel)</span></span>
<span class="line"><span>U_green, S_green, V_green = np.linalg.svd(green_channel)</span></span>
<span class="line"><span>U_blue, S_blue, V_blue = np.linalg.svd(blue_channel)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 误差</span></span>
<span class="line"><span>errors=[]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 按照奇异值数量倒序进行图片展示，每次减少25个奇异值</span></span>
<span class="line"><span>for k in range(len(U_red), 0, -25):</span></span>
<span class="line"><span># 分解三个深度</span></span>
<span class="line"><span>compressed_S_red = np.diag(S_red[:k])</span></span>
<span class="line"><span>compressed_S_green = np.diag(S_green[:k])</span></span>
<span class="line"><span>compressed_S_blue = np.diag(S_blue[:k])</span></span>
<span class="line"><span># UV分解</span></span>
<span class="line"><span>compressed_U_red = U_red[:, :k]</span></span>
<span class="line"><span>compressed_V_red = V_red[:k, :]</span></span>
<span class="line"><span>compressed_U_green = U_green[:, :k]</span></span>
<span class="line"><span>compressed_V_green = V_green[:k, :]</span></span>
<span class="line"><span>compressed_U_blue = U_blue[:, :k]</span></span>
<span class="line"><span>compressed_V_blue = V_blue[:k, :]</span></span>
<span class="line"><span># 计算</span></span>
<span class="line"><span>compressed_red_channel = np.dot(compressed_U_red, np.dot(compressed_S_red, compressed_V_red))</span></span>
<span class="line"><span>compressed_green_channel = np.dot(compressed_U_green, np.dot(compressed_S_green, compressed_V_green))</span></span>
<span class="line"><span>compressed_blue_channel = np.dot(compressed_U_blue, np.dot(compressed_S_blue, compressed_V_blue))</span></span>
<span class="line"><span># 合并三个深度</span></span>
<span class="line"><span>compressed_imag = np.stack([compressed_red_channel, compressed_green_channel, compressed_blue_channel], axis=2)</span></span>
<span class="line"><span>compressed_imag = compressed_imag.astype(np.uint8)</span></span>
<span class="line"><span># 误差分析</span></span>
<span class="line"><span>diff = imag - compressed_imag</span></span>
<span class="line"><span>mse = np.mean(np.square(diff))</span></span>
<span class="line"><span>errors.append(mse)</span></span>
<span class="line"><span># # 图片展示,如需要可以将注释打开</span></span>
<span class="line"><span># plt.imshow(compressed_imag)</span></span>
<span class="line"><span># plt.show()</span></span>
<span class="line"><span>#误差分析</span></span>
<span class="line"><span>plt.plot(range(len(U_red), 0, -25),errors)</span></span>
<span class="line"><span>plt.xlabel(&#39;奇异值数&#39;,fontproperties=&#39;SimHei&#39;)</span></span>
<span class="line"><span>plt.ylabel(&#39;均方误差&#39;,fontproperties=&#39;SimHei&#39;)</span></span>
<span class="line"><span>plt.show()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面为第二次的误差图：</p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>该误差图是将奇异值从大到小进行排序后，依次减少25个奇异值并分析其误差画出来的 折线图，可以看出在初期减少奇异值的时候误差变化并不大，原因在于刚开始减小的是一些 数值比较小的奇异值，可以解释为这些奇异值对该图像的特征并没什么影响。</p><p>下面为第二次压缩图像： <img src="'+c+'" alt="" loading="lazy"></p><h1 id="pca主成分分析" tabindex="-1"><a class="header-anchor" href="#pca主成分分析"><span>PCA主成分分析</span></a></h1><p>主成分分析（Principal Component Analysis，简称PCA）是一种常用的数据降维和特征提取技术。它通过线性变换将原始数据投影到一个新的坐标系中，使得投影后的数据具有最大的方差。在图片压缩中，PCA可以用于降低图像的维度，从而实现图片的压缩。</p><h2 id="数学公式表示-1" tabindex="-1"><a class="header-anchor" href="#数学公式表示-1"><span>数学公式表示</span></a></h2><p>给定一个$m \\times n$的矩阵$D$，其PCA表示为：</p>',33),a("p",null,[e("$$ D=S"),a("sup",{"-1":""},"{-1}R"),e("D'~~~~~~~~~~~~D'= RSD $$")],-1),n(`<p>其中，$D&#39;$是待分析的矩阵，$R$表示对该矩阵进行旋转操作，主要目的是找到数值方差最大的作为主轴，$D$是一个对角矩阵 目的是为了对图片进行拉伸操作，$D$则为处理过后的矩阵。</p><h2 id="几何意义-1" tabindex="-1"><a class="header-anchor" href="#几何意义-1"><span>几何意义</span></a></h2><p>给定一个包含$n$个样本的数据集$\\mathbf{X}={\\mathbf{x}_1, \\mathbf{x}_2, \\ldots, \\mathbf{x}_n}$，其中每个样本$\\mathbf{x}_i$是一个$d$维向量。PCA算法的目标是找到一个$d$维的正交变换矩阵$\\mathbf{W}$，将原始数据$\\mathbf{X}$投影到新的坐标系中，使得投影后的数据具有最大的方差。</p><h2 id="图像压缩算法实现-1" tabindex="-1"><a class="header-anchor" href="#图像压缩算法实现-1"><span>图像压缩算法实现</span></a></h2><ol><li><p><strong>数据预处理：</strong> 首先，将图片转换为灰度图像。如果图片是彩色图像，可以将其转换为灰度图像，这样每个像素只有一个灰度值。然后，将每个像素的灰度值归一化到0到1的范围，以便统一数据的尺度。</p></li><li><p><strong>构建数据矩阵：</strong> 将归一化后的图片数据转换为一个数据矩阵，其中每一列代表一个样本，每一行代表一个特征（像素）。</p></li><li><p><strong>计算协方差矩阵：</strong> 对数据矩阵进行协方差计算，得到一个协方差矩阵。协方差矩阵描述了不同特征之间的相关性。</p></li><li><p><strong>特征值分解：</strong> 对协方差矩阵进行特征值分解，得到特征值和对应的特征向量。特征向量代表了原始数据在新坐标系中的投影方向，而特征值表示数据在对应特征向量方向上的方差。</p></li><li><p><strong>选择主成分：</strong> 根据特征值的大小，选择最大的几个特征值对应的特征向量作为主成分。主成分对应的特征向量表示了数据中最重要的方向。</p></li><li><p>降维： 将原始数据矩阵与选取的主成分特征向量相乘，得到降维后的数据矩阵。降维后的数据矩阵将保留了最重要的特征，同时减少了数据的维度。</p></li><li><p><strong>重构：</strong> 将降维后的数据矩阵与选取的主成分特征向量的转置相乘，得到重构后的数据矩阵。重构后的数据矩阵可以近似地还原原始数据。</p></li><li><p><strong>逆归一化：</strong> 将重构后的数据矩阵进行逆归一化，将像素值恢复到原始范围。</p></li></ol><p>通过选择合适的主成分数量，可以在保留较高图像质量的同时实现图像的压缩。通常，选择的主成分数量越少，压缩比例越高，但图像质量也会相应降低。</p><p>需要注意的是，PCA压缩是有损压缩，因为压缩后的图像无法完全恢复为原始图像。压缩比例和图像质量之间存在着权衡。</p><p>具体代码如下:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import numpy as np</span></span>
<span class="line"><span>import matplotlib.pyplot as plt</span></span>
<span class="line"><span>from sklearn.decomposition import PCA</span></span>
<span class="line"><span>from PIL import Image</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 读取图片</span></span>
<span class="line"><span>imag = plt.imread(&#39;butterfly.bmp&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>image_array = np.array(imag)</span></span>
<span class="line"><span># 将图像重塑为二维矩阵</span></span>
<span class="line"><span>reshaped_array = imag.reshape(-1, 437)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 误差</span></span>
<span class="line"><span>errors=[]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for n_components in range(437, 0, -25):</span></span>
<span class="line"><span>    # 创建PCA对象，指定要保留的主成分数量</span></span>
<span class="line"><span>    pca = PCA(n_components=n_components)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 执行PCA降维</span></span>
<span class="line"><span>    compressed_array = pca.fit_transform(reshaped_array)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 重构压缩后的数据</span></span>
<span class="line"><span>    reconstructed_array = pca.inverse_transform(compressed_array)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 将数据形状转换回图像尺寸</span></span>
<span class="line"><span>    reconstructed_image_array = reconstructed_array.reshape(imag.shape)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 将重构的数据转换回图像</span></span>
<span class="line"><span>    reconstructed_image = reconstructed_image_array.astype(np.uint8)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    reconstruction_error = np.mean(np.square(reconstructed_image - image_array))</span></span>
<span class="line"><span>    errors.append(reconstruction_error)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 图片展示，需要则打开</span></span>
<span class="line"><span>    # plt.imshow(reconstructed_image)</span></span>
<span class="line"><span>    # plt.show()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>plt.plot(range(437, 0, -25),errors)</span></span>
<span class="line"><span>plt.xlabel(&#39;保存的维数&#39;,fontproperties=&#39;SimHei&#39;)</span></span>
<span class="line"><span>plt.ylabel(&#39;均方误差&#39;,fontproperties=&#39;SimHei&#39;)</span></span>
<span class="line"><span>plt.show()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到的均方误差关于保存的维数折线关系图：</p><figure><img src="`+t+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><p>同时展示压缩后图片：<br><img src="'+m+'" alt="Alt text" loading="lazy"></p><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h1><p>从图像压缩上对比两种算法，SVD只能处理灰度图，如果想要处理彩色图片，可能需要对三个通道分别处理。 而PCA主成分分析法则可以直接通过将三维张量reshape成二维矩阵的方式进行压缩，最后再转化为三维张量 （可能不同通道之间在算法进行时没有进行相互的影响？）。 而误差上较为类似，均是在去除大量低奇异值的或成分时候造成较小的误差。</p><p>而从数学上来讲，PCA 是一种基于协方差矩阵的线性降维方法，SVD 是一种矩阵分解方法。而且SVD中的右奇异值矩阵V 就是PCA主成分的方向，所以当数据量很大的时候可以通过求SVD分解得到有奇异值矩阵V作为PCA的主成分，</p>',15)]))}const h=i(v,[["render",o],["__file","SVD分解.html.vue"]]),g=JSON.parse('{"path":"/posts/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E7%AE%97%E6%B3%95/SVD%E5%88%86%E8%A7%A3.html","title":"SVD分解和PCA主成分析","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-9-23","category":["机器学习算法"],"order":2,"tag":["svd","pca"],"description":"SVD分解和PCA主成分析 奇异值分解（Singular Value Decomposition，简称SVD）是一种常用的矩阵分解方法，用于将一个矩阵分解为三个矩阵的乘积。SVD在许多领域中都有广泛的应用，如数据降维、图像压缩、推荐系统等。 数学公式表示 SVD的数学公式表示如下： 给定一个 $m×n$ 的矩阵$A$，其SVD表示为： $$ A = U...","head":[["meta",{"property":"og:url","content":"https://GSpotMan.github.io/posts/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E7%AE%97%E6%B3%95/SVD%E5%88%86%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"Lzy"}],["meta",{"property":"og:title","content":"SVD分解和PCA主成分析"}],["meta",{"property":"og:description","content":"SVD分解和PCA主成分析 奇异值分解（Singular Value Decomposition，简称SVD）是一种常用的矩阵分解方法，用于将一个矩阵分解为三个矩阵的乘积。SVD在许多领域中都有广泛的应用，如数据降维、图像压缩、推荐系统等。 数学公式表示 SVD的数学公式表示如下： 给定一个 $m×n$ 的矩阵$A$，其SVD表示为： $$ A = U..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-09T10:08:51.000Z"}],["meta",{"property":"article:tag","content":"svd"}],["meta",{"property":"article:tag","content":"pca"}],["meta",{"property":"article:published_time","content":"2023-09-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-09T10:08:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SVD分解和PCA主成分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-09T10:08:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lzy\\",\\"url\\":\\"https://GSpotMan.com\\"}]}"]]},"headers":[{"level":2,"title":"数学公式表示","slug":"数学公式表示","link":"#数学公式表示","children":[]},{"level":2,"title":"几何意义","slug":"几何意义","link":"#几何意义","children":[]},{"level":2,"title":"SVD算法步骤","slug":"svd算法步骤","link":"#svd算法步骤","children":[]},{"level":2,"title":"图像压缩算法实现","slug":"图像压缩算法实现","link":"#图像压缩算法实现","children":[{"level":3,"title":"方法一","slug":"方法一","link":"#方法一","children":[]},{"level":3,"title":"方法二","slug":"方法二","link":"#方法二","children":[]}]},{"level":2,"title":"数学公式表示","slug":"数学公式表示-1","link":"#数学公式表示-1","children":[]},{"level":2,"title":"几何意义","slug":"几何意义-1","link":"#几何意义-1","children":[]},{"level":2,"title":"图像压缩算法实现","slug":"图像压缩算法实现-1","link":"#图像压缩算法实现-1","children":[]}],"git":{"createdTime":1695920198000,"updatedTime":1696846131000,"contributors":[{"name":"GSpotMan","email":"964600114@qq.com","commits":3}]},"readingTime":{"minutes":10.15,"words":3046},"filePathRelative":"posts/机器学习算法/SVD分解.md","localizedDate":"2023年9月23日","excerpt":"\\n<p>奇异值分解（Singular Value Decomposition，简称SVD）是一种常用的矩阵分解方法，用于将一个矩阵分解为三个矩阵的乘积。SVD在许多领域中都有广泛的应用，如数据降维、图像压缩、推荐系统等。</p>\\n<h2>数学公式表示</h2>\\n<p>SVD的数学公式表示如下：\\n给定一个 $m×n$ 的矩阵$A$，其SVD表示为：</p>\\n<p>$$\\nA = U \\\\Sigma V^T\\n$$</p>\\n<p>其中，$U$是一个$m \\\\times m$的酉矩阵，表示$AA^T$的特征向量构成的矩阵；$\\\\Sigma$是一个$m \\\\times n$的对角矩阵，表示$A$的奇异值构成的矩阵；$V$是一个$n \\\\times n$的酉矩阵，表示$A^TA$的特征向量构成的矩阵。</p>","autoDesc":true}');export{h as comp,g as data};
