const fs = require('fs');
fs.stat('./test.txt',(err,state)=>{
    console.log('现在要进行判断的文件是./test.txt文件')
    console.log('判断是不是文件',state.isFile())
    console.log('判断是不是文件夹',state.isDirectory())
})
