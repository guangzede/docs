## 概述
### 介绍
我们希冀创造一种新的视觉设计语言

### 设计价值观
经常有人问：什么是好的设计？提问的人往沉浸其中吧！

## 原则

### 亲密性
如果信息之间关联性越高，它们之间的个视觉单元。亲密性的根本目的是实现组织性，让用户对页面结构和信息层次一目了然。
#### 纵向间距关系
 通过『小号间距』、『中号间距』、『大号间距』这三种规格来划分信息层次。

![1.1.1](1.1.1.png)
> 纵向间距示例 在 Ant Design 中，这三种规格分别为：8px（小号间距）、16px（中号间距）、24px（大号间距）

在这三种规格不适用的情况下，可以通过加减『基础间距』的倍数，或者增加元素来拉开信息层次。
注：在 Ant Design 中，y=8+8*n。其中，n>=0，y 是纵向间距，8 是『基础间距』。

![1.1.1](1.1.2.png)
> 增加元素示例通过增加『分割线』来拉开层次。

<hr>

#### 横向间距关系
为了适用不同尺寸的屏幕，在横向采用栅格布局来排布组件，从而保证布局的灵活性。

![1.1.1](1.1.3.png)
> 组合排布示例

在一个组件内部，元素的横向间距也应该有所不同。

![1.1.1](1.1.4.png)
> 复选框内示例

### 对齐
格式塔学派（德语：Gestalttheorie） ：是心理学重要流派之一，兴起于 20 世纪初的德国，又称为完形心理学；主张人脑的运作原理是整体的，『整体不同于其部件的总和』。——摘自『维基百科』

#### 文案类对齐
如果页面的字段或段落较短、较散时，需要确定一个统一的视觉起点。

![1.1.1](1.1.5.png) 
> 推荐示例标题和正文左对齐，使用了一个视觉起点。

![1.1.1](1.1.6.png)
> 不推荐示例标题和正文使用了两个视觉起点，不推荐该种对齐方式，除非刻意强调两者区别。