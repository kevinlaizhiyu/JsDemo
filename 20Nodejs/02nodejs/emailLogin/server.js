const express = require('express');
const app = express();
const fs = require('fs');
const nodemailer = require('nodemailer')


app.get('/login/getcode',(req,res)=>{
    let {email} = req.query;
    fs.writeFileSync('./email.txt',email);

    let code = parseInt(Math.random()*10000);

    let transporter = nodemailer.createTransport({
        "host": "smtp.qq.com",
        "port": 465,
        "secure": true,
        auth:{
            user:"kevinlaizhiyu@foxmail.com",
            pass:"zncojzeyvjnxbejg",
        }
    })

    let contents = {
        from : "KevinLai<kevinlaizhiyu@foxmail.com>",
        to : email,
        subject: "赖老板的验证码",
        html:code,
    } 

    transporter.sendMail(contents,(error)=>{
        if(!error){
            console.log('邮件发送成功');
        }else{
            console.log('邮件发送失败',error);
        }
    })
    
})

app.get('/login/checkcode',(req,res)=>{
    let {checkcode} = req.query;
    let result = fs.readFileSync('./email.txt');
    if(checkcode===result){
        res.send({
            success:true
        })
    }else{
        res.send({
            success:false
        })
    }
})

app.listen(3002,()=>{
  console.log('服务器启动')  
})