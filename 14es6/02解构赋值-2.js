const fn = function([a,b,c,d]){
    console.log(a,b,c,d)
}

fn([1,2,3,4])

const fun = function({name,age}={name:'kevin',age:23}){
    console.log(name,age)
}

//一般传递参数的情况
// fun({
//     name:'赖治宇',
//     age:20
// })

//默认不传递参数的情况
fun()