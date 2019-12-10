# 微信相关操作问题汇总

## 微信分享

### 单页应用路由重定向或调用window.location.replace

2019-12-09这个时间，我们使用angular开发了一个微信H5程序，该程序是对上个版本H5进行了重写，重写之后，首页发生了变化：

- vue版本的H5，首页：`:collegeID/index`
- angular版本的H5，首页：`:collegeID`

由于客户已经把网址链接嵌入到公众号里了，所以我们对`:collegeID/index`进行了一下处理：

```typescript
const routes: Routes = [
  { path: ':collegeID', loadChildren: () => import(`./index/index.module`).then(m => m.IndexModule) },
  { path: ':collegeID/my-study', loadChildren: () => import(`./my-study/my-study.module`).then(m => m.MyStudyModule )},
  { path: ':collegeID/discovery', loadChildren: ()=> import(`./discovery/discovery.module`).then( m => m.DiscoveryModule )},
  { path: ':collegeID/personal-center', loadChildren: ()=> import(`./personal-center/personal-center.module`).then( m => m.PersonalCenterModule)},
  { path: ':collegeID/course-details', loadChildren: () => import(`./course-details/course-details.module`).then(m => m.CourseDetailsModule)},
  { path: ':collegeID/index', redirectTo: ':collegeID' }
];
```

发现在微信开发者工具中显示是可以正常重定向的，但是在微信浏览器里，重定向之后，点击复制链接，获取到的还是`:collegeID/index`链接，随后微信开发者工具中也发现了错误：

```json
{
    "errMsg":"config:fail,Error: 系统错误，错误码：63002,invalid signature [20191204 15:50:27][]"
}
```

网上查询之后有网友说是：`string1中的url不能和当前页面地址有不一样`，微信检测到的还是`:collegeID/index`，但是可能在代码里获取到的却是已经重定向过的路由地址。

那只能换一种方式了，不重定向，新建一个组件，当路由是`:collegeID/index`时，就使用`window.location.replace`替换成`:collegeID`，但是依旧和上面的情况一样。

最后只能妥协，把首页改成了`:collegeID/index`，无奈。
