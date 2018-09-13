/**
 * Created by fancy on 16-11-27.
 */

var net=require('net');
var options = {
    port: 80,
    host: 'www.baidu.com'
};

/*var client = net.connect(options, function () {
    client.write([
        'get / HTTP/1.1',
        'User-Agent: curl/7.26.0',
        'Host: www.baidu.com',
        'Accept: *!/!*',
        '',
        ''
    ].join('\n'));
});

client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});*/

//linux下监听器1024(不包含1024)以下的需要权限
/*net.createServer(function (conn) {
    conn.on('data', function (data) {
        conn.write([
            'HTTP/1.1 200 OK',
            'Content-Type: text/plain',
            'Content-Length: 11',
            '',
            'Hello World'
        ].join('\n'));
    });
}).listen(90);*/

/**
 *
 * 开启子进程
 * */
/*var child_process=require('child_process');
var child = child_process.spawn('nodejs', [ 'childprocess' ]);
child.kill('SIGTERM');
child.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

child.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});

child.on('close', function (code) {
    console.log('child process exited with code ' + code);
});*/

/* daemon.js */var child_process=require('child_process');
function spawn(mainModule) {
    var worker = child_process.spawn('nodejs', [ mainModule ]);
    worker.on('exit', function (code) {
        if (code !== 0) {
            spawn(mainModule);
        }
    });
}

spawn('closeure.js');
