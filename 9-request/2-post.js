let http = require('http');
let url = require('url');
let qs = require('querystring');

http.createServer(function(req, res){
    let pathname = url.parse(req.url).pathname;
    console.log(pathname);

    if(pathname == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        let html = `
        <html>
            <head>
            <meta charset="utf-8">
            <title>菜鸟教程 Node.js 实例</title>
        </head>
        <body>
            <form action="/post" method="post">
                username： <input name="username"><br>
                password： <input name="password"><br>
                <input type="submit">
            </form>
        </body>
        </html>
        `
        res.write(html);
        res.end();
    }else if(pathname == '/post'){
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            params = qs.parse(body);
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.write(`username：${params.username}`);
            res.write('\n');
            res.write(`password：${params.password}`);
            res.end();
        })
    }
}).listen(8080);

console.log('server started!');
