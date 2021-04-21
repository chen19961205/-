//同步API：只有当前API执行完，才能执行下一个API
console.log('before');
setTimeout(() => {
    console.log('last');
}, 1000);
console.log('after');
//同步api可以在返回值中拿到api执行的结果，异步api不可以
function sum(n1, n2) {
    return n1 + n2;
}
const result = sum(10, 20);
console.log(result);

function getMes() {
    setTimeout(() => {
        return { msg: 'Hello ,Node.js' }
    }, 0);
}
const msg = getMes();
console.log(msg); //不能拿到函数返回值，因为默认返回undefined，然后再一秒后赋值
console.log(typeof(msg));

// 同步api可以从返回值拿信息，异步api不可以，但是异步api可以通过回调函数拿信息