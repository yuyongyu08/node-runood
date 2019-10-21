const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('connect', () => {
    console.log('连接建立');

    myEmitter.emit('dataReceived');

    myEmitter.emit('closeConnect');
    myEmitter.emit('closeConnect');

});

myEmitter.on('dataReceived', () => {
    console.log('接收到数据')
});

myEmitter.once('closeConnect', () => {
    console.log('关闭连接')
});

myEmitter.emit('connect');

console.log('程序执行完毕')


/** 
 * 为什么“程序执行完毕”最后打印，而不是在第一行？
*/


