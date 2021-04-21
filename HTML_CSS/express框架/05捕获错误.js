const express = require('express'); //用了express，不用再引入http模块
const fs = require('fs');
const promisify = require('util').promisify; //把读取文件方法封装成异步方法
const readFile = promisify(fs.readFile);
const app = express();

app.use('/index', async(req, res, next) => {
    try {
        await readFile('03.txt');
    } catch (ex) {
        next(ex);
    }
});
app.use((err, req, res) => {
    res.status(500).send(err.message);
})
app.listen(3000);
console.log('网站服务器启动成功');