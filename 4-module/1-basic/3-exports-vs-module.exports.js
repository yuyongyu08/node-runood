class Student{
    constructor(name){
        this.name = name || Student.name;
    }

    sayHi(msg) {
        console.log(msg || 'Hi')
    }

    sayName(){
        console.log(this.name)
    }
}

class Developer{
    constructor(name){
        this.name = name || Developer.name;
    }

    sayHi(msg) {
        console.log(msg || 'Hi')
    }

    sayName(){
        console.log(this.name)
    }
}

exports.name = 'yuyongyu'

exports.Student = Student

module.exports.Developer = Developer

//exports和module.exports指向同一个对象