const clondeep = require('lodash/cloneDeep');
const clone = require('lodash/clone')

function qianCLON() {
    let arr1 = ['1', '2', '3'];
    let arr2 = arr1;
    arr2[1] = 100;
    console.log(arr1);
}

function deepClon1() {
    let arr1 = ['1', '2', '3'];
    let arr2 = [...arr1];
    arr2[1] = 100;
    console.log(arr1);
}

function deepClon2() {
    let arr1 = ['1', '2', '3'];
    let arr2 = Array.from(arr1);
    arr2[1] = 100;
    console.log(arr1);
}
// 对象的深度克隆
// Lodash 提供两种不同的功能，允许你进行浅拷贝和深拷贝，它们是 clone 和 clonedeep。
let testObject = {
    a: 1,
    b: 2,
    c: 3
};

function deepCloneObj1() {

    let testobj2 = clondeep(testObject)
    testobj2.a = 2;
    console.log(testObject);
}

function deepCloneObj2(obj) {
    if (obj === null) {
        return null;
    } else if (obj instanceof Array) {
        var arr = [];
        for (var i = 0, ilen = obj.length; i < ilen; i++) {
            arr[i] = obj[i];
        }
        return arr;
    } else if (obj instanceof Date || obj instanceof RegExp || obj instanceof Function) {
        return obj;
    } else if (obj instanceof Object) {
        var o = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                o[i] = deepCloneObj2(obj[i]);
            }
        }
        return o;
    } else {
        return obj;
    }
}

//once函数
function once() {
    var tag = true;
    var init = function() {
        console.log('初始化');
    }
    init();
    return function() {
        console.log('我是函数');
    }
}
let o = once();
o();
console.log('第二次执行once');
o()