const e = require('express');
const express = require('express');
const app = express();
const fs = require('fs');
const nodemailer = require('nodemailer')

function semdMail(email,code){
    console.log('email', typeof email,email)
    console.log('code', typeof code,code)
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
        html:`赖老板给您发送的验证码为：${code}，十分钟内有效，请勿分享给他人。`,
    } 

    transporter.sendMail(contents,(error)=>{
        if(!error){
            console.log('邮件发送成功');
        }else{
            console.log('邮件发送失败',error);
        }
    })
}


app.get('/login/getcode',(req,res)=>{
    let {email} = req.query;
    fs.writeFileSync('./email.txt',email);
    res.send({
        info:`验证码已经发往您的邮箱:${email}`
    })
    let code = parseInt(Math.random()*10000);
    semdMail(email,code)
    fs.writeFileSync('./code.txt',code)
})

app.get('/login/checkcode',(req,res)=>{
    let {checkcode} = req.query;
    let result = fs.readFileSync('./email.txt');
    if(checkcode===result){
        res.send({
            success:'验证成功'
        })
    }else{
        res.send({
            success:'验证失败'
        })
    }
})

app.listen(3002,()=>{
  console.log('服务器启动')  
})