//主页面
const express = require('express');
const admin = require('./admin');
const home = require('./home');
//服务器
const app = express();
//创建路由
const route = express.Router();
app.use('/home', home); //http://localhost:3000/home/index
app.use('/admin', admin); //http://localhost:3000/admin/index

app.listen(3000);
console.log('服务器ok');