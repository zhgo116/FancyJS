
/**
 * Created by admin on 2016/10/24.
 */

var myArgs=process.argv.slice(2);
console.log(myArgs);

process.on('exit', function () {
    process.nextTick(function () {
        console.log('This will not run');
    });
    console.log('About to exit.');
});


process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});

setTimeout(function () {
    console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
console.log('This will no1t run.');