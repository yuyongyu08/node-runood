
//1.assert 断言
console.assert(0 == '', '这是个真值表达式')
// console.assert(0 === '', '这不是个真值表达式')


//2.dir
let user = {
    name: 'yuyy',
    job: {
        title: 'programmer'
    }
}
console.dir(user)
console.log(user) //区别何在？


//3.trace
console.trace('trace')

//4.time, timeEnd
console.time('process');
for (let i = 0; i < 100000; i++) {}
// console.timeLog('process');
console.timeEnd('process');