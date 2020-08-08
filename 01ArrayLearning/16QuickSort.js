//快速排序
var arr = [44, 55, 6, 99, 11, 225, 556, 22, 666, 211, 9997, 222661, 8822266, 772883, 66288]
// function QuickSort(arr) {
//     var minIndex = parseInt(arr.length / 2);
//     var minvalue = arr.splice(minIndex, 1);
//     var left = [];
//     var right = [];
//     if (arr.length <= 1) {
//         return arr;
//     } else {
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i] < minvalue) {
//                 left.push(arr[i]);
//             } else {
//                 right.push(arr[i]);
//             }
//         }
//     } return QuickSort(left).concat(minvalue, QuickSort(right))
// }
// console.log(QuickSort(arr));
//【注意】这里的左右数组不能够放在循环的里边而是要放在循环的外边，这样做是为了后半使用递归比较方便
function QuickSort(arr) {
    if (Array.isArray(arr)) {
        var minIndex = parseInt(arr.length/2);
        var minValue = arr.splice(minIndex,1);
        var left = [];
        var right = [];
      if(arr.length<=1){
        return arr;
      }else{
          for(var i=0;i<arr.length;i++){
              if(arr[i]<minValue){
                  left.push(arr[i]);
              }else{
                  right.push(arr[i]);
              }
          }
      }
      return QuickSort(left).concat(minValue,QuickSort(right));
    }else{
        console.log('请检查数据结构')
    }
}
QuickSort(arr);