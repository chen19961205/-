//es7中支持的
// 将异步函数写成同步的形式，让代码不再有回调函数嵌套  async
//语法: const fn = async() => {};
//      async function fn1() {};
//      默认返回值是Promise对象--promis{  }

async function fn() {
    throw "抛出一个异常";
    return 123;
}
console.log(fn()); //Promise { 123 }
fn().then(data => {
    console.log(data); //123
}).catch(reject => {
    console.log(reject);
})


/*
await关键字
1.只能发生在异步函数里
2.后面只能跟promis对象，可以暂停异步函数的执行，等待promise返回结果后再向下执行
*/
async function fn1() {
    return "1";
}
async function fn2() {
    return '2';
}
async function fn3() {
    return '3';
}
async function run() {
    let p1 = await fn1();
    let p2 = await fn2();
    let p3 = await fn3();
    console.log(p1 + ',' + p2 + ',' + p3);
}
run();


//如果返回值不是promise对象，可以包装成promise对象

const fs = require('fs');
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);

async function run1() {
    //f1是个promise对象,不然会输出错误值
    let f1 = await readFile('./1.txt', 'utf-8').catch(err => { console.log(err); });
    let f2 = await readFile('./2.txt', 'utf-8').catch(err => { console.log(err); });
    let f3 = await readFile('./3.txt', 'utf-8').catch(err => { console.log(err); });
    console.log(f1 + ',' + f2 + ',' + f3);
}
run1();