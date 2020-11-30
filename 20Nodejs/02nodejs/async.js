// ####============> 毁掉嵌套的相关操作
// function num1(){
//      setTimeout(() => {
//           console.log(1)
//            num2();
//      }, 3000);
// }

// function num2(){
//      setTimeout(() => {
//           console.log(2)
//      num3();

//      }, 2000);
// }

// function num3(){
//      setTimeout(() => {
//           console.log(3)
//      }, 1000);
// }

// num1();
 
// ##### ======> Promise 相关的操作
// function num1(){
//     return new Promise((resolve,reject)=>{
//         // 要做的一步操作
//         setTimeout(() => {
//             // // 成功执行resolve方法，外部使用then 进行处理 
//             //  resolve({'success':true})
//             // // 异步失败执行reject方法，外部使用catch进行处理
//             //   reject({'success':false})

//             console.log(1);
//             resolve();
//         }, 200);
//     })
// }
// function num2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log(2);
//             resolve();
//         }, 200);
//     })
// }
// function num3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log(3);
//             resolve();
//         }, 200);
//     })
// }



// num1().then((res)=>{
//     console.log('执行到then',res)
// }).catch((err)=>{
//     console.log('执行到catch',err)
// })


// num1()
// .then(()=>{
//     return num2();
// })
// .then(()=>{
//     return num();
// })
// .then(()=>{
//     console.log('wancheng ')
// })
// .catch((err)=>{
//     console.log('err----->',err)
// })


// ### ===========> async await  ---->  return代表resolve / throw 代表reject  

// function num1(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(111)
//     }, 300);
//    })
// }
// function num2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(222)
//         }, 300);
//     })
// }
// function num3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(333)
//         }, 300);
//     })
    
// }

// async function load(){
//     let a = await num3();
//     let b = await num2();
//     let c = await num1();
//     return a+b+c;
// }

// load().then((res)=>{
//     console.log(res)
// })

// async function num1(){
//     await setTimeout(async() => {
//         await console.log(1)
//     }, 100);
//  }

//  async function num2(){
//     await setTimeout(async() => {
//         await console.log(2);
//      }, 200);
//  }

//  async function load(){
//     // //  let a = await num2();
//     let a = await setTimeout(()=>{
//          console.log(3)
//      },300)
//     // //  let b = await num1();
//     let b =  await setTimeout(()=>{
//         console.log(4)
//     },100)
//     return a
    
//  }
 
// load()


// function num1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log(1)
//             resolve(1)
//         }, 300);
//     })
// }

// function num2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log(2)
//             resolve(2)
//         }, 200);
//     })
// }

// async function load(){
//     let a = await num2();
//     let b = await num1()
//     return `${a}---${b}`
// }

// load().then((res)=>{
//     console.log(res)
// })

async function num1(){
    console.log(1)
    let a = await num2()
    console.log('a',a)
    console.log(3)
    return a
}
 
function num2(){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log(2)
        resolve('异步请求')
       }, 200);
   })
}

num1().then((res)=>{
    console.log('res',res)
})

// async function load(){
//     let a = await num1();
//     let b = await num1()
//     // console.log(a)
//     // console.log(b)
// }

// load().then((res)=>{
//     console.log(res)
// })

// async function fn1(){
//     return 123
// }
// function fn2(){
//     return 123
// }

// console.log(fn1());
// console.log(fn2());

// fn1().then((res)=>{
//     console.log('res',res)
// })
// fn2().then((res)=>{
//     console.log('res',res)
// })