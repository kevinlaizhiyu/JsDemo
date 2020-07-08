function functionName(name ,message){
    console.log('my name is '+name+","+message)
}
functionName('kevin',"what's your name ?")

//function 中的 return 

function  Diff(num1,num2){
     if (num1<num2){
         return num1+"<"+num2;
     }
     else if (num1>num2){
         return num1+">"+num2;
     }
     else{
         return num1+"="+num2;
     }
}
var diff = Diff(1,2)
console.log(diff)

// function 中的参数

function doAdd(num1,num2){
    arguments[1]=10;
    console.log(arguments[1]+num2)
}

doAdd(1,2)
