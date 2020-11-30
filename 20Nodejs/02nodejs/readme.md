### 爬虫的步骤
1. 通过http / https 模块，获取网络资源（网页，记事本，图片，音频，视频）
```
https.get(url,(res)=>{
    let rowData = '';
    res.on('data',(chunk)=>{
        rowData += chunk;
    })
    res.on('end',()=>{
        console.log('数据传输完毕')
    })
}).on('error',(error)=>{
    if(error){
        console.log(error)
    }
})

```

2. 分析内容（正则表达式）
cheerio 模块 获取网页中的具体内容

### 同步异步的问题
1. 多个异步操作按照固定的顺序执行 ---> 函数嵌套  Promise  async--await+try--catch

### 框架 express koa egg
node 引入第三方接口的构成

### api接口的构成
接口四要素：接口地址url , 请求方法 , 传递的字段 , 返回信息
前端：
1. 传递数据，给后端；
2. 处理后端返回的结果；
后端：
1. 接收前端传递的数据；
2. 处理数据；
3. 将处理结果返回给前端；

#### 获取数据的方式
1. get数据 req.query
2. post数据 req.body  需要使用第三方插件 body-parser

####