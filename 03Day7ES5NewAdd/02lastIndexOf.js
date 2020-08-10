var arr = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]
var newarr=[]
console.log(arr.lastIndexOf(1))
function NoRepeat(arr){
    arr.forEach((value) => {
        if(newarr.indexOf(value)===-1){
            newarr.push(value)
        }
    });
    console.log(newarr)
}
NoRepeat(arr)