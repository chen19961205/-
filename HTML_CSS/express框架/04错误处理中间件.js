const express = require('express'); //用了express，不用再引入http模块
const fs = require('fs');
const app = express();
//只能读取同步错误处理中间件，对于异步只能手动触发
app.use('/index', (req, res, next) => {
    throw new Error('程序发生未知错误');
});
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
})

//异步处理
app.use('/', (req, res, next) => {
    fs.readFile('01.txt', (err, result) => {
        if (err) { //有错
            next(err);
        } else {
            res.send(result);
        }
    })
});
app.use((err, req, res) => {
    res.status(500).send(err.message);
})
app.listen(3000);
console.log('网站服务器启动成功');