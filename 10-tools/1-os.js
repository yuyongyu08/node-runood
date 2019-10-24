
let os = require('os');

//操作系统名
console.log(os.type())

//编译时的操作系统名
console.log(os.platform())

//内存总量
console.log(os.totalmem());

//空闲内存
console.log(os.freemem());

//主机名
console.log(os.hostname())