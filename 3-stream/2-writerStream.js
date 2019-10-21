let fs = require('fs');
let data = 'test write stream';

let writerStream = fs.createWriteStream('./3-stream/data/output.txt');

writerStream.write(data, 'utf8');

writerStream.end();

writerStream.on('error', (err) => {
    console.log(err.stack)
})

writerStream.on('finish', () => {
    console.log('finish!')
})

console.log('end!')