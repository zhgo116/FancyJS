/**
 * Created by admin on 2016/10/19.
 */
var exec=require("child_process").exec;
var queryString=require("querystring");
function start(response,postData){
    console.log("handler start");
    var content="empty";

    /*exec("tree c:",
        {timeout: 10000,maxBuffer: 20000*1024 },function(error,stdout,stderr){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout+"=====");
        response.end();
    });*/

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
function sleep(milliseconds){
    var startTime=new Date().getTime();
    while(new Date().getTime()<startTime+milliseconds);
}

function upload(response,postData){
    console.log("handler upload");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("you've send "+queryString.parse(postData).text);
    response.end();
}
exports.start=start;
exports.upload=upload;