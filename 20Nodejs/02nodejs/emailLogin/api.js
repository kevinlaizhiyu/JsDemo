
let submit = document.querySelector(".getcode");
let inputValue = document.querySelector('.emailInput')
let finamSub = document.querySelector('.finalSub')
let code = document.querySelector('.code')
submit.addEventListener('click',()=>{
    let result = inputValue.value; // 获得邮箱的值
    // 将邮件发送给后端的服务器，并且获取验证码
    let url = `http://localhost:3002/login/getcode?email=${result}`;

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
    })
})

finamSub.addEventListener('click',()=>{
    let result = code.value
     
})

