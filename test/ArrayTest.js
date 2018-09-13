
var fs=require('fs');
var b=new Buffer(fs.readFileSync('test.json').toString('utf-8'));var c=b.toString('utf-8');
var d='2345';




console.log("====")

console.log("---"+c)

var datas=[{'name':1},{"34":1}];
console.log(datas);