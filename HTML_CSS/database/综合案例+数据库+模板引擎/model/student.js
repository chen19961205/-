const mongoose = require('mongoose');
require('./connect');
//创建字段
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 2
    },
    age: {
        type: Number,
        max: 80,
        min: 18
    },
    sex: {
        type: String,
        // required: true,
    },
    email: {
        type: String
    },
    hobbies: {
        type: [String],
        enum: ['敲代码', '打篮球', '睡觉']
    },
    collage: String,
    enterDate: {
        type: Date,
        default: Date.now
    }
});
const Student = mongoose.model('Student', StudentSchema);
//student信息导出
module.exports = Student;
//Student.create({ name: '小胖', age: 25, sex: '男', email: '123@it.cn', hobbies: ['敲代码'], collage: 'qufu' }).then(() => console.log('创建成功'));