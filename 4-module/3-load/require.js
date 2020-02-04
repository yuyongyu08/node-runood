let { counter, increment, person, modifyAge } = require('./exports.js')

//基本类型
console.log(counter)
increment()
console.log(counter)

//引用类型
console.log(person)
modifyAge(16)
console.log(person)


//CommonJS加载的变量是浅拷贝，不是深拷贝