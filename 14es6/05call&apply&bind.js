var obj1={
    name:'kevin',
    age:23
}

var obj2={
    name:'susan',
    age:28
}

function fn(prams1,prams2){
    console.log(this.name,prams1+prams2)
}

fn.call(obj1,1,2)
fn.apply(obj2,[1,3])
fn.bind(obj2,3,4)()