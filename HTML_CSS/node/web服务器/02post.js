const http = require("http");
const querystring = require('querystring');
const app = http.createServer();
app.on("request", (req, res) => {
    //post请求是通过事件的方式接收的，data是当请求参数传递的时候触发data事件
    //end当参数传递完成时触发end事件
    let postparams = '';
    req.on('data', dataparams => {
        postparams += dataparams; //postparams是请求的是字符串

    })
    req.on('end', () => {
        // console.log(typeof(postparams));
        var qString = querystring.parse(postparams); //把string类型修改为键值对参数
        const username = qString.username;
        const pwd = qString.password;
        console.log(username + "," + pwd);
    })

})
app.listen(3000);
console.log("服务器启动成功");