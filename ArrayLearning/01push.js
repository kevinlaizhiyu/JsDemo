var arr = [1,2,3,4,5,6,7]
function Push(){
    console.log(arr)
    var result = arr.push('kevin');
    console.log(result)
    for(var i=0,len=arr.length; i<arr.length;i++){
        console.log(arr[i])
    }
}
Push();