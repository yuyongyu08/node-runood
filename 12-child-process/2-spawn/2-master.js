const fs = require('fs');
const child_process = require('child_process');

for (let index = 0; index < 3; index++) {
    
    //使用指定的命令行参数创建新进程
    let workerProcess = child_process.spawn('node', [`${__dirname}/1-support.js`, index]);

    workerProcess.stdout.on('data', data => console.log(`stdout: ${data}`));
    workerProcess.stdout.on('data', data => console.log(`sdterr: ${data}`));
    workerProcess.on('close', code => console.log(`子进程已退出，退出码：${code}`));
}