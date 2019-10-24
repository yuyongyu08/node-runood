let path = require('path');

//格式化
console.log(path.normalize('/users//user/123/../'))

//连接路径
console.log(path.join('/users', './student', 'user'))

//绝对路径
console.log(path.resolve('/users', './student', 'user'))

//路径后缀
console.log(path.extname('/img.jpg'))