const fs = require('fs');
const child_process = require('child_process');

for (let index = 0; index < 3; index++) {
    
    //使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回
    let workerProcess = child_process.exec(`node ${__dirname}/1-support.js ${index}`, (error, stdout, stderr) => {
        if (error) {
            console.log(error.stack);
            console.log('Error code: '+error.code);
            console.log('Signal received: '+error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });

    workerProcess.on('exit', (code) => {
        console.log(`子进程已退出，退出码：${code}`);
    })
}