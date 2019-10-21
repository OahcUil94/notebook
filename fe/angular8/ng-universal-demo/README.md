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

