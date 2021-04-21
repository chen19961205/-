const http = require('http');
//const url = require('url');  //之前路由选择url.parse(req.url,true)生成对象
require('./model/connect');
const Student = require('./model/student');
const getRouter = require('router');
const dataFormat = require('dateformat');
//路由选择
const router = getRouter();
const app = http.createServer();
const template = require('art-template');
const path = require('path');
const querystring = require('querystring'); //对象和字符串互相转换

//设置静态资源访问目录
const serveStatic = require('serve-static');
const serve = serveStatic(path.join(__dirname, 'public')); //指定静态资源访问目录

//配置模板
template.defaults.root = path.join(__dirname, 'views');
template.defaults.extname = '.art';
template.defaults.imports.dataFormat = dataFormat;

//信息列表目录
router.get('/index', (req, res) => {
    let html = template('index', {});
    res.end(html);
});

//学生档案目录
router.get('/list', async(req, res) => {
    //获取数据库的值
    let student = await Student.find(); //用返回值的方式去接受异步函数返回的结果，
    console.log(student);
    let html = template('list', {
        student: student
    });
    res.end(html);
});
router.post('/add', async(req, res) => {
    let formData = '';
    req.on('data', param => {
        formData += param; //数据获取
    });
    req.on('end', async() => {
        //由字符串转换为对象类型
        let student = querystring.parse(formData);
        await Student.create(student).then(() => console.log('stduent添加成功'));
        //页面重定向
        res.writeHead(301, {
            Location: '/list'
        });
        res.end();

    })
})

app.on('request', (req, res) => {
    //第三个参数是必填，表示把res和req传给router后，下一步做什么
    router(req, res, () => {
        console.log('Server把信息传递给router模块了,启动路由功能');
    });
    serve(req, res, () => {
        console.log('Server把信息传递给静态资源serve模块了，启动静态资源访问功能');
    })
});
app.listen(8080);
console.log('服务器创建成功');