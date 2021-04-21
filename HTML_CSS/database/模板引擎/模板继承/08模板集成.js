const template = require('art-template');
const path = require('path');
const dataFormat = require('dateformat'); //日期格式化
//const view = path.join(__dirname, 'index.art');

//设置模板根目录,下面只需要写根目录下的文件名就行了
// 如果文件不在根目录下，那就还得用view代替index
template.defaults.root = __dirname;
//默认模板后缀
template.defaults.extname = '.art';


//导入模板变量,template.defaults.imports.变量名=变量值;
template.defaults.imports.dataFormat = dataFormat;
const html = template('index', {
    msg: 'message',
    time: new Date()
});
console.log(html);