var arr = [12,12,12,2,23,23,23,23,23,34,44,44,44,44,55,55,55,55]
function Repeat(){
    var newarr = [];
    for (var i=0;i<arr.length;i++){
        var flag=true;
        for(var j=0;j<newarr.length;j++){
            if(arr[i]===newarr[j]){
                flag=false;
            }
        }
        if(flag==true){
            newarr.push(arr[i])
        }
    }
    console.log('origin array is --->' , arr);
    console.log('new array is --->' , newarr);
}
Repeat();
//思路：
//标记法的使用，将原来的数组重的每一个数字和一个新的空数组进行相应的比较，如果在这个新的数组中有相同的项目的时候，就改变这个原来数组项的标记，只有符合标记的数组想才能够被放到新的数组当中，不满足条件的项就不能够被放在数据当中。最终输出的新的数组就是去重实现的数组。