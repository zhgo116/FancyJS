/**
 * Created by fancy on 16-11-27.
 */
process.on('message', function (msg) {
    msg.hello = msg.hello.toUpperCase();
    process.send(msg);
});