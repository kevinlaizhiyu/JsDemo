const fn = function(arr){
    arr.sort(function(a,b){
        return a-b;
    })
    return [arr[arr.length-1],arr[0],arr.length]
}

let [max,min,length]=fn([12,65,23,87,34,98,234,456,65,432])
console.log(max,min,length)

