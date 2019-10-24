let util = require('util');

let FE = {
    basic: ['HTML', 'CSS', 'JS'], 
    advanced: {
        server: 'node',
        frameworks: {
            js: ['Vue', 'React', 'Angular']
        }
    }
}

console.log(util.inspect(FE));
console.log(util.inspect(FE, true)); //输出array的length属性
console.log(util.inspect(FE, true, 3));
console.log(util.inspect(FE, true, 3, true));

