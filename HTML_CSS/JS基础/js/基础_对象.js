function exampleOne() {
    console.log(Number.MAX_VALUE * Number.MAX_VALUE);
    // 强制类型转换，主要把数据类型转换为String Number Boolean
    var a = "123abc";
    var b = "123abc";
    var c = "123abc";
    console.log(typeof a + ":" + a);
    b = Number(b);
    console.log(typeof b + ":" + b);
    c = parseInt(c);
    console.log(typeof c + ":" + c);
    //字符串中使用转义字符输入unicode编码
    console.log("\u2620"); //\u显示十六进制，如果对于在html页面显示unicode字符编码&#十进制数  &#9760
}

function CreateObjectByZiMianLiang() {
    /*
    使用对象字面量创建对象
    */
    var obj1 = {};
    obj1.sex = "女";
    console.log(obj1);
    var obj2 = { name: "zhangsan", age: "18" };
    console.log(obj2);
}

function covertHex() {
    var a = "123";
    var b = parseInt(a);
    document.write(b + "\n");
    document.write(b.toString(16) + "\n");
    var c = b.toString(2) + "\n";
    document.write(c + "\n");
    var d = parseInt("123", 2);
    document.write("d:" + d);

}

function primeTest() {
    var num = prompt("请输入一个大于1的整数：");
    var flag = true;
    if (num == 1) {
        flag = false;
    }
    for (var i = 2; i < num / 2 + 1; ++i) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag) alert(num + "是质数");
    else alert(num + "不是质数");

}
// console.time("primeTest");
// primeTest();
// console.timeEnd("primeTest");
function testAttribute() {
    var obj = new Object();
    obj.name = "张三";
    obj.var = 123;
    obj["123"] = 456; //obj.123=223;显示报错，使用特殊属性名，采用  对象["属性名"]=属性值
    var obj2 = new Object();
    obj2.name = "张小三";
    obj2.var = 456;
    obj["456"] = 789;
    obj.son = obj2; //还可以指定一个对象
    document.write(obj.name + "," + obj.var+"," + obj["123"] + "," + obj.son + "\n");

    //in运算符
    //通过该运算符可以检查一个对象中是否含有指定的属性，如果有则返回true，没有则返回false
    //语法： “属性名” in 对象   返回值为true或者false

    document.write("son" in obj);
}

function testSayHello() {
    // function sayHello(name, age, gender) {
    //     document.write("我是" + name + ",我" + age + "岁了，我性别" + gender);
    // }
    var obj = {
        name: "张三",
        age: 18,
        gender: "男"

    }

    function sayHello(obj) {
        document.write("我是" + obj.name + ",我" + obj.age + "岁了，我性别" + obj.gender);
    }

    function testShiCan() {
        sayHello(obj);

    }
}

//立即执行函数
/*
 *函数被定义完后立即执行该函数
 *立即执行函数往往只执行一次
 */
(function(a) {
    alert("此函数是立即执行函数" + "\n" + "a的值为" + a);
})(13);

function testObj() {
    var obj = new Object();
    obj.name = "zhan";
    obj.age = 18;
    obj.sayHello = function() {
        document.write("sayHello,,");
    };
    obj.sayHello();

    //第二种方法
    var obj1 = {
        name: "lisi",
        age: 17,
        gender: "女",
        sayName: function() {
            document.write(obj1.name);
        }
    };
    obj1.sayName();
}

function testMeiJu() {
    var obj1 = {
            name: "孙悟空",
            age: 18,
            gender: "男"
        }
        //枚举对象中的属性 for  in
    for (var i in obj1) {
        document.writeln(i + ":" + obj[i]);
    }
}

//---------------------------------------------------------------------------------------------------------
var a = "我是全局变量的a";

function testLocalAndGobalVariable() {
    var a = "我是函数里面的a";

    function testLocal() {
        document.writeln(a);
        document.writeln(window.a); //想要调用全局变量，需要加window
    }
    testLocal();
}

function fun() {
    document.writeln(a);
    a = "我是fun中的a"; //如果加var会出现提前在函数执行最开始声明有a存在，但是赋值在后面，结果会显示underfinded
    b = 10; //r如果不写var声明，则认为是全局变量
}
//fun();
// testLocalAndGobalVariable();
//---------------------------------------------------------------------------------------------------------
//this操作 this指向函数执行上下文对象，根据函数调用方式的不同，this指向不同的的对象，

function testThis() {
    console.log(this.name);
}
var obj = {
    name: "zhangsan",
    sayName: testThis
};
//obj.sayName(); //显示{name：zhangsan,sayName:f}  [object,object]   显示“zhangsan”
//testThis(); //[object Window] 显示self是window  结果“”

//----------------------------------------
//使用工厂模式创建对象+构造函数
/*
 *构造函数执行流程:1.立即创建一个新的对象。2.将新建的对象设置为函数中this，在构造函数中使用this来引用新建的对象
 *3.逐行执行函数中的代码 4.将新建的对象作为返回值返回
 *使用instanceof可以判断是否是一个类的实例。
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        document.writeln("hello,I'm" + this.name);
    }
}

//Person2比Person性能高，因为执行person100次就会调用sayhello方法100次，浪费资源；
//person2直接只调用一次，使用同一个方法。但是函数sayname定义在全局作用域中，会污染全局作用域命名空间，也很不安全
function Person2(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = sayname
}

Person2.prototype.toString = function() {
    return "名字:" + this.name + ",年龄：" + this.age + "," + this.sayHello;
}

function sayname() {
    document.writeln("hello,I'm" + this.name);
}


function testPerson() {
    var per = new Person2("zhangsan", 18); //当做构造函数来调用，加new是构造函数，不加new是普通函数
    var per1 = new Person2("lisi", 12);
    per.sayHello();
    per1.sayHello();
    //document.writeln(per instanceof Person2);
    document.writeln(per.sayHello == per1.sayHello);
    console.log(per); //输出是per的tostring（），但是把per的tostring写进去值了,所以显示json格式字符串
    console.log(per1);

}
testPerson();
//每一个函数都有个prototype，原型对象相当于公共区域，所有同一类的实例都可以访问这个原型对象。
//我们可以将对象中的共有内容，统一设置到原型对象中去。原型对象是一个公共的区域
function Myclass(name) {
    this.name = name;
}

function testClass() {
    Myclass.prototype.a = 123;
    var mc = new Myclass("zhangsan");
    var mc2 = new Myclass();
    mc.a = "456";
    mc2.name = "zhangsan";
    console.log(mc.__proto__ == Myclass.prototype); //true
    console.log(mc.a); //先在mc中找a，找不到再去原型中找
    console.log("has:" + mc.hasOwnProperty("a"));

    //使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true
    //也可以通过hasOwnProperty()方法来查看原型中是否有对象方法。
    console.log("name" in mc2);
    console.log("-----------");
    console.log(mc); //实际输出是mc.toString();
    console.log(mc.__proto__.__proto__.hasOwnProperty("toString")); //原型的原型
}