function testDate() {
    var d = new Date();
    console.log(d.toJSON());
    var timestamp = d.getTime();
    console.log(timestamp); //时间戳，是指从格林威治标准时间1970年一月一日0时0秒0分到现在所花费的毫秒数
    var time = Date.now(); //获取执行到这一行的时间戳
    console.log(time);

}

function testPacketClass() {
    var num = 123; //num是基本数据类型
    var num1 = new Number(123); //Number boolean String 会把基本数据类型转换为引用数据类型 num1是基本对象
    var num2 = new Number(123);
    console.log(typeof num); //number
    console.log(typeof num1); //object  
    //基本对象可以往里面添加属性，但是基本数据类型就不可以
    num.a = 111;
    num1.a = 111;
    console.log(num.a); //underfined
    console.log(num1.a); //111
    console.log(num == num2 && num == num1); //true 因为系统给做了类型转换
    console.log(num === num1); //false  因为地址不一样，虽然内容一样
    console.log(num2 == num1); //false  对象比较的是两个内存地址
}

function testString() {
    var str = "Hello Atguigu";
    var result = str.charAt(0); //charAt()f返回索引指定的字符
    var result1 = str.charCodeAt(0); //返回自定位置的unicode编码
    //根据unicode字符编码去获取字符
    var result2 = String.fromCharCode(62);
    console.log(result + "," + result1 + "," + result2);
    document.writeln(str.link("www.baidu.com"));
}
//正则表达式
function testZZBDS() {
    //语法:   var 变量=new RegExp("正则表达式","匹配模式");  RegExp 对象用于存储检索模式。
    //i为忽略大小写，g为全局匹配模式
    var reg = /A/i;
    var str = "abaac";
    console.log(reg.test(str)); //true
    var pat1 = /a/g;
    var pat2 = /a|b/; //a|b==[ab]
    var pat3 = /[a-z]|[A-Z]/;
    document.writeln(pat3.test(str));
    document.writeln(str.match(pat3));

    //提取所有字母
    str1 = "1a2b3c4d5e6f";
    var result = str1.match(/[A-z]/g);
    console.log(result);

    //replace()
    //可以将字符串中指定内容替换为新的内容
    result = str.replace(/a/g, "*");
    console.log(result);
    result = str1.split(/[a]/g, 8); //以第一个参数为切割依据进行切割;第二个返回数组最大长度，返回的值不会多于此数
    console.log(result);

    //创建正则表达式判断字符串中是否含有aaa
    var pat4 = /aaa/g;
    var str3 = "abc";
    console.log(pat4.test(str3));
    var pat5 = /a{3}/; //出现a三次以上{n}正好出现n次
    console.log(pat5.test("aaaabc"));
    var pat5 = /(ab){3}/;
    console.log(pat5.test("ababab"));
    var pat6 = /(ab){1,3}/; //一次到三次{m,n} m到n次
    var pat6 = /(ab){1,}/; //至少一次
    var pat6 = /ab+c/; //至少一个
    var pat6 = /(ab)*/; //0个或者多个{0,} b可以0到多个，但是一定要有a 如果（ab）*就是ab可以有0到多个
    var pat6 = /ab?c/; //0个或一个
    var pat6 = /^a/; //以a开头
    var pat6 = /[^a]/; //不包含a
    var pat6 = /b$/; //以b结尾
    //判断是否是手机号,并且11位
    var pat6 = /(^1)[3-9][0-9]{9}$/;
    console.log(pat6.test("14354816997"));
    var pat6 = /\./; //.表示任意字符，\.表示转义字符.
    console.log(pat6.test("14.354816997"));

    var pat6 = /\w/; //任意字母数字下划线[A-z0-9_]
    var pat6 = /\W/; //除了字母数字下划线^[A-z0-9_]
    var pat6 = /\d/; //任意数字[0-9]
    var pat6 = /\D/; //除了数字[^0-9]
    var pat6 = /\s/; //空格
    var pat6 = /\S/; //除了空格
    var pat7 = /\b/; //单词边界,独立的单词，要找child 写了children 就需要child ren分隔开才显示true
    var pat8 = /\B/; //除了单词边界
    console.log(/\bchild\b/.test("hello children")); //F
    console.log(/\bchild\b/.test("hello child ren")); //T
    console.log(/\Bchild\B/.test("hellochildren")); //T
    console.log("," + "     hello   sir        ".replace(/^\s*|\s*$/g, "") + ","); //删除开头结尾的所有空格
    //电子邮件表达式
    //任意字母数字下划线  . 任意字母下划线（可有可无*）  @   字母数字+(2-5)   .com.cn
    var pat9 = /\w{3,}(\.\w+)*@[A-z0-9]+\.com|cn]/
    console.log(pat9.test("1538535475@qq.com"));

}
testZZBDS();