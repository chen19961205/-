const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/firstDatabase', { useNewUrlParser: true, useUnifiedTopology: true }).then(res => {
    console.log('数据库连接成功');
}).catch(err => {
    console.log('连接失败');
});

//用户集合
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    }
});
const UserL = mongoose.model('User1', UserSchema);

//文章集合
const Post = mongoose.model('Post', new mongoose.Schema({
    title: { type: String },
    //使用id将文章集合与作者集合进行关联
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User1'
    }
}));

//创建用户
// User1.create({ name: 'zhangsan' }).then(content => {
//     console.log(content);
// });
//创建文章
// Post.create({ title: '123', author: '60742a7d6c9fb353c493eefe' }).then(content => {
//     console.log(content);
// });
//联合查询

Post.find().populate('author').then((result) => {
    console.log(result);
}).catch(err => {
    console.log(err);
    const errs = err.errors;
    for (var i in errs) {
        console.log(errs[i]['message']);
    }
})