import{_ as n,o as s,c as a,e as p}from"./app-bb29081e.js";const t="/assets/gn-cf109a9b.png",o="/assets/gn2-9a43660f.png",e={},c=p('<h1 id="googlenet" tabindex="-1"><a class="header-anchor" href="#googlenet" aria-hidden="true">#</a> GoogLeNet</h1><p>从LeNet-5开始，卷积神经网络(CNN)通常具有标准结构——堆叠的卷积层(可选的是对比度归一化和maxpooling)之后是一个或多个全连接层。这种基本设计的变体在图像分类文献中很普遍，并且在MNIST, CIFAR以及最值得注意的ImageNet分类挑战上产生了迄今为止最好的结果。对于较大的数据集，如Imagenet，最近的趋势是增加层数和层大小，同时使用dropout来解决过拟合问题。<br> GoogLeNet是Google在2014年提出的一种深度卷积神经网络架构，它在当时的图像分类任务中取得了很好的效果，并且引起了广泛的关注。它的全名是Inception-v1，因为它的设计思想基于一种称为&quot;Inception module&quot;的模块化结构。 它很好的解决了卷积网络层数深，数据量大的问题。</p><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2><p>1.GoogLeNet的主要贡献是引入了Inception模块，<strong>用密集的模块来近似出局部最优稀疏结构</strong>。根据赫布法则的思想，采用稀疏连接的方式。（像LeNet）</p><p>2.采用类似于赫布法则思想，感受野不断增大，卷积核不断增大，由1×1到3×3再到5×5。模型越深3×3再到5×5越多。</p><p>3.用global average pooling全局平均池化代替全连接层的展平操作，依然采用dropout。大大减少了数据量。甚至还增加了top-1准确率，防止过拟合。</p><p>4.增加了两个辅助分类器，辅助分类器在中间层添加，并与全连接层的输出一起用于计算损失函数和进行梯度更新，以提供额外的梯度信号和正则化效果。</p><h2 id="模型结构" tabindex="-1"><a class="header-anchor" href="#模型结构" aria-hidden="true">#</a> 模型结构</h2><p>1.输入层：接受输入图像。</p><p>2.卷积层：使用多个卷积核对输入图像进行特征提取，并将提取的特征映射传递给后续的网络层。</p><p>3.Inception模块：是GoogLeNet的核心组件，由多个并行的卷积层和池化层组成，以捕获不同尺度和抽象级别的特征。每个Inception模块由四个分支组成：</p><p>·1x1卷积分支：使用1x1卷积核进行特征提取。<br> ·3x3卷积分支：使用3x3卷积核进行特征提取。<br> ·5x5卷积分支：使用5x5卷积核进行特征提取。<br> ·最大池化分支：使用最大池化操作提取特征。</p><p>这些分支的输出在通道维度上被级联，并作为下一层的输入。Inception模块通过逐层堆叠多次使用，以增加网络的深度和宽度，提高特征提取能力。此外，GoogLeNet还通过使用辅助分类器（Auxiliary Classifier）来帮助网络在训练过程中更好地学习特征表示。辅助分类器在中间层添加，并与全连接层的输出一起用于计算损失函数和进行梯度更新，以提供额外的梯度信号和正则化效果。（反向传播时如果有一层求导为0，链式求导结果则为0）</p><p>4.全局平均池化层：对特征图进行全局平均池化操作，将每个特征图的平均值作为特征向量。</p><p>5.全连接层：将全局平均池化层的输出连接到一个或多个全连接层，用于最终的分类任务。</p><p>6.Softmax层：对全连接层的输出进行Softmax激活，将其转化为表示概率的预测结果。</p><p><img src="'+t+'" alt="Alt text" loading="lazy"><br> 上图为一个inception模块，右图改进方法中先用1×1降维减少了数据量。</p><figure><img src="'+o+`" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch
<span class="token keyword">import</span> torch<span class="token punctuation">.</span>nn <span class="token keyword">as</span> nn
<span class="token keyword">import</span> torch<span class="token punctuation">.</span>nn<span class="token punctuation">.</span>functional <span class="token keyword">as</span> F

<span class="token keyword">class</span> <span class="token class-name">InceptionModule</span><span class="token punctuation">(</span>nn<span class="token punctuation">.</span>Module<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> in_channels<span class="token punctuation">,</span> out_channels_1x1<span class="token punctuation">,</span> out_channels_3x3_reduce<span class="token punctuation">,</span> out_channels_3x3<span class="token punctuation">,</span> out_channels_5x5_reduce<span class="token punctuation">,</span> out_channels_5x5<span class="token punctuation">,</span> out_channels_pool<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>InceptionModule<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 1x1卷积分支</span>
        self<span class="token punctuation">.</span>conv1x1 <span class="token operator">=</span> nn<span class="token punctuation">.</span>Conv2d<span class="token punctuation">(</span>in_channels<span class="token punctuation">,</span> out_channels_1x1<span class="token punctuation">,</span> kernel_size<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token comment"># 3x3卷积分支</span>
        self<span class="token punctuation">.</span>conv3x3_reduce <span class="token operator">=</span> nn<span class="token punctuation">.</span>Conv2d<span class="token punctuation">(</span>in_channels<span class="token punctuation">,</span> out_channels_3x3_reduce<span class="token punctuation">,</span> kernel_size<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>conv3x3 <span class="token operator">=</span> nn<span class="token punctuation">.</span>Conv2d<span class="token punctuation">(</span>out_channels_3x3_reduce<span class="token punctuation">,</span> out_channels_3x3<span class="token punctuation">,</span> kernel_size<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token comment"># 5x5卷积分支</span>
        self<span class="token punctuation">.</span>conv5x5_reduce <span class="token operator">=</span> nn<span class="token punctuation">.</span>Conv2d<span class="token punctuation">(</span>in_channels<span class="token punctuation">,</span> out_channels_5x5_reduce<span class="token punctuation">,</span> kernel_size<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>conv5x5 <span class="token operator">=</span> nn<span class="token punctuation">.</span>Conv2d<span class="token punctuation">(</span>out_channels_5x5_reduce<span class="token punctuation">,</span> out_channels_5x5<span class="token punctuation">,</span> kernel_size<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>

        <span class="token comment"># 最大池化分支</span>
        self<span class="token punctuation">.</span>maxpool <span class="token operator">=</span> nn<span class="token punctuation">.</span>MaxPool2d<span class="token punctuation">(</span>kernel_size<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> stride<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>conv_pool <span class="token operator">=</span> nn<span class="token punctuation">.</span>Conv2d<span class="token punctuation">(</span>in_channels<span class="token punctuation">,</span> out_channels_pool<span class="token punctuation">,</span> kernel_size<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">forward</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        out1x1 <span class="token operator">=</span> F<span class="token punctuation">.</span>relu<span class="token punctuation">(</span>self<span class="token punctuation">.</span>conv1x1<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
        out3x3 <span class="token operator">=</span> F<span class="token punctuation">.</span>relu<span class="token punctuation">(</span>self<span class="token punctuation">.</span>conv3x3<span class="token punctuation">(</span>F<span class="token punctuation">.</span>relu<span class="token punctuation">(</span>self<span class="token punctuation">.</span>conv3x3_reduce<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        out5x5 <span class="token operator">=</span> F<span class="token punctuation">.</span>relu<span class="token punctuation">(</span>self<span class="token punctuation">.</span>conv5x5<span class="token punctuation">(</span>F<span class="token punctuation">.</span>relu<span class="token punctuation">(</span>self<span class="token punctuation">.</span>conv5x5_reduce<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        outpool <span class="token operator">=</span> F<span class="token punctuation">.</span>relu<span class="token punctuation">(</span>self<span class="token punctuation">.</span>conv_pool<span class="token punctuation">(</span>self<span class="token punctuation">.</span>maxpool<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        outputs <span class="token operator">=</span> <span class="token punctuation">[</span>out1x1<span class="token punctuation">,</span> out3x3<span class="token punctuation">,</span> out5x5<span class="token punctuation">,</span> outpool<span class="token punctuation">]</span>
        <span class="token keyword">return</span> torch<span class="token punctuation">.</span>cat<span class="token punctuation">(</span>outputs<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">GoogLeNet</span><span class="token punctuation">(</span>nn<span class="token punctuation">.</span>Module<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> num_classes<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>GoogLeNet<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>conv1 <span class="token operator">=</span> nn<span class="token punctuation">.</span>Conv2d<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> kernel_size<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">,</span> stride<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>maxpool1 <span class="token operator">=</span> nn<span class="token punctuation">.</span>MaxPool2d<span class="token punctuation">(</span>kernel_size<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> stride<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>conv2 <span class="token operator">=</span> nn<span class="token punctuation">.</span>Conv2d<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">192</span><span class="token punctuation">,</span> kernel_size<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> stride<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>maxpool2 <span class="token operator">=</span> nn<span class="token punctuation">.</span>MaxPool2d<span class="token punctuation">(</span>kernel_size<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> stride<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token comment"># Inception模块</span>
        self<span class="token punctuation">.</span>inception3a <span class="token operator">=</span> InceptionModule<span class="token punctuation">(</span><span class="token number">192</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">96</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>inception3b <span class="token operator">=</span> InceptionModule<span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">192</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">96</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>maxpool3 <span class="token operator">=</span> nn<span class="token punctuation">.</span>MaxPool2d<span class="token punctuation">(</span>kernel_size<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> stride<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>inception4a <span class="token operator">=</span> InceptionModule<span class="token punctuation">(</span><span class="token number">480</span><span class="token punctuation">,</span> <span class="token number">192</span><span class="token punctuation">,</span> <span class="token number">96</span><span class="token punctuation">,</span> <span class="token number">208</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>inception4b <span class="token operator">=</span> InceptionModule<span class="token punctuation">(</span><span class="token number">512</span><span class="token punctuation">,</span> <span class="token number">160</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>inception4c <span class="token operator">=</span> InceptionModule<span class="token punctuation">(</span><span class="token number">512</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">256</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>inception4d <span class="token operator">=</span> InceptionModule<span class="token punctuation">(</span><span class="token number">512</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token number">144</span><span class="token punctuation">,</span> <span class="token number">288</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>inception4e <span class="token operator">=</span> InceptionModule<span class="token punctuation">(</span><span class="token number">528</span><span class="token punctuation">,</span> <span class="token number">256</span><span class="token punctuation">,</span> <span class="token number">160</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>maxpool4 <span class="token operator">=</span> nn<span class="token punctuation">.</span>MaxPool2d<span class="token punctuation">(</span>kernel_size<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> stride<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>inception5a <span class="token operator">=</span> InceptionModule<span class="token punctuation">(</span><span class="token number">832</span><span class="token punctuation">,</span> <span class="token number">256</span><span class="token punctuation">,</span> <span class="token number">160</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>inception5b <span class="token operator">=</span> InceptionModule<span class="token punctuation">(</span><span class="token number">832</span><span class="token punctuation">,</span> <span class="token number">384</span><span class="token punctuation">,</span> <span class="token number">192</span><span class="token punctuation">,</span> <span class="token number">384</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>avgpool <span class="token operator">=</span> nn<span class="token punctuation">.</span>AdaptiveAvgPool2d<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>dropout <span class="token operator">=</span> nn<span class="token punctuation">.</span>Dropout<span class="token punctuation">(</span>p<span class="token operator">=</span><span class="token number">0.4</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>fc <span class="token operator">=</span> nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">,</span> num_classes<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">forward</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        out <span class="token operator">=</span> F<span class="token punctuation">.</span>relu<span class="token punctuation">(</span>self<span class="token punctuation">.</span>conv1<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
        out <span class="token operator">=</span> self<span class="token punctuation">.</span>maxpool1<span class="token punctuation">(</span>out<span class="token punctuation">)</span>
        out <span class="token operator">=</span> F<span class="token punctuation">.</span>relu<span class="token punctuation">(</span>self<span class="token punctuation">.</span>conv2<span class="token punctuation">(</span>out<span class="token punctuation">)</span><span class="token punctuation">)</span>
        out <span class="token operator">=</span> self<span class="token punctuation">.</span>maxpool2<span class="token punctuation">(</span>out<span class="token punctuation">)</span>
        out <span class="token operator">=</span> self<span class="token punctuation">.</span>inception3a<span class="token punctuation">(</span>out<span class="token punctuation">)</span>
        out <span class="token operator">=</span> self<span class="token punctuation">.</span>inception3b<span class="token punctuation">(</span>out<span class="token punctuation">)</span>
        out <span class="token operator">=</span> self<span class="token punctuation">.</span>maxpool3<span class="token punctuation">(</span>out<span class="token punctuation">)</span>
        out <span class="token operator">=</span> self<span class="token punctuation">.</span>inception4a<span class="token punctuation">(</span>out<span class="token punctuation">)</span>
        out <span class="token operator">=</span> self<span class="token punctuation">.</span>inception4b<span class="token punctuation">(</span>out<span class="token punctuation">)</span>
        out <span class="token operator">=</span> self<span class="token punctuation">.</span>inception4c<span class="token punctuation">(</span>out<span class="token punctuation">)</span>
        out <span class="token operator">=</span> self<span class="token punctuation">.</span>inception4d<span class="token punctuation">(</span>out<span class="token punctuation">)</span>
        out <span class="token operator">=</span> self<span class="token punctuation">.</span>inception4e<span class="token punctuation">(</span>out<span class="token punctuation">)</span>
        out <span class="token operator">=</span> self<span class="token punctuation">.</span>maxpool4<span class="token punctuation">(</span>out<span class="token punctuation">)</span>
        out <span class="token operator">=</span> self<span class="token punctuation">.</span>inception5a<span class="token punctuation">(</span>out<span class="token punctuation">)</span>
        out <span class="token operator">=</span> self<span class="token punctuation">.</span>inception5b<span class="token punctuation">(</span>out<span class="token punctuation">)</span>

        out <span class="token operator">=</span> self<span class="token punctuation">.</span>avgpool<span class="token punctuation">(</span>out<span class="token punctuation">)</span>
        out <span class="token operator">=</span> torch<span class="token punctuation">.</span>flatten<span class="token punctuation">(</span>out<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        out <span class="token operator">=</span> self<span class="token punctuation">.</span>dropout<span class="token punctuation">(</span>out<span class="token punctuation">)</span>
        out <span class="token operator">=</span> self<span class="token punctuation">.</span>fc<span class="token punctuation">(</span>out<span class="token punctuation">)</span>

        <span class="token keyword">return</span> out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),u=[c];function l(i,k){return s(),a("div",null,u)}const d=n(e,[["render",l],["__file","GoogLeNet.html.vue"]]);export{d as default};