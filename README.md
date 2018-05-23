这是一个集成了 [umi](https://umijs.org/docs/zh-Hans/introduction.html) 和 [dva](https://github.com/dvajs/dva/blob/master/README_zh-CN.md) 
[antd-mobile](https://mobile.ant.design/index-cn)的架构

关于umi:
>umi 是工具吗？是。但不仅仅是。我给 umi 的定位是开发框架，目前包含工具 + 路由，不包含数据和视图。 所以 umi[工具 + 路由] + dva[数据] + antd(-mobile)[视图]，很配哦。
个人觉得:umi是一套web前端工程化的解决方案,并且是可更改配置的解决方案,其设计思维类似,input上面的defaultValue,你不写我用我默认的,你要写就用你的.

关于dva:
>基于 redux、redux-saga 和 react-router 的轻量级前端框架。(Inspired by elm and choo)

目录结构:
├─.gitignore
├─.umirc.js //umi 的配置文件
├─.webpackrc.js //用来修改umi默认的webpack的配置文件
├─README.md 
├─package-lock.json //yarn 生成的版本配置文件
├─package.json
├─yarn-error.log
├─yarn.lock
├─src 
|  ├─App.css    
|  ├─index.css
|  ├─logo.svg
|  ├─pages  //业务项目 umi是免路由配置的,他的理念是路径及路由,他会把pages下面的文件根据路径自动生成路由
|  |   ├─index.js   //首页
|  |   ├─main   // 路由为 /main 下面的页面
|  |   |  ├─_layout.js  
|  |   |  ├─index.js
|  |   |  ├─user
|  |   |  |  ├─addr.js
|  |   |  |  ├─collect.js
|  |   |  |  └index.js
|  |   |  ├─models  //main的 model文件 会自动注册到dva里面去
|  |   |  |   └main.js
|  |   |  ├─cart
|  |   |  |  └index.js
|  ├─layouts
|  ├─dsykit             //项目私有的组件库,后面会在这里做业务和ui的分离,以实现一套业务代码兼容3端
|  |   ├─index.js       
|  |   ├─package.json
|  |   ├─tabBarExample
|  |   |       ├─TabBarExample.js
|  |   |       └TabBarExample.less
|  |   ├─httpUtil
|  |   |    ├─fetch.js      //用来发送http请求的工具,
|  |   |    └httpConfig.js  //配置http请求的类
├─dist                      //umi build 命令生成的文件夹,是压缩过的 用来部署项目
|  ├─index.html
|  ├─service-worker.js
|  ├─static
|  |   ├─common-umi.0a66c3cf.async.js
|  |   ├─src__pages__index.038bfb4a.async.js
|  |   ├─src__pages__main___layout.71d79839.async.js
|  |   ├─umi.30bdffc2.js
|  |   └umi.d41635cd.css
