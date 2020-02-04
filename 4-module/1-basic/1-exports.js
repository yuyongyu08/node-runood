exports.sayHi = function(msg){
    console.log(msg || 'Hello')
}

exports.sayName = function(name){
    console.log(name)
}

//对外暴露多个值（变量、方法、类）时用exports