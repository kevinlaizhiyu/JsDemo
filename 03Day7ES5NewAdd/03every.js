var arr = [1,2,3,4,5,,67,8,7,65,4,3,3,2,1]
var result = arr.every((value,index,array)=>{
    return value>0 ;
})

console.log(result)