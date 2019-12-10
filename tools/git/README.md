# git相关命令操作

- 获取git当前分支最近一次提交记录的id: `git rev-parse HEAD`

## gitignore

如果要忽略的文件夹可能在项目的子目录中存在，就不能这样写，例如：`/.idea`，要写成这样：`**/.idea`
