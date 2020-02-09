let counter = 1
let person = {
    name: 'yuyy', 
    age: 18
}

function increment(){
    counter++
}

function modifyAge(age){
    person.age = age
}

module.exports = {
    counter,
    increment,
    person,
    modifyAge
}
