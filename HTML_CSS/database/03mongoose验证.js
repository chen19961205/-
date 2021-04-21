const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/firstDatabase', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('连接成功');
}).catch(() => {
    console.log('连接失败');
})

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        //必选字段,不传title字段会报错
        require: [true, '请传入文章标题'],
        minlength: 2,
        maxlength: 5,
        trim: true //去除字符串两边空格
    },
    age: {
        type: Number,
        min: 10,
        max: 100
    },
    publishDate: {
        type: Date,
        default: Date.now //默认值现在
    },
    category: {
        type: String,
        enum: ['html', 'js', 'jquery'] //只能在这三个里面选
    },
    author: {
        type: String,
        validate: {

            validator: (v) => { //用户自定义，返布尔值，v是要验证的值
                return v && v.length > 4;
            },
            message: '传入的值不对' //自定义错误信息
        }
    }
});
const Post = mongoose.model('Post', postSchema);
Post.create({
    title: 'abc',
    age: 18,
    category: 'java',
    author: '111'
}).then(result => console.log(result)).catch(err => {
    //对错误值只传输相应的错误消息
    const errs = err.errors;
    for (var attr in errs) {
        console.log(errs[attr]['message']);
    }
});