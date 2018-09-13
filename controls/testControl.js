var modules = require("../modules/modules")
var eCodeUtil = require("../common/ErrorCodeUtils");
var fs=require('fs');
module.exports = function (app) {
    var user = function () {
        return "user";
    };
    app.get('/test/:version/info', function (req, res, next) {
        var version = req.params.version;
        var userName = req.query.userName;
        var token = req.query.token;
        modules.getUserService().then(function (userser) {
            return userser.getUserInfo(userName);
        }).then(function (r) {
            eCodeUtil.sendSuccess(res, r);
        }).catch(function (e) {
            eCodeUtil.sendError(res, e);
        });
    });



    var qr_image = require('qr-image');
    app.get('/qrcode',function(req,res){
        var temp_qrcode = qr_image.image('http://www.baidu.com');
        res.type('png');
        temp_qrcode.pipe(res);

    })
};