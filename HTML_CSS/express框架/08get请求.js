const express = require('express');
const bodyParser = require('body-parser'); //支持post请求的包
const app = express();
//get
app.get('/index', (req, res) => {
    console.log(req.query); //返回的是对象不是字符串   { name: 'zhangsan', pwd: '456' }
    res.send(req.url); // /index?name=zhangsan&pwd=456
    console.log(req.path); //   /index
    //req.router  是对整个路由信息进行获取

});

//post
//拦截所有请求  
// extended:true 使用第三方模块qs处理请求参数格式
// false在内部使用querystring模块处理请求参数格式
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/add', (req, res) => {
    // body方法是bodyParser在req中添加的参数
    res.send(req.body); //{"name":"chen","pwd":"123"}
});

app.listen(3000);
console.log("服务器ok");