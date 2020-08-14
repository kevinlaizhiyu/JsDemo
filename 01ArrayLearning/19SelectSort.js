// //选择排序
// var arr = [12, 33, 55, 88, 82, 87, 92, 67, 84, 364, 56, 67, 47, 10]
// function SlectSort(arr) {
//     if (Array.isArray(arr)) {
//         for(var i=0 ; i<arr.length;i++){
//             minIndex=i;
//             minValue=arr[minIndex];
//             for(var j=i+1;j<arr.length;j++){
//                 if(arr[j]<minValue){
//                     minIndex=j;
//                     minValue=arr[j];
//                 }
//             }
//             if(minIndex !== i){
//                 var temp = arr[i];
//                 arr[i]=arr[minIndex];
//                 arr[minIndex]=temp;
//             }
//         }
//         console.log(arr)
//     } else {
//         console.log('请输入数组作为参数')
//     }
// }
// SlectSort(arr)

//生成一个随机数组
var arr = [];
for (var i = 1; i < 20; i++) {
    var num = parseInt(Math.random() * 100);
    arr.push(num)
}
console.log('original array is ===>', arr)
//选择排序
function QuickSort(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
            var minIndex = i;
            var minValue = arr[minIndex];
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[j] < minValue) {
                    minIndex = j;
                    minValue = arr[j]
                }
            }
            if (minIndex !== i) {
                var temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
        console.log('After SlectSort ===> ', arr)
    } else {
        console.log('请输入数组作为参数')
    }
}
QuickSort(arr)
