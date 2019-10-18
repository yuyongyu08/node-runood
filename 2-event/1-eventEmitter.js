const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

function connectHandler() {
    console.log('连接建立');

    myEmitter.emit('data_received')
}

function dataReceivedHandler(){
    console.log('接收到数据')
}

myEmitter.on('connect', connectHandler);

myEmitter.on('data_received', dataReceivedHandler);

myEmitter.emit('connect');

console.log('程序执行完毕')