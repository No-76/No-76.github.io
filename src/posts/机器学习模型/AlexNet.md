---
tittle: AlexNet
icon: pen-to-square
date: 2023-10-4
category:
  - 图像分类
order: 2
tag:
  - AlexNet
  - CNN
---

# AlexNet
AlexNet是一种深度卷积神经网络（Convolutional Neural Network，CNN），由Alex Krizhevsky、Ilya Sutskever和Geoffrey Hinton于2012年提出。它是在ImageNet图像分类挑战赛中取得突破性成果的关键模型，标志着深度学习在计算机视觉领域的崛起。
## 优点
1.非线性激活函数：AlexNet首次引入了ReLU（Rectified Linear Unit）作为激活函数，取代了传统的Sigmoid函数。ReLU函数具有线性增长和非饱和性，能够加速训练过程并缓解梯度消失问题。  

2.局部响应归一化（LRN）：AlexNet在卷积层之间引入了LRN层，该层对局部神经元的活动进行归一化处理，增强了模型的泛化能力。  

3.Dropout正则化：为了减轻过拟合现象，AlexNet在全连接层引入了Dropout技术，随机地将一些神经元的输出置为零，以降低神经元之间的依赖性（没办法因为数据量太大）。
## 数据增强
主要采取了两种方式对图像进行处理：  
1.对一张图片进行水平翻转，取图片的局部部分，从而实现一张图片变多种图片。  
2. 使用PCA主成分分析法将主成分随机乘一个λ，如下公式：
$[p_1, p_2, p_3] [α_1λ_1,α_2λ_2,α_3λ_3]T$  
## 模型结构  
![Alt text](public/image2.png)  
AlexNet采用两张580显卡进行训练，且只在部分层中有关联。  
下面是AlexNet模型架构的主要组成部分：   
1.输入层：接受图像数据作为输入，通常为彩色图像，尺寸为227x227像素。 

2.卷积层：AlexNet包含5个卷积层。每个卷积层都使用不同的卷积核进行滤波，并应用ReLU激活函数。这些卷积层负责提取图像的低级和高级特征。  

3.池化层：在卷积层之后，AlexNet使用了3个最大池化层。最大池化层对卷积层的输出进行下采样，减少特征图的空间尺寸，并保留最显著的特征。  

4.局部响应归一化层：AlexNet在卷积层之间引入了LRN层。这一层对局部神经元的活动进行归一化处理，增强模型的泛化能力。  

5.全连接层：在经过卷积和池化层后，AlexNet包含3个全连接层。这些层将提取的特征映射转换为最终的分类结果。该层中使用dropout技术。 
具体流程为卷积池化，卷积池化，卷积，卷积，卷积池化。且卷积核尺寸也不像LeNet那样每层都是一样的。
### LRN局部归一化  
局部响应归一化（LRN）的想法源自于神经科学中的侧抑制机制。在神经系统中，侧抑制是指一个神经元的响应程度受到周围神经元的活动水平的抑制或增强。  
具体地说，LRN通过对每个神经元的输出进行归一化，使得具有较大响应的神经元受到抑制，从而增强了其他神经元的相对响应。这种归一化操作可以在一定程度上减少特征的冗余性。  
然而，随着深度学习的发展，研究人员发现，在一些情况下，LRN并不总是对模型的性能有显著的影响。因此，在后续的网络设计中，如VGG、ResNet等，LRN逐渐被较少使用。不同的归一化策略和正则化技术也被提出来，以满足更复杂的网络结构和任务需求。
## 代码
```
class AlexNet(nn.Module):
    def __init__(self, num_classes=1000):
        super(AlexNet, self).__init__()
        
        # 卷积层
        self.features = nn.Sequential(
            nn.Conv2d(3, 96, kernel_size=11, stride=4, padding=2),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=3, stride=2),
            
            nn.Conv2d(96, 256, kernel_size=5, padding=2),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=3, stride=2),
            
            nn.Conv2d(256, 384, kernel_size=3, padding=1),
            nn.ReLU(inplace=True),
            
            nn.Conv2d(384, 384, kernel_size=3, padding=1),
            nn.ReLU(inplace=True),
            
            nn.Conv2d(384, 256, kernel_size=3, padding=1),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=3, stride=2)
        )
        
        # 全连接层
        self.classifier = nn.Sequential(
            nn.Dropout(),
            nn.Linear(256 * 6 * 6, 4096),
            nn.ReLU(inplace=True),
            
            nn.Dropout(),
            nn.Linear(4096, 4096),
            nn.ReLU(inplace=True),
            
            nn.Linear(4096, num_classes)
        )
    
    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), 256 * 6 * 6)
        x = self.classifier(x)
        return x
```
## 有趣的点
两张显卡训练出来的结果并不是一样的，而是具有其各自的特征。  
![Alt text](public/image3.png)  
可以看到第一张显卡主要关注的是线条方向的特征，而第二张显卡住一套关注的是颜色特征。
