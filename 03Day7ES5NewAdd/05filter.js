var arr =[1,2,3,4,5,6,7,8,9]
var result = arr.filter((value,index,array)=>{
    return value >5;
})
console.log(result)