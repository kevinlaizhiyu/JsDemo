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

// 

function addTen(num){
    num += 10;
    return num ;
}
var count = 20;
var result = addTen(count); 
console.log(count);//20
console.log(result);//30