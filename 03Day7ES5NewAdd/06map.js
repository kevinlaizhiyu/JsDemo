var arr = [12,34,56,78,23,45,67,89,90]
var result = arr.map((value,index,array)=>{
    if(value>50){
        return value
    }else{
        return '不符合条件';
    };
})
console.log(result)