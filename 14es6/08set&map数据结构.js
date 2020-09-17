// ES6提供了数据结构Set. 它类似于数组，但是成员的值都是 *唯一* 的，没有重复的值。
// Set 本身是一个构造函数，用来生成 Set 数据结构，*数组* 作为参数。
// 每一项即是键也是值,键和值是相同的。

//创建一个新的set结构的数据
// var obj1 = new Set(['kevin','cathy','david'])
// console.log(obj1)

//01是否支持iterator 的检测并且遍历
// console.log(obj1[Symbol.iterator]());
// for(let value of obj1){
//     console.log(value)
// }

//02 set.add()
// console.log(obj1.add('jack'))

//03 set.delete()
// console.log(obj1.delete(`kevin`))  
// console.log(obj1)
// console.log(obj1.add('jack').add('kevin'))

//04 set.has()
// console.log(obj1.has('kevin'));
// console.log(obj1.has('judy'));

//05 set.clear()  没有返回值
// obj1.clear()
// console.log(obj1s)

//06 forEach()
// obj1.forEach((index,value,un)=>{
//     console.log(index,value,un);
// })

//创建一个新的map()结构的数据
var data = new Map([
    ['name','kevin'],
    ['age',23],
    ['nation','china']
])
//01map.get()
console.log('get--->',data.get('name'));
//02map.delete()
console.log('delete--->',data.delete('name'));
//03map.has()
console.log('has--->',data.has('name'));
//05map.entries()
console.log('entries--->',data.entries());
//06map.forEach()
data.forEach((value)=>{
    console.log('foreach--->',value)
});
//04map.clear()
data.clear()
console.log('data--->',data);



