# 初步尝试nest
nest是一个web框架，用来构建高效可扩展的服务端应用程序，它支持原生的javascript，同时也支持typescript，支持面向对象编程OOP、函数式编程FP、函数式反应型编程FRP  
nest提供了一个开箱可用的应用程序结构，解决了以往框架没有解决的结构问题，从而构建易测试、可扩展、松散解耦、可维护的应用程序。  

## nest的使用
首先安装nest框架
```sh
$ npm i -g @nestjs/cli
```
然后使用nest自带的脚手架nest-cli创建新项目
```
$ nest new <project-name>
```

new|n [options] [name]                          Generate Nest application
  generate|g [options] <schematic> [name] [path]  Generate a Nest element
    Available schematics:
      ┌───────────────┬───────────┐
      │ name          │ alias     │
      │ application   │ app       │
      │ angular-app   │ ng-app    │
      │ class         │ cl        │
      │ configuration │ config    │
      │ controller    │ co        │
      │ decorator     │ d         │
      │ filter        │ f         │
      │ gateway       │ ga        │
      │ guard         │ gu        │
      │ interceptor   │ in        │
      │ interface     │ interface │
      │ middleware    │ mi        │
      │ module        │ mo        │
      │ pipe          │ pi        │
      │ provider      │ pr        │
      │ resolver      │ r         │
      │ service       │ s         │
      │ library       │ lib       │
      └───────────────┴───────────┘
  info|i                                          Display Nest CLI details
  update|u [options]                              Update Nest dependencies
  add <library>                                   Add a library



除了创建项目，还可以用命令来生成项目内的文件，

