/**
 * Created by fancy on 16-11-27.
 */

/**
 *递归同步的遍历
 *
 **/
var fs=require('fs');
var path=require('path');
function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.jo  in(dir, file);

        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}

travel('addons', function (pathname) {
    console.log(pathname);
});






travel('addons', function (pathname) {
    console.log(pathname);
});