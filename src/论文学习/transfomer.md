---
tittle: 函数
star: true
icon: pen-to-square
date: 2024-9-18
category:
  - 算法笔记
timeline: false 
watermark:
  width: 200
  height: 200
  content: uestc-lzy
  opacity: 0.5
tag:
  - 论文
  - 注意力机制
  - 编码器解码器 
---
# Transformer
本文从相关知识开始逐步讲解transformer
<!-- more -->
## 相关知识
本章节主要介绍编码器与解码器，注意力机制的起源，也是transformer论文的灵感来源。
### 编码器与解码器
编码器-解码器（Encoder-Decoder）架构在不同的领域和任务中有不同的首次提及。在自然语言处理领域，特别是在序列到序列（seq2seq）模型中，这种架构被广泛应用于机器翻译等任务。而在计算机视觉领域，如**图像分割**任务中，SegNet是最早提出并使用编码器-解码器架构的网络之一，其论文为《SegNet: A Deep Convolutional Encoder-Decoder Architecture for Image Segmentation》。
![alt text](image.png)
最初的编码器解码器使用的是基于cnn的结构，并用于图像分割，SegNet 的核心是一个编码器网络，它与 VGG16 网络的前 13 个卷积层在拓扑上是相同的，以及一个相应的解码器网络，其作用是将低分辨率的编码器特征图映射回原始输入分辨率的特征图，以便进行像素级的分类。SegNet 的创新之处在于解码器上采样低分辨率输入特征图的方式，它使用编码器最大池化步骤中计算的池化索引来执行**非线性上采样**，从而消除了上采样的学习需求。

### 注意力机制

Transformer原文中在介绍注意力机制的部分有下面这句话：

![](image-1.png)  

那么所谓的相加性质的注意力函数到底是怎么回事呢？在NLP相关论文对齐翻译NEURAL MACHINE TRANSLATION BY JOINTLY LEARNING TO ALIGN AND TRANSLATE中首次提到这种注意力函数，论文首次提出了一种新的神经机器翻译方法。这种方法的核心思想是，不同于传统的编码器-解码器模型将整个源句子编码成一个固定长度的向量，该方法允许模型在生成目标词汇时，自动地（软搜索）寻找与预测目标词最相关的源句子部分，而不必显式地将这些部分形成硬片段。
![](image-2.png =300x500)  
上图为该论文中所使用方法模型的示意图，本文中将使用自顶向下的方法由解码器开始来解读。   
  
$$
p(y_{i} \mid y_{1}, \cdots, y_{i-1}, x) = g(y_{i-1}, s_{i}, c_{i})
$$

是的是的




