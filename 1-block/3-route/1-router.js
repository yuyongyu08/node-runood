let http = require('http');
let URL = require('url');
let qs = require('querystring');

//请求地址 http://yuyy:yyy@sub.example.com:8000/p/a/t/h?query=string#hash

function handleURL(req, res){
    let urlObj = new URL(req.url);
    console.log(`urlObj: ${urlObj}`)

    res.end()
}

function route(req, res){
    let handlers = {};
    handlers['/p'] = handleURL

    handlers[URL.parse(req.url).pathname](req, res)
}


http.createServer(function(req, res){
    console.log(req);

    route(req, res);

    console.log('请求完成')
}).listen(8000);

console.log('server started!')