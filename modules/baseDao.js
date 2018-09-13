
var url = require('url');
//加密类
var crypto = require("crypto");
var when=require('when');
var DbOpt = {

    find:function(model,query,codition){
        return when.promise(function (resolve,reject) {
            model.find(query,codition,function(err,res){
                if(err){reject(err);}
                else {resolve(res);}
            });
        });
    },
    findOne:function(model,query,codition){
        return when.promise(function (resolve,reject) {
            model.findOne(query,codition,function(err,res){
                if(err){reject(err);}
                else {resolve(res);}
            });
        });
    },
    update:function(model,query,codition){
        return when.promise(function (resolve,reject) {
            model.update(query,codition,function(err,res){
                if(err){reject(err);}
                else {resolve(res);}
            });
        });
    },
    encrypt : function(data,key){ // 密码加密
        var cipher = crypto.createCipher("bf",key);
        var newPsd = "";
        newPsd += cipher.update(data,"utf8","hex");
        newPsd += cipher.final("hex");
        return newPsd;
    },
    decrypt : function(data,key){ //密码解密
        var decipher = crypto.createDecipher("bf",key);
        var oldPsd = "";
        oldPsd += decipher.update(data,"hex","utf8");
        oldPsd += decipher.final("utf8");
        return oldPsd;
    }
};
module.exports = DbOpt;