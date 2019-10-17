let http = require('http');
let url = require('url');

function foo(){
    console.log('foo');

    let startTime = new Date().getTime();
    while (new Date().getTime() < startTime + 1000 * 10);

    return 'foo'
}

function bar(){
    console.log('bar');

    return 'bar'
}

function route(pathname, handlers){
    console.log(pathname, handlers);

    return handlers[pathname]()
}

http.createServer(function(req, res){
    let handlers = {};

    handlers['/foo'] = foo;
    handlers['/bar'] = bar;

    let msg = route(url.parse(req.url).pathname, handlers);

    console.log('开始返回结果:', msg);

    res.setHeader('Content-Type', 'text/plain');
    res.write(msg);
    res.end();

}).listen(8000);

console.log('server started!');