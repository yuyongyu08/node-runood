let fs = require('fs');
let data = '';

let readerStream = fs.createReadStream('./3-stream/data/input.txt');

readerStream.setEncoding('utf8');

readerStream.on('data', function(chunk) {
    data += chunk;
})

readerStream.on('error', function(err) {
    console.log(err.stack)
})

readerStream.on('end', function() {
    console.log(data)
})

console.log('end!')