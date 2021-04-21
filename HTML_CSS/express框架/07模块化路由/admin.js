//辅助
const express = require('express');
//服务器
const app = express();
//创建路由
const admin = express.Router();
admin.get('/index', (req, res) => {
    res.send('admin首页');
});
module.exports = admin;