// 【扩展练习】随机点名程序
function Name(arr){
    var num = Math.floor(arr.length * Math.random());
    for(var i=0,len=arr.length;i<len;i++){
        if(i===num){
            console.log(arr[i]);
        }
    }
}
var arr=['kevin','jack','david','peter','alice','owen'];
Name(arr);