//01数组的合并
var arr1=[1,2,3]
var arr2=[4,5,6]
var arr3=[...arr1,...arr2]
console.log(arr3)

//02数组中最小最大值
var arr = [11,55,22,88,44,66,23,45,78,87,65,54,223]
const fn = function (arr){
    var max = Math.max(...arr);
    console.log(max)
}
fn(arr)

//03浅拷贝
var arr4=[1,2,3,4]
var arr5=[...arr4]
arr5.push('kevin')
console.log(arr4,arr5)