// 同步api从上往下执行，前面代码会阻塞后面代码的执行顺序
// 代码执行还会先把同步api执行完后再去执行异步api。

// 同步代码执行区，异步代码执行区，回调函数队列
// 执行顺序是遇到同步api（放到同步代码执行区中)就执行， 遇到异步api就把他放在异步api的执行区中， 
// 然后再把异步api执行区中带有回调函数的放到回调函数队列， 依照队列执行,，
// 到了时间，就从队列中把函数拿到同步代码执行区中去执行。
//所以顺序为先同步api，再异步api中没有回调函数计时器的，再回调函数计时器

console.log("代码开始执行");
setTimeout(() => {
    console.log('代码过0s后执行');
}, 0);
setTimeout(() => {
    console.log('代码过2s后执行');
}, 2000);

console.log('代码执行结束');

// 回调地狱，是一个回调函数嵌套一个回调函数
// 例如依次读取1.txt，2.txt，3.txt文件里面的内容
const fs = require('fs');
fs.readFile('1.txt', 'utf-8', (err, content1) => {
    console.log(content1);
    fs.readFile('1.txt', 'utf-8', (err, content2) => {
        console.log(content2);
        fs.readFile('1.txt', 'utf-8', (err, content3) => {
            console.log(content3);
        })
    })
})