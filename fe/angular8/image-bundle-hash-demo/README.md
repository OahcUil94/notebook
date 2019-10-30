# angular图片打包缓存问题

打包后，图片想要和其他js、css文件的文件名都带hash值，只需要在打包命令中加参数：`--output-hashing=all`

## 以下几种情况是会带hash值的

1. 图片的`url`以背景图片的形式写在了scss文件里(标签的内联样式没用)
2. 图片的`url`在js代码中以require的形式引入, 给src属性赋值

## 新增文件

在src目录下新加一个`typings.d.ts`文件，写入这样一行:

```typescript
declare var require: (path: string) => any;
```
