var arr = [1,2,3,4,5,6,7,8,9];
arr.reduce((pre,current,index,array)=>{
    console.log(pre +'|'+ current);
    return pre+current;
})
//这里一定要return，这样的话每一次都能够进行运算