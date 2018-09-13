/**
 * Created by admin on 2016/10/19.
 */

var server=require("./server.js");
var router=require("./router.js");
var requesthandler=require("./requesthandler.js");
var test =require("./test.js");
var handler={};
handler["/"]=requesthandler.start;
handler["/start"]=requesthandler.start;
handler["/upload"]=requesthandler.upload;

server.start2(router.route,handler);

