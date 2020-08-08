//随机生成一个五位以内的数，然后输出该数共有多少位，分别是什么

var position = Math.ceil(Math.random()*5);
var str ='';
for (var i=0;i<position;i++){
    str += Math.floor(Math.random()*10).toString();
}
console.log('这个数是'+str+',这个数有'+position+'位，')
var arr = str.split('').reverse();
var unit = ['个','十','百','千','万'];
for(var i=0,len=arr.length;i<len;i++){
    console.log(unit[i]+'位是'+arr[i]);
}



