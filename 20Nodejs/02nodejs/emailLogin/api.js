
let submit = document.querySelector(".getcode");
let inputValue = document.querySelector('.emailInput')
let finamSub = document.querySelector('.finalSub')
let code = document.querySelector('.code')

let ip = '192.168.195.248'
let port = '3002'

submit.addEventListener('click',()=>{
    let result = inputValue.value; // 获得邮箱的值
    // 将邮件发送给后端的服务器，并且获取验证码
    let url = `http://${ip}:${port}/login/getcode?email=${result}`;

    let myheader = new Headers({
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'text/plain'
    })

    fetch(url,{
        method:'GET',
        headers:myheader,
        mode:'cors'
   }).then((res)=>{return res.json()}).then(data=>{
        console.log(data)
        alert(data.info)
    })
})

finamSub.addEventListener('click',()=>{
    let result = code.value
    
    let url = `http://${ip}:${port}/login/checkcode?checkcode=${result}`;

    let myheader = new Headers({
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'text/plain'
    })

    fetch(url,{
        method:'GET',
        headers:myheader,
        mode:'cors'
   }).then((res)=>{return res.json()}).then(data=>{
        console.log(data)
        alert(data.success)
    })
})

