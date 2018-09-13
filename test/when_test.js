var when=require('when');
var fs=require('fs');

//promise 处理同步的异步解决方案



/***
 *
 * when.settle:挨个执行promise数组:when.settle([promise1(), promise2()]).then(fu
 *
 *
 *
 *处理循环时：自动处理完循环里面的promise func, 循环走完才会执行循环回调函数(内部promise func并不会返回后立即执行then,等外部循环执行玩才会执行),
 *循环外面打印data会发现空数组，原因是因为回调还没有执行
 *when.all监听data数据，只要有值就会调用then
 *
 * 总结：异步有序
 *
 */
function test(){
    var def=when.defer();

    var data=[];
    console.log("start");
    for(var i=0;i<10;i++){
        process(i).then(function(res){
            data.push(res);
            console.log("push"+data);
        });
        console.log("loop i"+i)
    }
    console.log("when.all"+data)
    when.all(data).then(function(res){//when.all接收一个promise数组，返回一个promise
        console.log(res);
        console.log("end");
        def.resolve();
    });
    def.resolve();
    return def.promise;

}
function process(i){
    var def=when.defer();
    var startTime=new Date().getTime();
    var c=(i+11)%2;
    sleep(1000);
/*        var logo=fs.readFileSync("../res/img/baidu_logo.png");  //同步读取文件，线程等待
    console.log("logo"+logo)*/
    if(c==0){
        console.log("返回"+i)
        def.resolve(i);
    }
    return def.promise;
}
test();
function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
};