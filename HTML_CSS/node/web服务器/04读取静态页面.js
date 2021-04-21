const http = require("http");
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime')
const app = http.createServer();
app.on("request", (req, res) => {
    let pathname = url.parse(req.url, true).pathname; //请求路径
    let realPath = path.join(__dirname, pathname); //路径拼接
    let contentType = mime.getType(realPath); //获取文件内容类型
    console.log(contentType);
    // console.log(realPath);
    fs.readFile(realPath, (err, content) => {
        if (err != null) {
            res.writeHead(404, {
                'content-type': contentType + 'charset=utf-8'
            })
            res.end("文件读取失败");
            return;
        } else {
            res.writeHead(200, {
                'content-type': contentType
            })
            res.end(content); //输出文件内容  显示直接下载
            return;
        }



    })
})
app.listen(3000);
console.log("服务器启动成功");