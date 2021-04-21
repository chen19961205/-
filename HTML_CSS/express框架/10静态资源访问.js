const express = require('express');
const path = require('path');
//创建服务器
const app = express();


let pa = path.join(__dirname, 'public');
app.use(express.static(pa)); //http://localhost:3000/css/index.css
//还可以定义一个虚拟路径，
app.use('static', express.static(pa)); //http://localhost:3000/static/css/index.css

app.listen(3000);