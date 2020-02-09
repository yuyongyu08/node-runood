let { counter, increment, person, modifyAge } = require('./exports.js')

//基本类型
console.log(counter)//1
console.log(require('./exports.js').counter);
increment()
console.log(require('./exports.js').counter);

Object.keys(require.cache).forEach(function (key) {
    delete require.cache[key];
})

console.log(counter)//1
console.log(require('./exports.js').counter);


//引用类型
console.log(person) //Object {name: "yuyy", age: 18}
modifyAge(16)
console.log(person) //Object {name: "yuyy", age: 16}


//CommonJS加载的变量是浅拷贝，不是深拷贝