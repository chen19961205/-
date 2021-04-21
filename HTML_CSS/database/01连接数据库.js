const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/firstDatabase', { useUnifiedTopology: true, useNewUrlParser: true }).then(() => { //如果没有这个数据库会自动帮我们创建
    console.log('数据库连接成功!');
}).catch((err) => {
    console.log('数据库连接失败！', err);
})


//创建集合规则  1.对集合设定规则  2创建集合
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});
//创建集合并应用规则
const Course = mongoose.model('Course', courseSchema); //实际在数据库中创建集合名字为courses
//必须为集合插入数据才能认为集合创建成功
//第一种插入文档方式
const course = new Course({
    name: '语文',
    author: '张老师',
    isPublished: true
});
course.save();
//第二中插入文档方式
Course.create({ name: '数学', author: '李老师', isPublished: true }, (err, doc) => {
    if (err != null) {
        console.log(err);
    } else {
        console.log(doc);
    }
});
//第三种插入+promise属性
Course.create({ name: '英语', author: '王老师', isPublished: true }).then(doc => console.log(doc)).catch(err => console.log(err));