let arr =['Hi,','this','is','kevin'];
function Jion(){
    return arr.join(' ');
}
console.log('result is===>',Jion());
console.log('arr is===>',arr);

let str = 'hi, this is kevin. how are you? my bro.'
function ToArray(pram){
    var arr = pram.split(' ');
    var Sentence = arr.join(' ')
    return Sentence
}

console.log(ToArray(str));