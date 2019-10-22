class Student{
    constructor(name){
        this.name = name;
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
        this.name = name;
    }

    sayHi(msg) {
        console.log(msg || 'Hi')
    }

    sayName(){
        console.log(this.name)
    }
}

exports.name = 'yuyy'

exports = Student

module.exports = Developer

exports.name = 'yuyy'
