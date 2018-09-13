/**
 * Created by fancy on 16-11-22.
 * 项目配置文件
 */

module.exports = {
    // debug 为 true 时，用于本地调试
    debug: true,
    imgZip : true, // 上传图片是否压缩(如果为false则本地不需要安装gm)
    session_secret: 'doracms_secret', // 务必修改
    auth_cookie_name: 'doracms',
    encrypt_key : 'dora',
//    站点基础信息配置
    SITETITLE : 'Fancy开发俱乐部', // 站点名称
    SITEDOMAIN : 'http://www.html-js.cn', // 站点域名
    SITEICP : '粤ICP备15038960号-2', // 站点备案号
    SITEVERSION : 'v1.1.1', // 静态资源版本戳
    SYSTEMMAIL : 'zhgo116@qq.com', // 管理员个人邮箱
    UPDATEFOLDER : process.cwd()+'/public/upload', // 默认上传文件夹本地路径
    TEMPSTATICFOLDER : process.cwd()+'/public/themes/', // 模板静态文件路径
    DATAOPERATION : process.cwd()+'/models/db/bat', //数据库操作脚本目录
    DATABACKFORDER : '/usr/project/mongobackdata/', // 服务端数据备份目录
    MONGODBEVNPATH : '/usr/bin/', // LINUXmongodb环境变量(win server下不用管)
    SYSTEMTEMPFORDER : process.cwd()+'/views/web/temp/', // 系统模板安装目录
    DORACMSAPI : 'http://api.html-js.cn', // 系统服务提供商

//    本地缓存设置
    redis_host: '127.0.0.1',
    redis_port: 6379,
    redis_psd: '',
    redis_db: 0,


    port: 8080,
    loadServices: [
        {
            name: '用户服务',
            path: 'userControl.js'
        },
        {
            name: '测试服务',
            path: 'testControl.js'
        }
    ],
    db:{
        ip:'localhost',
        port:'27017',
        dbName:'zoomwayDevlop'
    },
    URL:'mongodb://127.0.0.1:27017/doracms',
    docDbPath:'//Gisserver/j/map_2d/server.db',
    runModel:'testModel'
};