const express = require('express'); //用了express，不用再引入http模块
const app = express(); //直接创建网站服务器
app.get('/', (req, res) => { //send()类似res.end()
    res.send('hello,express');
    // 1.自动检测响应类型
    // 2.自动设置http状态码
    // 3.设置响应内容类型和编码
    // 4.当路由不存在会自动显示路由不存在，Cannot GET /list

});
app.get('/list', (req, res) => {
    res.send({ name: 'zhangsan', age: 12 });
})
app.listen(3000);
console.log('网站服务器启动成功');