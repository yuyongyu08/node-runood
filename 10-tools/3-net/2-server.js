let net = require('net');

let server = net.createServer(connection => {
    console.log('客户端建立连接');

    connection.on('end', () => {
        console.log('客户端关闭连接')
    })

    connection.write('Hello client')

    connection.pipe(connection)
});

server.listen(8080, () => {
    console.log('服务器已启动')
})