---
title: "开启Hugo博客之旅"
date: 2020-01-20T22:59:57+08:00
draft: true
---

查看`go`版本，`go version`：

```
go version go1.13.4 darwin/amd64
```

查看`hugo`版本，`hugo version`：

```
Hugo Static Site Generator v0.63.0-DEV darwin/amd64 BuildDate: unknown
```

新建博客站点，`hugo new site my-blog`：

```
Congratulations! Your new Hugo site is created in /Users/xxx/my-blog.

Just a few more steps and you're ready to go:

1. Download a theme into the same-named folder.
   Choose a theme from https://themes.gohugo.io/ or
   create your own with the "hugo new theme <THEMENAME>" command.
2. Perhaps you want to add some content. You can add single files
   with "hugo new <SECTIONNAME>/<FILENAME>.<FORMAT>".
3. Start the built-in live server via "hugo server".

Visit https://gohugo.io/ for quickstart guide and full documentation.
```

添加一个主题，在建好的博客`themes`文件夹下，克隆github上的主题仓库，或者使用`submodule`：

```
git init
git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke
```

比较常用的主题有：`liva hugo`, `m10c`, `Tranquilpeak`, `Prologue`，然后根据具体的主题信息来修改`config.toml`配置文件的信息。

添加一篇文章，`hugo new posts/my-first-post.md`

启动服务：`hugo server -D`

打包静态资源：`hugo -D`
