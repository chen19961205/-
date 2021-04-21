const http = require('http');
const url = require('url'); //node.js有内置模块使得url字符串可以实现切割，url模块只是处理请求地址的

const app = http.createServer();
app.on("request", (req, res) => { //req请求对象，请求相关信息，res响应
    //console.log(req.method); //获取是get还是post
    const method = req.method;
    const Rurl = req.url;
    const headers = req.headers;

    //console.log(url.parse(Rurl, true)); //有两个参数，1.要解析的url地址  2把查询结果参数是否解析为对象
    /* let params = url.parse(Rurl, true).query;
     let name = params.name;
     let pwd = params.pwd; //获取解析到的参数信息*/
    //上三行的简写
    let { query, pathname, path } = url.parse(Rurl, true); //es6语法()=>{}
    console.log(query.name);
    console.log(path);



    if (pathname == '/index' || pathname == '/') {
        //http状态码标识可以自己设置
        //res.writeHead(200);
        res.end("<h1>Hello,Welcome to homePage</h1>");
        //console.log(headers['accept']); //获取头信息中个别信息
    } else if (pathname == '/list') {
        res.end("Hello,Welcome to ProduceList");
    } else {
        res.end("not found");
    }


})
app.listen(3000);
console.log("服务器已经启动");