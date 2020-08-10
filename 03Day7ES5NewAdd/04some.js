var arr = [1,2,3,4,5,6,7,8,9]
var result = arr.some((value,index,array)=>{
    return value===9;
})
console.log(result)