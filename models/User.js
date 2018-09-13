/**
 * Created by caosheng on 16-12-14.
 * 没有定义在里面的，查询不出来哦
 * 用户
 */


var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    _id: {
        type: String,
        unique: true,
        'default': shortid.generate //默认生成短id
    },
    userName: {type: String, unique: true},//用户名
    security: {
        password: {type: String},//密码
        iphone: {type: String, unique: true},
        email: {type: String, unique: true}
    },
    info: {
        name: {type: String},
        post: {type: String},
        jobID: {type: String},
        des: {type: String}
    },
    firstRequestMap: {type: Boolean},
    deviceList: [
        {
            deviceCode: {type: String},
            deviceFirstLogin: {type: Boolean},
            loginErrorTimes: {type: Number}
        }
    ],
    appSetting: [],
    firstLogin: {type: String},
    seq: {type: Number}
});

mongoose.model('user',UserSchema);
//module.exports=User;