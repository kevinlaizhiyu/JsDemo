// 1.冒泡排序算法的原理如下：
// 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
// 对每一对相邻元素做同样的工作,从开始第一对到结尾的最后一对,在这一点，最后的元素应该会是最大的数。
// 针对所有的元素重复以上的步骤，除了最后一个。
// 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

let arr =[188,866,233,65,886,92,667,836,76,587,48];
function BubleSort(arr){
if(Array.isArray(arr)){
    for(var i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-i-1;j++){
            if(arr[j]<arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }console.log(arr)
}else{
    console.log('您输入的数据结构有问题，请输入相应的数组作为参数')
}
}
BubleSort(arr)