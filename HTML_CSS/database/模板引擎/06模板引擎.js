const template = require('art-template');
const path = require('path');
// template是用来拼接字符串的,要用绝对路径

// 模板路径 绝对路径
const view = path.join(__dirname, 'index.html');
const html = template(view, {
    name: 'zhangsan',
    age: 13,
    content: '<h3>数据</h3>'
});
console.log(html);