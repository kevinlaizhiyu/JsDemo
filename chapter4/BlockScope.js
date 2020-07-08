function Block(){
    if(true){
        var color = 'blue';
    }
    console.log(color)
}
//Block();
function BlockFor(){
    for(var i=0 ;i<10; i++ ){
        var m = i*2;
    }
    console.log(i,m)
}
//BlockFor();

function add(num1,num2){
    var sum = num1+num2;
    return sum;
}
var result = add(20,30)
console.log(sum);//30