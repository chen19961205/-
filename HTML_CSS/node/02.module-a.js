const add = (n1, n2) => n1 + n2;
//文件导出第一种方式
//exports.add = add; //第一个add是上行的add，第二个add是自我定义的add函数

//文件导出第二中方式
module.exports.add = add;

//区别
/*
exports是module.exports的别名（地址引用关系），导出对象最终以module.exports为准，两者指向不是一个对象时，尽管内容相同
*/
const b = 3;
exports.b = b; //导出的是{ add: [Function: add], b: 3 }

module.exports = { //当重新对module赋值时
    name: "zhangsan" //{ name: 'zhangsan' }
}