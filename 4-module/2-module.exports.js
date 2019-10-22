class Person{
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

module.exports = Person;