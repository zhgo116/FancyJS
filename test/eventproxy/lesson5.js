var proxy=require('eventproxy');
var eventproxy=new proxy();
eventproxy.fail(function (e) {
    console.log(e)
});

