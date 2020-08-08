let arr = [23,34,78,111,334,856,364,99];
function Sort(){
    return arr.sort((a,b)=>{
        return a-b;
    })
}
console.log('result is ===>',Sort());
console.log('arr is===>',arr)