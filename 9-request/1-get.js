let http = require('http');
let url = require('url');
let util = require('util');
let qs = require('querystring');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

    res.write(util.inspect(url.parse(req.url, true)));
    res.write('\n');

    let params = qs.parse(url.parse(req.url).query);
    console.log(params);
    
    res.write(`username：${params.username}`)
    res.write('\n');
    res.write(`password：${params.password}`)
    res.end()
}).listen(8080)

console.log('server started!');

//http://yuyy:yyy@sub.example.com:8080/path?username=yuyy&password=yyy#hash
