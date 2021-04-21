//为了更好让art-template模板引擎和express框架配合，封装了express-art-template

const express = require('express');
const path = require('path');
const app = express();


//使用express-art-template渲染以art为后缀的文件
app.engine('art', require('express-art-template'));
//设置模板存放目录 ;第一个参数是express配置项名字，第二个是文件夹名字
app.set('views', path.join(__dirname, 'views'));
//渲染模板时不写后缀，默认拼接art后缀
app.set('view engine', 'art');

//公共数据代码 users是自己起的别名
app.locals.users = [{
    name: 'zhangsan',
    age: 15
}, {
    name: 'lisi',
    age: 18
}];


app.get('/index', (req, res) => {
    //render做的事情
    /*
    1.拼接模板路径，模板后缀，哪一个模板和哪一个数据拼接，拼接结果响应给客户端
    */
    res.render('index.art', {
        msg: 'message'
    });
});

app.get('/list', (req, res) => {
    res.render('list.art', {
        msg: 'list message'
    });
});
app.listen(3000);