// 编写函数map(arr) 把数组中的每一位数字都增加30%
function map(arr){
    console.log('origin array is ===>',arr)
    for(var i=0,len=arr.length;i<len;i++){
        arr[i] = arr[i]*1.3
    }
    console.log('now Array is ===>',arr)
}
var arr = [1,2,3,4,5,6,7,8,9];
map(arr);