var arr =['pedro','cathy','kevin','david','ali'];
function Splice(index,length,content){
    return arr.splice(index,length,content);
}
console.log('result is===>',Splice(2,2,'Tom'));
console.log('arr is ===>',arr);