//【登录接口】
const express = require('express'); // 引入express 模块
const app = express(); // 实例化express对象
const bodyParser = require('body-parser')// 解析post数据]
app.use(bodyParser.urlencoded({extended:false})) // 解析表单格式数据
app.use(bodyParser.json()) // 解析json格式数据

app.post('/login/reg3',(req,res)=>{
    // express 默认是不能够解析 req.body的
    // 必须使用第三方模块 body-parser 
    let {name,pass} = req.body; // 使用post必须用body 
    console.log(req.body)
    if(name ==='Kevin' && pass ===1234){
        res.send({
            'reg':true
        })
    }else{
        res.send({
            'reg':false
        })
    }  
})

// 监听3003端口号启动一个node服务器  本地服务器 http://localhost:3003/login
app.listen(3000,()=>{
    console.log('服务器启动')
})