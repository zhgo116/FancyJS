
/**
 *
 * inherited是基与原型的继承，call是基于对象继承，可以获取对象方法
 *
 **/


var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
    console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
    console.log('监听器 listener2 执行。');
}

// 绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。")
eventEmitter.addListener('error', function (t) {
    console.log("我就是eroor");
});
eventEmitter.emit("error",function (err,st) {
    console.log(err+"=="+st)
});
var util=require('util');


/*测试编辑后调用事件通知***/
//失败的测试！！！！
var eventemit=require('events').EventEmitter;
var metaManager=function(){
    eventemit.call(this);
};

util.inherits(metaManager,eventemit);

var when=require('when');
metaManager.prototype.create=function (moId) {
    var def=when.defer();
    def.resolve('哈哈哈');
    var emitter=this;
    emitter.emit('createSuccess',{moId:moId});
    return def.promise;
}
var metaM=new metaManager();
metaM.create(12).then(function(r){
});
metaM.on('createSuccess',function(args){
    console.log(args+"======")
});