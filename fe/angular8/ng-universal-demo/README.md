# angular同构项目

## 新建项目

`ng new ng-universal-demo --routing -g -S --skip-install --style=scss -v`

## 添加同构相关的代码

`ng add @nguniversal/express-engine --clientProject project_name`

> 注意: `--clientProject`参数指定的名字必须要和`angular.json`中`projects`这个配置项下的名字一致, 例如：

```json
{
  ...
  "projects": {
    "ng-universal-demo": ...
  }
  ...
}
```

之后会生成一个`main.ts`文件, 在一些IDE中, 该文件会提示错误, 无法解析`express`模块中暴露的内容, 所以还需要安装`@types/express`: 

`npm i -D @types/express`

后面还会用到一个模块: `TransferHttpCacheModule`, 用来实现服务器到客户端的请求传输缓存，防止客户端重复请求服务端已完成的请求, 这个模块在`@nguniversal/common`包中: 

`npm i -S @nguniversal/common`


### 执行命令之后，都添加了哪些内容

#### 项目依赖

- dependencies
  - @angular/platform-server: Universal的服务端元件
  - @nguniversal/express-engine: Universal应用的Express引擎
  - @nguniversal/module-map-ngfactory-loader: 用于处理服务端渲染环境下的惰性加载
  - express: Node Express 服务器
- devDependencies
  - ts-loader
  - typescript
  - webpack-cli

#### 新增项目文件

- webpack.server.config.js
- tsconfig.server.json
- src/main.server.ts
- src/app/app.server.module.ts
- server.ts

## 服务端的模块懒加载

只需要在`app.server.module.ts`文件中导入`ModuleMapLoaderModule`模块即可

## 服务端到客户端的状态传输

- `app.server.module.ts`中导入`ServerTransferStateModule`模块
- `app.module.ts`中导入`BrowserTransferStateModule`模块和`TransferHttpCacheModule`模块

这三个模块都与服务端到客户端的状态传输有关: 

- ServerTransferStateModule: 在服务端导入，用于实现将状态从服务端传输到客户端
- BrowserTransferStateModule: 在客户端导入，用于实现将状态从服务端传输到客户端
- TransferHttpCacheModule: 用于实现服务端到客户端的请求传输缓存，防止客户端重复请求服务端已完成的请求

## 总结

- 所有的内容是在node层渲染好的
- 懒加载的路由, 包括初始的http请求都是在node层渲染好的

## 参考文章

- [Angular Universal 服务端渲染](https://www.jianshu.com/p/40be228a5ec6)
