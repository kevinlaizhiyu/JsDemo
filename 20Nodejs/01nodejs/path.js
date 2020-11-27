const fs = require('fs');
const path = require('path')

var result = fs.readFileSync(path.join(__dirname,'test.txt'),'utf8')

console.log(result)