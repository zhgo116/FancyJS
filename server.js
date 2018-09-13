/**
 * Created by admin on 2016/10/19.
 */
var http =require("http");
var url=require("url");
function start1(routes,handler){

    http.createServer(function(request,response){
        var pathname=url.parse(request.url).pathname;
        var postData="";
        request.setEncoding("utf8");
        request.addListener("data",function(postDataChunk){
            postData+=postDataChunk;
            console.log("Recive POST data chunk '"+postDataChunk+"'.");
        })
        request.addListener("end",function(){
            routes(handler,pathname,response,postData);
        })
    }).listen(8888);
    console.log("Server has started.");
}
exports.start2=start1;
console.log(1==true)
console.log(0==false)