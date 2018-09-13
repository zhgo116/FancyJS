/**
 * Created by admin on 2016/10/19.
 */
function route(handler,pathname,response,postData){
    console.log("About to route a request for "+pathname);
    if(typeof handler[pathname]=="function"){
         handler[pathname](response,postData);//调用类似    handler["/start"]();//handler存的{ '/': [Function: start],'/start': [Function: start],'/upload': [Function: upload] }，调用具体方法
    }else{
        console.log("No Request Handler found for"+pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}
exports.route=route;