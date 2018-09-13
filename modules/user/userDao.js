var when = require('when');
//var dataModel = require("../../dataModel/DataModel");//以前写法
//var userModel=require('../../models/User');
var uModel=require('../../models/index').User;
var rMode=require('../../models/index').Resource;
var baseDao=require('../baseDao');
var ecodes = require('../../common/errorCodes');
var fs=require('fs');
var UserDao = module.exports={

    getUserInfo: function (userName) {
        return baseDao.find(uModel,{},{});
    },
    getUserName: function (userName) {
        console.log(userName);
    },
    getResource:function () {
        return baseDao.find(rMode,{},{})
    }
};