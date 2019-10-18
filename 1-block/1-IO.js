let fs = require('fs');
let path = require('path');

let filepath = path.join(__dirname, './2-http.js');
console.log(filepath);
let data = fs.readFileSync(filepath);
console.log(data.toString());

console.log('程序结束！');