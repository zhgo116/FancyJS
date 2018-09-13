/**
 * Created by fancy on 16-11-27.
 */
var child_process=require('child_process');
var util=require('util');

/*使用子进程异步执行 **/
function copy(source, target, callback) {
    child_process.exec(util.format('cp -r %s %s', source, target), callback);
}

/*copy('basejs0.js', 'b1.js', function (err) {
    console.log(err)
});*/

/****/

function main(argv) {
console.log(argv);
}

main(process.argv.slice(2));

try {
    // ...
/*   c();*/
} catch (err) {
    console.log("1"+err);
    /*process.exit(1);*/
}


function log() {
    process.stdout.write(
        util.format.apply(util, arguments) + '\n');
}
/*
var http=require('http');
http.createServer(function(){
    console.log("================================");
}).listen(80, function () {
    var env = process.env,
        uid = parseInt(env['SUDO_UID'] || process.getuid(), 10),
        gid = parseInt(env['SUDO_GID'] || process.getgid(), 10);

    process.setgid(gid);
    process.setuid(uid);
});*/
process.on('SIGTERM', function () {
    cleanUp();
    process.exit(0);
});