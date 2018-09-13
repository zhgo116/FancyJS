var eventEmitter=require('events').EventEmitter;
var util=require('util');
var Giserver=(function(){
    return function () {
        this.loadTest=function () {
            var o=this;
            if(o.t){
                o.t();
            }
            o.emit('init');
        }
    }
})();
util.inherits(Giserver,eventEmitter);// 基于原型继承
var server=new Giserver();
eventEmitter.call(server);//对象的继承，可以获取对象方法
server.t=function () {
    console.log('进了t')
};
server.on('init',function () {
    console.log('45677')
});

server.loadTest();