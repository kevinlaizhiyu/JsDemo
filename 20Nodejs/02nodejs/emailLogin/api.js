import axios from 'axios'

let submit = document.querySelector(".getcode");
let inputValue = document.querySelector('.emailInput')

submit.addEventListener('click',()=>{
    let result = inputValue.value; // 获得邮箱的值
    // 将邮件发送给后端的服务器，并且获取验证码
})

