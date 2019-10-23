let util = require('util');
let { URL, URLSearchParams } = require('url');
let myURL = new URL('http://yuyy:yyy@sub.example.com:8000/p/a/t/h?query=string#hash');
console.dir(util.inspect(myURL));
console.log(myURL.pathname);


//获取参数
//方式1:
let params1 = myURL.searchParams;
console.log(util.inspect(params1));
console.log(params1.get('query'));


//方式2:
let params2 = new URLSearchParams(myURL.search);
console.log(util.inspect(params2));
console.log(params2.get('query'));


