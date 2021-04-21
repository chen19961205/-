//路由是指的客户端请求地址与服务端程序代码的对应关系，请求什么响应什么，baidu.com/index 请求百度主页面；baidu.com/read 请求百度文库

/*
1.引入系统模块http
2.创建网站服务器
3.为网站服务器对象 添加请求事件
4.实现路由功能
*/
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const app = http.createServer();
app.on("request", (req, res) => {
    var Rmethod = req.method; //获取请求方式
    var Rurl = req.url; //请求地址

    //解决乱码问题
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf-8'
    })

    if (Rmethod == 'GET') {
        const getParams = url.parse(Rurl, true);
        const getPathname = getParams.pathname; //请求地址  /index   query是{username  pwd}
        console.log('请求地址是' + getPathname);

        if (getPathname == '/' || getPathname == '/index') {
            res.end('首页');
        } else {
            res.end("404");
        }

    } else if (Rmethod == 'POST') {
        console.log('postUrl:' + Rurl);

        if (Rurl == '/' || Rurl == '/index' || Rurl == '/listPost') {
            res.end('首页');
        } else {
            res.end("404");
        }

    } else {
        console.log('404，不是post，也不是get方法');
    }


})
app.listen(3000);
console.log('服务器创建成功');