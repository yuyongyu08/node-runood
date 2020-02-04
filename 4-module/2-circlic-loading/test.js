//如果发生模块的循环加载，即A加载B，B又加载A，则B将加载A的不完整版本
console.log('test.js ', require('./a.js.js').a);
console.log('test.js ', require('./b.js.js').b);

//第二次加载时，会直接从缓存读取exports属性
// console.log('test.js ', require('./a.js').a);
// console.log('test.js ', require('./b.js').b);

