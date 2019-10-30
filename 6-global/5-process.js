let util = require('util');

//运行的路径
console.log(process.cwd())

//当前 shell 的环境变量
console.log(util.inspect(process.env));

//运行程序所在的平台系统
console.log(process.platform);


process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

