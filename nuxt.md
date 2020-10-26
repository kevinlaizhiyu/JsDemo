# nuxt.js
## nuxt安装 
>1. npx create-nuxt-app demo 安装脚手架
>2. 然后出现了一些列的配置项，这种就是根据自己的喜好选择相应的安装
>3. cd demo  
>4. npm run dev
>5. 这样就能够实现项目的启动，访问默认的端口，就能够实现项目的启动；
>P.S.: 安装nodejs的时候会出现一些安装的问题，这个时候先不要修改代码，先启动工程确认工程是没有问题的，在这个前提下再去修改代码，这样就能够知道是环境的问题还是代码的问题

## 目录结构
>asset 存放未编译的静态资源 (LESS SASS JS)、
>component 组件
>layout 整体的大的布局
>middlleware 中间件组件 页面的权限验证等~
>page 存放页面
>plugin 插件目录 (element-ui)
>static 静态资源 此类文件不会被nuxt.js调用webpack进行构建编译处理
>store 对应的全局状态管理
>nuxt.config.js nuxt的配置文件、

## 配置
1. npm install --save-dev node-sass sass-loader

> nuxt.config.js文件内

```
css:[
    '@assets/css/main.sass'
]
```
2. 在对应路径下创建相应的文件夹以及文件

>assets/css/main.sass文件下

```
$baseColor:red;

body{
    background:baseColor;
}
```

> P.S.: 配置sass中出现的问题----要求样式代码写到一行里边
> solution: 搜索 \.sass 
> node_modules --> nuxt --> dist --> nuxt.js 

```
{
    test:/\.sass$/,
    oneOf:perfLoader.pollOneOf('css',styleLoader.apply('scss',{
        loader:'sass-loader',
        option:this.loaders.scss
    }))
}
```

在 nuxt.js 查找loader 下的 scss
```
indentedSyntax: false //是否缩进？ true 是（排列在一排） false否（可以多行显示）
```
