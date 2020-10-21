const fs = require('fs');

fs.open();
fs.openSync();

//获取文件信息
fs.stat('/path/file', (err, stats) => {
    stats.isFile();
    stats.isDirectory();
    stats.isBlockDevice();
    stats.isCharacterDevice();
    stats.isSymbolicLink();
    stats.isFIFO();
    stats.isSocket();
});
fs.statSync();

fs.write()
fs.writeFile();

fs.read()
fs.readFile()

fs.close()