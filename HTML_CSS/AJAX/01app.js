const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
// const route = express.Router();
//静态资源访问服务
app.use(express.static(path.join(__dirname, 'public')));
app.get('/first', (req, res) => {
    res.send('hello,ajax请求发给了02入门html');
    console.log('first请求页面');
})

app.get('/second', (req, res) => {
    res.send({ 'name': 'zhangsan', 'age': 15 });
    console.log('second请求页面');
})

app.get('/third', (req, res) => {
    //console.log(typeof(req.query));返回的是对象
    res.send(req.query);
});


//post拦截所有请求,下面一句默认为接受name=123这样的请求参数格式
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/five', (req, res) => {
    res.send(req.body);
})


//接收json格式的请求参数类型
app.use(bodyParser.json());
app.post('/six', (req, res) => {
    res.send(req.body);
})

app.post('/six', (req, res) => {
    res.send(req.body);
})

app.post('/five', (req, res) => {
    res.send(req.body);
})

app.get('/seven', (req, res) => {
    res.send('seven页面');

})
app.get('/eight', (req, res) => {
    res.send('ajax函数封装页面');

})
app.listen(3000);
console.log('服务器ok');