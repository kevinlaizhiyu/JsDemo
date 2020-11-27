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

> 在 nuxt.js 查找loader 下的 scss

```
indentedSyntax: false //是否缩进？ true 是（排列在一排） false否（可以多行显示）
```

## 路由
### 基础路由
> page 下 创建 home文件夹 创建 index.vue 
> page 下 创建 orders文件夹 创建 index.vue

> nuxt-link 标签 ---> 写在 layout 文件下的 default.vue 文件内 
```
<template> 
  <nuxt-link to="/">首页</nuxt-link>
  <nuxt-link to="/home">HOME</nuxt-link>
  <nuxt-link to="/orders">Orders</nuxt-link>
  <nuxt-link to="/good_list">GoodsList</nuxt-link> //动态路由使用
  <nuxt-link to="/users">Users</nuxt-link> // 嵌套路由使用
  
</template>

```

### 动态路由
> page 下 创建 goods_list文件夹 创建 index.vue

```
<li v-for='(item,index) in list' :key='item.name'>
    <nuxt-link  :to="'/detail/'+item.id"> {{item.name}} </nuxt-link>
</li>

data(){
    return {
        list:[
            {id:001,name:'iphone',price:10000},
            {id:002,name:'huawei',price:8000},
            {id:003,name:'hammer',price:6000},
        ]
    }
}

```
> home文件夹改成detail 里边的文件改成 _id.vue

> 在该文件中写上
```
{{$router.params.id}}

```
> 就能够拿到地址栏传过来的参数 id --> 001  002  003

> 动态路由传参 _fileName.vue 

### 嵌套路由

在 pages 下边写上一个新的文件 users.vue --> 外层 单文件组件
在 pages 下边写上一个同名的文件夹  index.vue --> 内层 被嵌套的路由
【注意】
1. 一定要重名；
2. 全路径
3. 放上一个路由位置 <nuxt/>

在外层文件中使用 

```
<nuxt-link to='/users/page1'></nuxt-link>
<nuxt-link to='/users/page2'></nuxt-link>
<nuxt/> //相当于 <view-route>，开启一个位置
```

### 过渡动效 ---> 路由的切换的动画

>1. assets 里边放了 css 文件夹
>2. 可以将过渡动画放到sass文件中
>3. 在nuxt.config.js中引进文件

### 中间件 ---> 对页面的控制（权限）
>1. 每一个中间件应放置在 middleware/ 目录。
>2. 文件名的名称将成为中间件名称 (middleware/auth.js将成为 auth 中间件)。
>   在auth.js中写上

```
export default function (context) {
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}
```

>3. 在 nuxt.config.js中创建
```
    router:{
        middleware:'auth'
    }

```
> 可以参考真实案例 文档中有写到 https://github.com/nuxt/example-auth0

### 视图
> 定制化默认的html模板，在根目录下创建一个 app.html 文件
> 一般不会使用这个文件，一些版权的信息会放在上边
#### 布局 --- layout
> 在这个文件中可以添加一些跳转链接
> 或者其他

#### Meta 设置
> 在nuxt.config.js中进行修改 （是一个配置项）

### 异步数据 asyncData 方法
> 在 detail 页面中写

```
import 'axios' from 'axios';

export default {
  asyncData({ params }) {
    return axios.get(`https://my-api/posts/${params.id}`).then(res => {
        console.log(res)
      return { title: res.data.title }
    })
  }
}
```
在 static 下边写上一个test.json文件,上边的axios的地址写上'/data/test.json' 

```
{
    "price":999,
    "description":"test info"
}
```
这样在detail组件的页面就能够正常的使用tittle数据了

> P.S.: 组件的数据必须 return {} 对象

#### async await 优化 asyncData
```
import 'axios' from 'axios';

export default {

    const res = await axios.get('/data/test.json');
    console.log(res);//好的习惯就是 一旦发生了ajax请求之后就打印数据
    return {
        detail:res.data
    }
  
}
```
> 当然还要注意 asyncData 第一个参数是变量 ，
> 第二个参数是一个回调函数 在执行之后 .then(res=> callback(null,{title:res.data.title}))

#### 上下文对象 Context
> https://www.nuxtjs.cn/api/context
> 里边有很多的对象和方法

#### 错误处理
> Nuxt.js 在上下文对象context中提供了一个 error(params) 方法，你可以通过调用该方法来显示错误信息页面。params.statusCode 可用于指定服务端返回的请求状态码。

> 以返回 Promise 的方式举个例子：

```
export default {
  asyncData({ params, error }) {
    return axios
      .get(`https://my-api/posts/${params.id}`)
      .then(res => {
        return { title: res.data.title }
      })
      .catch(e => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  }
}

```
> 如果你使用 回调函数 的方式, 你可以将错误的信息对象直接传给该回调函数， Nuxt.js 内部会自动调用 error 方法：
```
export default {
  asyncData({ params }, callback) {
    axios
      .get(`https://my-api/posts/${params.id}`)
      .then(res => {
        callback(null, { title: res.data.title })
      })
      .catch(e => {
        callback({ statusCode: 404, message: 'Post not found' })
      })
  }
}
```

### 资源文件
> assets  webpack

> static nowebpack 纯静态文件

例如像background这样大的图片的话，可以放到这个assets下边耶可以放到static下边


### 插件
> 例如 axios 
> npm install axios --save




【需求】
1. 导航条-企业必备点不动
2. 导航条-联合送福利点不动
3. 导航条-单品优惠之后的导航条没有激活样式

4. 弹窗的样式修改-间距缩小