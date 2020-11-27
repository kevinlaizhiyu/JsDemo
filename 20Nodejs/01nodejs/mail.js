// 邮件轰炸
// 1. 安装模块
// 2. 引入模块
// 3. 创建邮件对象
// 4. 创建右键内容
// 5. 发送邮件内容


const nodemailer = require('nodemailer');
 
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
    to : "2466157912@qq.com",
    subject: "赖老板的问候邮件",
    html:`<h1>你好，黄总</h1><br/>
          <h1>听说你最近上班很忙，要注意身体哦，记得吃晚饭！</h1>
          <h1>赖老板</h1>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606479423285&di=cde16278a2dc91121b688273e19bd3a7&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F94o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fa8014c086e061d95a24d73e07cf40ad163d9cadb.jpg" style="width:300px;">
          `,
} 

transporter.sendMail(contents,(error)=>{
    if(!error){
        console.log('邮件发送成功');
    }else{
        console.log('邮件发送失败',error);
    }
})