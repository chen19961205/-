const fs = require('fs');
// promise解决回调地狱问题
function promise(filePath) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

function test01() {
    promise('./1.txt')
        .then(function(data) {
            console.log(data);
            return promise('./2.txt')
        })
        .then(function(data) {
            console.log(data);
            return promise('./3.txt')
        })
        .then(function(data) {
            console.log(data);
        })
        .catc
    h(err => {
        console.log('err:' + err)
    })
}

//genertor
function* f() {
    yield 'hello';
    yield 'generator';
    return '1';
}

for (let i of f()) {
    console.log(i);
}