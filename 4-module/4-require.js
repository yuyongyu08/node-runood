let { sayHi, sayName } = require('./1-exports')
sayHi();
sayName('yyy');


let Person = require('./2-module.exports.js')
let p = new Person('yuyy');
p.sayHi();
p.sayName();


let { name, Student, Developer } = require('./3-exports-vs-module.exports.js')

console.log(name);

let s = new Student();
s.sayName();


let d = new Developer();
d.sayName();
