![all-search](https://socialify.git.ci/endday/all-search/image?description=1&font=Inter&forks=1&issues=1&language=1&owner=1&pattern=Plus&stargazers=1&theme=Light)

## all-search 全搜，一个搜索引擎快捷跳转菜单

一个让你可以方便的在各个搜索引擎之间跳转的顶部固定菜单，基于vue，使用rollup构建。

A top fixed menu that allows you to jump between various search engines, build based on Vue, and use rollup.

## 设置地址
[码云](https://endday.gitee.io/all-search/)
[github](https://endday.github.io/all-search/)

## 脚本地址
[greasyfork地址](https://greasyfork.org/zh-CN/scripts/397993-all-search)

## 特色功能
* [图形界面添加网址](https://endday.gitee.io/all-search/)
* 拖动改变分类排序
* 支持垂直和横向布局
* 点击分类使用分类第一个地址打开
* 鼠标中键点击地址可以打开新窗口
* 提供移动端支持
    * 若页面宽度不足，可以进行滚动，
    * 移动端为点击触发菜单

## 待完成

* 常态隐藏，通过指定区域或按钮触发展示（后续不维护固定模式的css兼容）
* 文字选中工具栏
* 全局弹窗（待定）
* 谷歌插件化（待定）

## 兼容和性能
* 针对百度样式问题，没有使用损耗性能的定时器，采用劫持Node.prototype.removeChild来实现
* 针对youtube的spf.js的路由切换进行监听
* 与AC-baidu等主流油猴脚本无兼容问题

## 如何贡献

#### 反馈与交流
[QQ群地址](https://qm.qq.com/cgi-bin/qm/qr?k=AKKJzfydYb3ZTya7k5yT4HUcA37zQfcO&jump_from=webapi)
QQ群号 148498263

#### 本地开发
```
npm run serve
```

#### 构建油猴脚本
记得改package.json中的版本号
```
npm run buildScript
```
