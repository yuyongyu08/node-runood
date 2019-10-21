let fs = require('fs');

let readerStream = fs.createReadStream('./3-stream/data/input.txt');
let writerStream = fs.createWriteStream('./3-stream/data/output.txt');

readerStream.pipe(writerStream);

console.log('end!')