/**
 * Created by fancy on 16-11-8.
 */
var Q = require("when");
var fun1 = function (data) {
    var deferred = Q.defer();
    deferred.resolve(data+" fun1");
    return deferred.promise;
}

var fun2 = function (data) {
    var deferred = Q.defer();
    deferred.resolve(data+" fun2");
    return deferred.promise;
}

var fun3 = function (data) {
    var deferred = Q.defer();
    deferred.reject("12");
    return deferred.promise;
}
var fun4 = function (data) {
    var deferred = Q.defer();
    deferred.resolve(data+" fun4");
    return deferred.promise;
}

function main(data,cb){
    fun1("test")
        .then(fun2)
        .then(fun3).then(fun4)
        .done(function(data){
            cb(null,data);//ok 获得的最终数据为 --->"test fun1 fun2 fun3"
        },function(err){
            cb(null,err);//failed
        });

}

main("12",function(a,data){
    console.log(data);
})