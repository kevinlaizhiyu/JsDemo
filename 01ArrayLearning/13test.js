// 编写函数has(arr , 60) 判断数组中是否存在60这个元素，返回布尔类型
function has(arr,num){
    for(var i=0,len=arr.length;i<len;i++){
        if(arr[i]==num){
            return true;
        }
    }
}
var arr = [1,2,3,4,5,6,7,89,60,99];
has(arr,60)?console.log(true):console.log('false');