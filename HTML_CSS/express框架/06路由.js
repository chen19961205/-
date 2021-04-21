const express = require('express');
//创建服务器
const app = express();
//创建路由
const home = express.Router();
//路由和请求路径进行匹配
app.use('/home', home); //一级路由，表示下面get是要在一级路由基础上响应
home.get('/index', (req, res) => {
    res.status(200).send('body')
    console.log('到了home、index');
});
app.listen(3000);