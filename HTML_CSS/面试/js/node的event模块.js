//事件模块  events只对外暴露一个对象，就是EventEmitter,EventEmitter作用只有2个，

//分别是：事件的发射和事件的监听。

/*const EventEmitter = require("events");
class Player extends EventEmitter {}
let player = new Player();
// player.once('hello', (person) => {    once只会触发一次
//     console.log(`向${person}打招呼`);
// });
//注册事件on
player.on('hello', (person) => {
    console.log(`向${person}打招呼`);
});
player.emit('hello', 'zhangsan');
player.emit('hello', 'lisi');
*/



/**
 * 1.1简单使用
 * addListener(event,lister) 为指定事件添加一个监听器到监听器数组的尾部
 * on(event,lister) 为指定事件注册一个监听器，接受一个字符串event和一个回调函数
 * setMaxListeners(n)  设置最大监听数量,默认是10个
 * 如果同一监听名字下on或者listeren超过10个就会报错
 * 移除某个事件的某一个监听器--life.removeListener(event, listener);
 * EventEmitter.listenerCount(emitter, event) 得到监听器名为event的数量
 * emitter.listeners(event) 获取监听器名为event的数量，可以不加event就是获取所有的监听器数量
 */
var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();
life.setMaxListeners(11);
//求安慰
function waster(who) {
    console.log('给' + who + '倒水');
}
life.addListener('求安慰', waster);

life.addListener('求安慰', function(who) {
    console.log('给' + who + '揉肩');
});

function cook(who) {
    console.log('给' + who + '做饭');
}
life.on('求安慰', cook); //注册事件
life.on('求安慰', function(who, city, age) {
    console.log('去' + city + '在' + age + '岁的时候');
})

//移除某个事件的某一个监听器
life.removeListener('求安慰', cook);


//emit(event, 参数1, 参数2,参数3) 传递多个参数的时候
var anwei = life.emit('求安慰', 'chen', '北京', '25');
var niai = life.emit('溺爱', 'yuan');
console.log(anwei);
console.log(niai); //因为没有溺爱的监听器，所以为false

//判断事件拥有的监听器的数量listener(event)
console.log(life.listeners('求安慰').length);
var count = EventEmitter.listenerCount(life, '求安慰');
console.log(count);