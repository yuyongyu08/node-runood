let util = require('util');

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;

        this.sayHi = function(){
            console.log(`my name ${this.name}, my age ${this.age}`)
        }
    }
    

    sayName (){
        console.log(`my name ${this.name}`)
    }
}

Person.prototype.sayAge = function(){
    console.log(`my age ${this.age}`)
}

class Student{
    constructor(name){
        this.name = name;
    }
}

util.inherits(Student, Person);

let p = new Person('yuyy', 18);
p.sayHi()
p.sayName();
p.sayAge();


let s = new Student('yuyongyu');
s.sayAge();
s.sayName();
s.sayHi();


//util.inherits让子类只会继承父类原型上的属性和方法，对于父类自身的属性和方法不继承

//解释：class中this上的属性和方法属于类的实例，除此之外都属于类的原型