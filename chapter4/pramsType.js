var person = new Object();
person.name = 'Kevin';
console.log(person.name)
// 基本类型和引用类型，堆和栈

var num1 = 1;
var num2 = num1;
num1++;
console.log('num1--->',num1);
console.log('num2--->',num2);

var objA = new Object();
var objB = objA;
objA.name = 'David';
console.log('objA.name--->',objA.name);
console.log('objB.name--->',objB.name);

// ECMAScript中参数传递是引用类型

function addTen(num){
    num += 10;
    return num ;
}
var count = 20;
var result = addTen(count); 
console.log(count);//20
console.log(result);//30

console.log('----参数传递是对象的时候，证明是值得传递而非地址的传递----')

function setName(obj){
    obj.name = 'David';
    var obj = new Object();
    obj.name = 'Kevin';
}

var person = new Object();
setName(person);
console.log(person.name)

console.log('------instaceof对象的检测------')
var person = new Object();
var color = new Array();
var pattern = new RegExp();
console.log(person instanceof Object);//true 'person 是 Object对象吗？'
console.log(color instanceof Array);//true 'color 是 Array对象吗？'
console.log(pattern instanceof RegExp);//true 'pattern 是 RegExp 对象吗？'