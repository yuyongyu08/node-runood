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

/**
 * util.inspect(obj, showHidden, depth, clolors) 将一个任意对象转化为字符串
 * showHidden: 输出更多隐藏信息
 * depth：递归层数
 * clolors：是否加颜色显示
 * */