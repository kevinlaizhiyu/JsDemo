const fs = require('fs');
const path = require('path');

function treeLoad(src='',item='',data={},deepth=1){
    src ? src = __dirname : src += `/${item}`
    let result = fs.readdirSync(src);
    result.map((item,index)=>{
        data[item]={};
        data[item]['deepth']=deepth; 
        data[item]['type']='file';
        data[item]['contents']=''
    })
    console.log(data)
}
 
treeLoad();
 