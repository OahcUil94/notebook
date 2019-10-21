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


