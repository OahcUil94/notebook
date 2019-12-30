# go-micro入门

## 官方文档

[https://micro.mu/docs/index.html](https://micro.mu/docs/index.html)

## protoc的使用

下载protoc二进制文件：[https://github.com/protocolbuffers/protobuf/releases](https://github.com/protocolbuffers/protobuf/releases)

安装插件：`protoc-gen-go`和`protoc-gen-micro`

1. `go get github.com/golang/protobuf/protoc-gen-go`
2. `go get github.com/micro/protoc-gen-micro`

### protoc指定目录

--proto_path(-I)参数: 指定了要去哪个目录中搜索import中导入的和要编译的proto文件, 可以定义多个。

### protoc查找插件的规则

protoc默认会去环境变量PATH中查找插件，查找插件的规则是：`--(pluginname)_out=.` 对应查找的插件就是：`protoc-gen-(pluginname)`

例如下面这条命令就是查找了两个插件：

`protoc -I pbmodels/ pbmodels/*.proto --micro_out=pbmodels/. --go_out=pbmodels/.`
