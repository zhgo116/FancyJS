/**
 * Created by admin on 2016/11/7.
 */
var sendError = function (res, result) {
    res.send({"error": {"status": result["code"], "message": result.msg}});
};
var sendBoolSuccess = function (res, result) {
    res.send({"result": {"success": result}});
};
var sendSuccess = function (res, result) {
    res.send({"result": result});
};
var eCodes=require('./errorCodes');

module.exports.sendError=sendError;
module.exports.sendSuccess=sendSuccess;
module.exports.eCodes=eCodes;