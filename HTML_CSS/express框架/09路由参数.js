const express = require('express');
//创建服务器
const app = express();
app.get('/index/:id/:name/:age', (req, res) => {
    res.send(req.params); //上边这种情况用params     //  没有？只有/
    console.log(req.route);
    console.log(req.url);

    // console.log('到了home、index');
});
app.get('/add', (req, res) => {
    console.log(req.query); //http://localhost:3000/add?name=zhangsan
});

app.listen(3000);