let fs = require('fs');
let zlib = require('zlib');

fs.createReadStream('./3-stream/data/input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('./3-stream/data/input.txt.gz'));

console.log('end!')