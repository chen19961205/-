function test01() {
    function Person(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.sayHello = sayHello
    }

    function sayHello() {
        return "我是" + this.name + ",我" + this.age + "岁了,我是" + this.sex + "孩";
    }
    Person.prototype.toString = function() {
        return "名字:" + this.name + ",年龄：" + this.age + ",性别：" + this.sex + ".\n" + this.sayHello();
    }
    var per1 = new Person("张三", 24, "男");
    var per2 = new Person("李四", 25, "女");
    // document.writeln(per1);
    // console.log(per2);
    var perArr = [per1, per2];
    var preArr2 = [];
    for (var i = 0; i < perArr.length; i++) {
        if (perArr[i].age > 24) {
            preArr2.push(perArr[i]);
        }
    }
    document.write(preArr2);
}

//数组Array()
/*
 *如果读取不存在的索引，不会报错而是返回underfined
 */
function test02() {
    var arr = new Array();
    console.log(arr.length);
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
    arr[3] = 4;
    arr[4] = 5;
    arr[5] = 6;
    arr[6] = 7;
    arr.push(4); //从数组后面开始加入，返回新长度
    arr.unshift(0); //从数组前面加入。返回新长度
    arr.pop(); //从数组后面开始删除，返回删除元素
    arr.shift(); //从数组前面删除，返回删除元素
    document.writeln(arr);

    //forEach遍历,由我们创建，但是不由我们调用，我们称为回调函数，数组中有几个元素就执行几次
    //第一个参数：当前遍历元素；第二个参数：索引；第三个参数：整个数组
    arr.forEach(function(value, index, obj) {
        console.log(index + "--" + value);
    });

    //slice用法，从数组中提取元素
    var arr2 = arr.slice(1, -1);
    document.writeln("------" + arr2);
    //splice用法，用于删除数组中指定元素,返回删除的元素
    var arr3 = arr.splice(1, 3);
    document.writeln(arr3);
    document.writeln(arr);
    //splice里面有三个参数,前两个是删除开始位置和删除的个数，第三个是代替值，代替到前面属性中
    document.writeln("<br>");
    var arr4 = ["111", "222", "333", "444", "555"];
    var result = arr4.splice(0, 1, "牛魔王");
    document.writeln(result);
    document.writeln("<br>");
    document.writeln(arr4);
    //去除数组中重复的数值
    var arr5 = [1, 2, 3, 3, 34, 4, 6, 6, 7, 1];
    for (var i = 0; i < arr5.length; i++) {
        for (var j = i + 1; j < arr5.length; j++) {
            if (arr5[i] == arr5[j]) {
                arr5.splice(j, 1);
                j--; //删除后要回退一格
            }
        }
    }
    document.writeln(arr5);
}

//数组测试
function test03() {
    //concat()连接两个字符串,返回新的字符串
    var arr = ["孙悟空", "猪八戒", "沙和尚"];
    var arr1 = ["白骨精", 1, 2];
    var arr2 = arr.concat(arr1);
    document.writeln(arr2);
    //join（）该方法可以将数组转换为一个字符串 
    document.writeln(typeof arr2);
    arr2 = arr2.join();
    document.writeln(arr2);
    document.writeln(typeof arr2);
}
//Sort对数组进行排序
function testSort() {
    var arr = new Array(6);
    arr[0] = "10"
    arr[1] = "5"
    arr[2] = "40"
    arr[3] = "25"
    arr[4] = "1000"
    arr[5] = "1"

    function sortNumber(a, b) {
        return b - a; //a-b升序  b-a降序
    }
    document.writeln(arr.sort(sortNumber));
}
//apply前边必须是function调用
function testApplyAndThis() {
    function fun() {
        document.writeln("我是fun函数" + this.name);
    }
    //函数也是有方法的,call apply
    fun.call(); //我是fun函数[object Window] 
    fun.apply(); //我是fun函数[object Window]
    fun(); //我是fun函数[object Window]

    var obj = {
        name: "zhangsan",
        sayName: function() {
            document.writeln(this.name);
        }
    }
    var obj2 = {
        name: "lisi",
        sayName: function() {
            document.writeln(this.name);
        }
    }
    fun.call(obj); //我是fun函数[object Object] 
    fun.call(obj2); //我是fun函数[object Object] 

    function fun2(a, b) {
        console.log(this.name);
        console.log("a=" + a + ",b=" + b);
    }
    fun2.call(obj2, 2, 3); //函数的call中的实参是一个个传递
    fun2.apply(obj, [2, 3]); //函数的apply中的实参是要封装到一个数组里传递

    /*
    *this的情况
    *1.以函数的方式调用，this永远是window
    2.以方法的形式调用，this是调用方法的对象
    *3.以构造函数的形式调用时，this是新创建的那个对象
    *4，以函数的apply和call函数调用时，this是指定的对象
    */
}

function testArguement() {
    //在调用函数时，浏览器每次都会传递两个隐含的参数 1.函数的上下文对象 2.封装实参的对象arguments(类数组对象)
    //arguments是可以判断传入函数的实参数量，也可以通过arguements[0] [1]取出所传入的实参
    function fun() {
        console.log(arguments);
        for (var i in arguments) { //必须是arguements
            console.log(arguments[i]);
        }
    }
    fun("hello", true, false);
}