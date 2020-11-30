// 【express基本案例】
// // 1. 引入express 模块
// // 2. 实例化 express 对象
// // 3. 监听一个端口
// // 4. 使用实例对象调取数据的方法，返回相应的数据

// const express = require('express'); // 引入express 模块
// const app = express(); // 实例化express对象

// app.get('/login',(req,res)=>{
//     let data = {
//         'name':'kevin',
//         'age':23,
//     }
//     res.send(data)
// })

// // 监听3003端口号启动一个node服务器  本地服务器 http://localhost:3003/login
// app.listen(3003,()=>{
//     console.log('服务器启动')
// })
 
  