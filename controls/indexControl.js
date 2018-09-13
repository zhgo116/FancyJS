/**
 * Created by caosheng on 16-12-14.
 *
 */
var express = require('express');
var router = express.Router();//路由规则  当一个路径有多个匹配规则时，使用app.use，否则使用相应的app.method(get、post)
var setting=require('../config/settings');
var cache=require('../common/cache');
var eventProxy=require('eventproxy');
var eCodeUtil = require("../common/ErrorCodeUtils");

var modules = require("../modules/modules")


/* GET home page. */
router.get('/', function (req, res) {
    res.render('../views/manager/login', {title: 'Fancy后台首页',supplies:['mop','broom','duster'],page: 'index'});
});
router.get('/test', function (req, res,next) {
    var ep=eventProxy.create(['users'],function (users) {
        res.render('../views/manager/test', {title: '首页',users: users})
    });
    ep.fail(next);
    cache.get('users',ep.done(function (users) {
        if(users){
            ep.emit('users',users);
        }else{
            modules.getUserService().then(function (userser) {
                return userser.getUserInfo();
            }).then(function (r) {
                cache.set('users',r,60*1);
                ep.emit('users',r);
            }).catch(function (e) {
                ep.emit('users',{});
            });
        }
    }));

});
module.exports = router;
