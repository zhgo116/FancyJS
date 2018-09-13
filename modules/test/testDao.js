var when = require('when');
var userModel=require('../../models/User');
var ecodes = require('../../common/errorCodes');
var fs=require('fs');
var testDao = module.exports= {
    getUserInfo: function (userName) {
        return when.promise(function (resolve, reject, notify) {
            userModel.find({userName: userName}, function (err, doc) {
                if (err) reject(ecodes.SQLError);
                else resolve(doc);
            });
        });
    },
    getUserName: function (userName) {
        console.log(userName);
    }
};