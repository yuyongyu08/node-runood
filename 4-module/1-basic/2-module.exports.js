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

//对外只暴露一个值时用module.exports