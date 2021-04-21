function Animal(name) {
    this.name = name || 'animals';
    this.sleep = function() {
        console.log(this.name + "is sleeping");
    }
}
Animal.prototype.eat = function(food) {
    console.log(this.name + "is eating" + food);
}

//原型链继承
function Cat() {}

function test01() {
    // 原型链继承
    Cat.prototype = new Animal();
    Cat.prototype.name = 'cat';
    var cat = new Cat();
    console.log('cat的name是' + cat.name);
    console.log('eat' in cat);
    console.log(cat instanceof Animal); //true
    //不可实现多继承

}
test01();

function Dog(name) {
    Animal.call(this); //构造函数继承
    this.name = 'zhangsan'
}

function test02() {
    var dog = new Dog();
    console.log(dog.name);
    console.log(dog.eat('rou')); //报错
    console.log(dog.sleep());
    console.log(dog instanceof Animal); //false
    //可实现多继承，只能继承父类实例和方法，不能继承原型上的属性和方法
}

//寄生组合继承=

//使用构造继承来继承父类定义的属性和方法
//使用立即执行函数来充当一个新的类，然后这个新的类原型继承父类，再用cat类原型继承新的类--》访问父类的原型属性
//建议使用该类方式
function Bird(name) {
    Animal.call(this); //gouzao
    this.name = name;
}
(function() {
    var Super = function() {};
    Super.prototype = new Animal('name');
    Bird.prototype = new Super();
})

function test03() {
    var bird = new Bird('zhangsan');
}


//class继承
class Animal1 {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log(this.color);
    }
}
class Dog1 extends Animal1 {
    constructor(color, name) {
        super(color);
        this.name = name;
    }
    say() {}
}
class Cat1 extends Animal1 {
    constructor(color, name) {
        super(color);
        this.name = name;
    }
    say() {}
}