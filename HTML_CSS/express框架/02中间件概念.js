const express = require('express'); //用了express，不用再引入http模块
const app = express(); //直接创建网站服务器

app.get('/', (req, res, next) => { //send()类似res.end()
    req.name = 'zhangsan';
    //res.send('hello,express'); //每次只能响应一次
    next();

});
app.get('/', (req, res, next) => {
    res.send(req.name);
    // next();
});

app.use((req, res, next) => {
    console.log(req.url);
    next();
});
//第一个参数请求地址,可省略
app.use('/admin', (req, res, next) => {
    console.log(req.url);
    next();
})


app.listen(3000);
console.log('网站服务器启动成功');