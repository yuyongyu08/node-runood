let http = require('http');
let url = require('url');
let qs = require('querystring');

//请求地址 http://yuyy:yyy@sub.example.com:8000/path?query=string#hash

function handleURL(req, res){
    let urlObj = url.parse(req.url);
    let qsObj = qs.parse(urlObj.query);
    let str = getListTmpl('url', urlObj) + getListTmpl('qs', qsObj)

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(str);
    res.end();
}

function getListTmpl(listTitle, data){
    let tmpl = `<h2>${listTitle}</h2><ul>`
    Object.keys(data).forEach((key) => {
        tmpl += `<li>${key}: ${data[key]} </li>`
    })
    tmpl += '</ul>'

    return tmpl
}

function route(req, res){
    let handlers = {};
    handlers['/path'] = handleURL

    let pathname = url.parse(req.url).pathname;
    let handler = handlers[pathname];
    if(typeof handler == 'function'){
        handler(req, res)
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("not found");
        res.end();
    }
}


http.createServer(function(req, res){
    route(req, res);

    console.log('请求完成')
}).listen(8000);

console.log('server started!');
