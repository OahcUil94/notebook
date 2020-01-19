# Unicode

Unicode的字符码，很少在计算机中直接用在存储和表达文本上。原因无他：太浪费空间了。Unicode字符码是32位，4个字节。平常使用的字符里，99%以上的字符都不会突破2个字节。

为了节省空间，人们就对Unicode的字符码再做二次编码，这就诞生了UTF-8，UTF-16，UTF-32等编码标准。除了UTF-32，UTF-8和UTF-16都是不定长的编码，
他们的意思是按照编码规则，将一个Unicode字符的字符码，编码成N个8位或者N个16位。至于N是几，要看具体的字符来定。UTF-32例外的原因是，他已经足够直接保存Unicode的字符码了……


LE是“小端”的缩写。因为只要是多字节的数据，就有端序问题，也就是高位字节在先还是低位字节在先的问题。windows平台默认小端，即低位字节在先。


计算机中为何不直接使用 UTF-8 编码进行存储而要使用 Unicode 再转换成 UTF-8 ？ - farta的回答 - 知乎
https://www.zhihu.com/question/52346583/answer/130139771


面试官：请讲一下 Unicode 和 UTF-8 的区别？ - simpleapples的文章 - 知乎
https://zhuanlan.zhihu.com/p/51828216

111011111100101

Unicode 和 UTF-8 有什么区别？ - 邱昊宇的回答 - 知乎
https://www.zhihu.com/question/23374078/answer/24385963

UTF-16BE/LE
至于LE和BE，就是一个数值在内存/磁盘上的保存方式

Windows 记事本的 ANSI、Unicode、UTF-8 这三种编码模式有什么区别？ - 时国怀的回答 - 知乎
https://www.zhihu.com/question/20650946/answer/15751688

从零开始的 JSON 库教程（四）：Unicode - Milo Yip的文章 - 知乎
https://zhuanlan.zhihu.com/p/22731540

java中的“中文字符”和“英文字符”各占用几个字节？ - 实现的回答 - 知乎
https://www.zhihu.com/question/30945431/answer/91316302

big-endian	little-endian

https://unicode.org/faq/utf_bom.html

https://blog.csdn.net/lsfreeing/article/details/77074442

https://www.pconline.com.cn/pcedu/empolder/gj/other/0505/616631.html

UTF-8与其他编码比较，它劣势在哪？ - Ted Zyzsdy的回答 - 知乎
https://www.zhihu.com/question/30987792/answer/50219102

第一次听说“内码”和“外码”这两个词。
unicode当然定义了你所谓的存储格式。unicode定义了一个4个层次的模型：Abstract Character Repertoire， Coded Character Set，Character Encoding Form，Character Encoding Scheme。
第四个层次Character Encoding Scheme解决的就是Code units mapped to octet strings。你文中以为的unicode只不过是模型中第二个层次Coded Character Set而已，而UTF-XX负责的是后两个层次。

微软为什么用带 BOM 的 UTF-8，造成和多数系统的不兼容？ - Chester Tou的回答 - 知乎
https://www.zhihu.com/question/42048612/answer/93392007

web知识进阶——字符编解码 - 长佑的文章 - 知乎
https://zhuanlan.zhihu.com/p/32043815

Byte order mark
