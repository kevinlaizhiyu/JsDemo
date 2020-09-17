var jsondata = `{
    "name":"kevin",
    "age":23,
    "gender":"male"
}`



var res = JSON.parse(jsondata)
console.log(res)
var result = JSON.stringify(res)
console.log(result)