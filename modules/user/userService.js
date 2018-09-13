var when = require('when');
var UserDao = require("./userDao");
//var userDao = new UserDao();
var ecodes = require('../../common/errorCodes');

var userService =  {
    getUserInfo:function(userName) {
        return when.promise(function(resolve,reject){
            UserDao.getUserInfo(userName).then(function(doc){
                 if (!doc || doc.length < 1) {
                    reject(ecodes.NoData);
                } else {
                    var data = [];
                    doc.forEach(function (rs) {
                        data.push({userName: rs.userName, name: rs.info.name,iphone:rs.security.iphone});
                    });
                    resolve(data);
                }
            },function(e){
                reject(e);
            });
        });
    },
    getResource:function(userName) {
        return when.promise(function(resolve,reject){
            UserDao.getResource(userName).then(function(doc){
                if (!doc || doc.length < 1) {
                    reject(ecodes.NoData);
                } else {
                 /*   var data = [];
                    doc.forEach(function (rs) {
                        data.push({userName: rs.userName, name: rs.info.name});
                    });*/
                    resolve(doc);
                }
            },function(e){
                reject(e);
            });
        });
    }
};

var UserService =module.exports= {
    //获取Service服务的实例
    getUserService: function (token) {
        return when.promise(function(resolve,reject){
            if(token=="system"){
                resolve(userDao);
            }else{
                resolve(userService);
            }
        });
    }
};