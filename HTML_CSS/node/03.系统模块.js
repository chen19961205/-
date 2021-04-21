const fs = require('fs');
const path = require('path');

/*fs.readFile('./03.系统模块.js', 'utf-8', (err, context) => {        //相对路径
    if (err == null) { //如果文件读取成功为null，失败为错误对象
        // console.log(context); //为文件内容
    } else {
        console.log(err);
    }
})*/
//__dirname为当前执行的文档所在位置
fs.readFile(path.join(__dirname, '03.系统模块.js'), 'utf-8', (err, context) => { //绝对路径
    if (err == null) { //如果文件读取成功为null，失败为错误对象
        // console.log(context); //为文件内容
    } else {
        console.log(err);
    }
})

var text = "要写入的文件内容值";
fs.writeFile('./03.写入文件内容.txt', text, (err) => {
        if (err != null) {
            console.log(err);
        } else {
            console.log("文件写入成功");
        }
    })
    //路径拼接
var p = path.join('HTML_CSS', 'node', '03.系统模块.js');
console.log(p);