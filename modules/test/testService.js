var when = require('when');
var testDao = require("./testDao");
var ecodes = require('../../common/errorCodes');

var testService = function () {
    this.getUserInfo = function (userName) {
        return when.promise(function(resolve,reject){
            testDao.getUserInfo(userName).then(function(doc){
                if (!doc || doc.length < 1) {
                    reject(ecodes.NoData);
                } else {
                    var data = [];
                    doc.forEach(function (rs) {
                        data.push({userName: rs.userName, name: rs.info.name,age:rs.age});
                    });
                    resolve(data);
                }
            },function(e){
                reject(e);
            });
        });
    };
};

var testService =module.exports= {
    //获取Service服务的实例
    getTestService: function (token) {
        return when.promise(function(resolve,reject){
            if(token=="system"){
                resolve(userDao);
            }else{
                resolve(new userService());
            }
        });
    }
};