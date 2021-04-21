// promise只是异步语法上的改进，能解决异步的回调函数的回调地狱问题
// promise是构造函数

const fs = require("fs");
const path = require("path");

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve({ msg: "hello,node.js" });
        } else {
            reject("拒绝执行");
        }
    }, 1000);
})
let promise1 = new Promise((resolve, reject) => {
    fs.readFile('./03.写入文件内容.txt', 'utf-8', (err, content) => {
        if (err != null) {
            resolve(err);
        } else {
            console.log("文件读取成功");
            reject(content);
        }
    })
})
promise1.then(resolve => { console.log(resolve); }).catch(err => { console.log(err); })
promise.then((result) => { console.log(result); }).catch(err => { console.log(err); })
    //promis函数还可以以第一个参数的返回值作为第二个函数的输入值
promise.then(result => {
    let jsonmsg = result;
    return jsonmsg.msg;
}).then(msg => { console.log(msg); })


// promise.all和promise.race