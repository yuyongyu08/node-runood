let fs = require('fs');
let zlib = require('zlib');

fs.createReadStream('./3-stream/data/input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('./3-stream/data/input.unzip.txt'));

console.log('end!')