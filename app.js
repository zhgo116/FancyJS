var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var index=require('./controls/indexControl');
var adminCtrl=require('./controls/adminCtrl');
var compression = require('compression');
var path = require('path');
var logger = require('morgan');
/*模板引擎*/
var partials = require('express-partials');
var favicon = require('serve-favicon');
require('./middlewares/mongoose_log'); // 打印 mongodb 查询日志

/*实例化express对象*/
var app = new express();
//use 中间件过滤器
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//初始化app配置
app.use(bodyParser.urlencoded({extended: false,limit:"10240kb"}));
app.use(bodyParser.text({"limit":"1000000kb"}));
app.use(bodyParser.json());

// view engine setup
//静态压缩
app.use(compression());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials()); //使用模板引擎
    
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/static',express.static('static'));    //swagger  访问api页面  http://127.0.0.1:8081/static/swagger.json
app.use(function(err,req,res,next){
    if(err){
        //自己的处理错误的逻辑
        console.log(err.message);
        console.log(err.stack);
        res.end('404')
    }
});
app.use('/',index);
app.use('/admin',adminCtrl);

global.runtimeConfig = require("./config/runConfig.json");

var loadServices = function () {
    runtimeConfig.loadServices.forEach(function (item) {
        try {
            var re = require('./controls/' + item.path);
            if (re != null) {
                re(app);
                console.log("load service  " + item.name + "  success ");
            }
        }
        catch (e) {
            console.log("load service  " + item.name + e);
        }
    });
};

(function(){
    app.set('port',runtimeConfig.port);
    //设置web头信息
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        next();
    });
    //加载服务
    loadServices();

    //创建web服务
    http.createServer(app).listen(app.get('port'), function () {
        console.log('http://127.0.0.1:' + app.get('port')+"");
    });
})();



