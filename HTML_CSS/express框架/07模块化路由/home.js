//辅助
const express = require('express');
//服务器
const app = express(); //服务器调用的是一级路由
//创建路由,
const home = express.Router(); //路由调用的是二级路由
home.get('/index', (req, res) => {
    res.send('home首页');
});
module.exports = home;