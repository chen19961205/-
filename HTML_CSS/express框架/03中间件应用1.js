const express = require('express'); //用了express，不用再引入http模块
const app = express();

// app.use((req, res) => { //应用2：匹配所有请求，并且不让他继续往下走
//     res.send('网站正在维护');
// })

app.get('/admin', (req, res, next) => {
    let isLogin = true; //应用1：
    if (isLogin) {
        next();
    } else {
        res.send('请先登录再操作');
    }

});
app.get('/admin', (req, res) => {
    res.send({ name: 'zhangsan', age: 12 });
})


//应用3，当以上所有路由都没有匹配到，既是404未找到
app.use((req, res) => {
    res.status(404).send('404'); //可以链式调用
})
app.listen(3000);
console.log('网站服务器启动成功');