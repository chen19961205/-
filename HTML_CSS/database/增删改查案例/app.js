// 1.搭建服务器，实现客户端和服务器端的通信
// 2.连接数据库，创建用户集合，向集合中插入文档
// 实现路由功能，呈现用户列表页面
// 3.当用户访问list时，所有用户信息查询出来
// 4.将用户信息和表格html进行拼接，并将拼接结果响应回去客户端
// 5.当用户访问add时，呈现表单页面，并添加用户信息功能
// 6.modify时，修改界面
// 7.delete，删除

const http = require('http');
const mongoose = require('mongoose');
const url = require('url');
const querystring = require('querystring');
//连接数据库
mongoose.connect('mongodb://localhost:27017/playground', { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log('数据库连接成功!');
}).catch((err) => {
    console.log('数据库连接失败!', err);
});

//创建用户规则
const UserSchma = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 20
    },
    age: {
        type: Number,
        min: 0,
        max: 100
    },
    password: {
        type: String
    },
    emails: {
        type: String
    },
    hobbies: {
        type: [String],
        enum: ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒']
    }
});
const User = mongoose.model('User', UserSchma);
//创建服务器
const app = http.createServer();
app.on('request', async(req, res) => {
    const method = req.method;
    const { pathname, query } = url.parse(req.url, true);
    let users = await User.find(); //获取的是promise值
    if (method == 'GET') {
        if (pathname == '/list') {
            //console.log(users);
            let list = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>用户列表</title>
            <link rel="stylesheet" href="./bootstrap.min.css">
        </head>
        <body>
            <div class="container">
                <h6>
                    <a href="/add" class="btn btn-primary">添加用户</a>
                </h6>
                <table class="table table-striped table-bordered">
                    <tr>
                        <td>用户名</td>
                        <td>年龄</td>
                        <td>爱好</td>
                        <td>邮箱</td>
                        <td>操作</td>
                    </tr>`;
            users.forEach(item => {
                list += `<tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>`;
                item.hobbies.forEach(item => {
                    list += ` <span>${item}</span>`;
                });
                list += `</td> <td>${item.emails}</td>
                    <td>
                        <a href="/delete?id=${item._id}" class="btn btn-danger btn-xs">删除</a>
                        <a href="/modify?id=${item._id}" class="btn btn-danger btn-xs">修改</a>
                    </td>
                    </tr>`;
            });

            list += `</table></div></body></html>`;
            res.end(list);
        } else if (pathname == '/add') {
            let add = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h3>添加用户</h3>
                    <form method="post" action="/add">
                      <div class="form-group">
                        <label>用户名</label>
                        <input name="name" type="text" class="form-control" placeholder="请填写用户名">
                      </div>
                      <div class="form-group">
                        <label>密码</label>
                        <input name="password" type="password" class="form-control" placeholder="请输入密码">
                      </div>
                      <div class="form-group">
                        <label>年龄</label>
                        <input name="age" type="text" class="form-control" placeholder="请填写邮箱">
                      </div>
                      <div class="form-group">
                        <label>邮箱</label>
                        <input name="email" type="email" class="form-control" placeholder="请填写邮箱">
                      </div>
                      <div class="form-group">
                        <label>请选择爱好</label>
                        <div>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="足球" name="hobbies"> 足球
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="篮球" name="hobbies"> 篮球
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="橄榄球" name="hobbies"> 橄榄球
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="敲代码" name="hobbies"> 敲代码
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="抽烟" name="hobbies"> 抽烟
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="喝酒" name="hobbies"> 喝酒
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="烫头" name="hobbies"> 烫头
                            </label>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">添加用户</button>
                    </form>
                </div>
            </body>
            </html>
        `;
            res.end(add);
        } else if (pathname == '/modify') {
            console.log(query); //因为是在list页面是往外传输的item.id，所以接受的也是id
            let user = await User.findOne({ _id: query.id }); //查询结果获取要修改的user
            let modify = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h3>修改用户</h3>
                    <form method="post" action="/modify?id=${user._id}">
                      <div class="form-group">
                        <label>用户名</label>
                        <input value="${user.name}" name="name" type="text" class="form-control" placeholder="请填写用户名">
                      </div>
                      <div class="form-group">
                        <label>密码</label>
                        <input value="${user.password}" name="password" type="password" class="form-control" placeholder="请输入密码">
                      </div>
                      <div class="form-group">
                        <label>年龄</label>
                        <input value="${user.age}" name="age" type="text" class="form-control" placeholder="请填写邮箱">
                      </div>
                      <div class="form-group">
                        <label>邮箱</label>
                        <input value="${user.email}" name="email" type="email" class="form-control" placeholder="请填写邮箱">
                      </div>
                      <div class="form-group">
                        <label>请选择爱好</label>
                        <div>
                            
                        
        `;

            let hobbies = ['足球', '篮球', '橄榄球', '敲代码', '喝酒', '抽烟'];
            hobbies.forEach(item => {
                let yesOrN = user.hobbies.includes(item);
                if (yesOrN) {
                    modify += `<label class="checkbox-inline">
                                <input type="checkbox" value="${item}" name="hobbies" checked> ${item}
                            </label>;`
                } else {
                    modify += `<label class="checkbox-inline">
                                <input type="checkbox" value="${item}" name="hobbies"> ${item}
                              </label>;`
                }
            })

            modify += `
            </div>
            </div>
            <button type="submit" class="btn btn-primary">修改用户</button>
          </form>
      </div>
  </body>
  </html>
`;
            res.end(modify);

            res.writeHead(301, {
                Location: '/add'
            })
        } else if (pathname == '/delete') {
            let user = await User.findOneAndDelete({ _id: query.id });
            res.writeHead(301, {
                Location: '/list'
            });
            res.end();
        }


    } else if (method == 'POST') {
        if (pathname == '/add') {
            let formData = ``;
            req.on('data', (param) => {
                formData += param;
            });
            req.on('end', async() => {
                const user = querystring.parse(formData);
                console.log("post下的", user); //因为user是对象，不是字符串所有要加，不能是+
                //将用户信息提交到数据库中
                await User.create(user);
                res.writeHead(301, { //301代表重定向
                    Location: '/list' //重定向到list下
                });
                res.end();
            });
        } else if (pathname == '/modify') {
            let formData = ``;
            req.on('data', (param) => {
                formData += param;
            });
            req.on('end', async() => {
                const user = querystring.parse(formData);
                //console.log("post下的", user); //因为user是对象，不是字符串所有要加，不能是+
                //将用户信息提交到数据库中
                await User.updateOne({ _id: query.id }, user);
                res.writeHead(301, { //301代表重定向
                    Location: '/list' //重定向到list下
                });
                res.end();
            });
        }
    }
});
app.listen(3000);
console.log("服务器已经启动");