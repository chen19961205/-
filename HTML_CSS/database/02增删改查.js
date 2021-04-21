const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/firstDatabase', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('连接成功');
    }).catch(() => {
        console.log('连接失败');
    })
    //创建集合规则
const FoodSchema = new mongoose.Schema({
    name: String,
    taste: String,
    level: Number
});
const Food = mongoose.model('Food', FoodSchema);
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
});

/*
//增加集合里面列
const food = new Food({
    name: '红烧狮子头',
    taste: '闲',
    level: 3
});
food.save();
Food.create({ name: '红烧豆腐', taste: '闲', level: 2 }).then((content) => console.log(content)).catch(err => console.log(err));
*/
//查找集合food的所有信息
/* 
Food.find().then(result => {
    console.log(result);
    }).catch(err => {
    console.log(err);
});
*/

//返回的数组，一组文档，，findOne返回符合条件的第一个文档
//Food.find({ name: '红烧狮子头' }).then(content => console.log(content)).catch(err => console.log(err));



//--------------------------------------------------------------------------
//对于user集合
const User = mongoose.model('User', UserSchema);
//User.find().then(result => console.log(result));
//匹配大于小于
//User.find({ age: { $gt: 20, $lt: 50 } }).then(result => console.log(result));
//匹配包含
//User.find({ hobbies: { $in: ['敲代码'] } }).then(result => console.log(result));
//选择要查询的字段,如果不想查询该字段，可以在字段前加-
//User.find().select('name email -_id').then(result => console.log(result));

//升序排序,降序排列 ‘-age’
//User.find().select('name email -_id').sort('age').then(result => console.log(result));

//limit限制查询文档数据，skip跳过多少数据

//User.find().select('name email -_id').skip(2).limit(2).then(result => console.log(result));

//删除文档
//User.findOneAndDelete({}).then(result => console.log(result));
//User.deleteMany({}).then(result => console.log(result));


//更新
//User.updateOne({ 查询条件 }, { 要修改的值 }).then(result => console.log(result));
//User.updateOne({ _id: '5c09f1e5aeb04b22f8460965' }, { hobbies: ['足球', 'lanqiu', 'ganlan'] }).then(result => console.log(result));
//User.updateMany({},{}).then();