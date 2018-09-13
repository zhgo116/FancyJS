

/**
 *socket 例子
 *
 * 两个程序通过一个双向的通信连接实现数据的交换，这个连接的一端称为一个socket
 * 建立网络通信连接至少要一对端口号(socket)。socket本质是编程接口(API)，
 * 对TCP/IP的封装，TCP/IP也要提供可供程序员做网络开发所用的接口，
 * 这就是Socket编程接口；HTTP是轿车，提供了封装或者显示数据的具体形式;Socket是发动机，提供了网络通信的能力。
 *
 */
var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),//socket的监听加入的app设置的http模块
    fs = require('fs');
app.listen(8081);
function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}


io.sockets.on('connection', function (socket) {//设置了在htpp连接后进行的处理
    socket.emit('news', {hello: 'world'});//发送news的事件
    socket.on('my other event', function (data) {//监听my other event事件
        console.log(data);
    });
});