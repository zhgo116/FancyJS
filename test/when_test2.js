/**
 * Created by fancy on 16-11-28.
 */
var when=require('when');



var promise1 = function() {
    var deferred = when.defer();
    setTimeout(function() {
        deferred.reject({"code":34,"msg":234});
    }, 2000);
    return deferred.promise;
};

var promise2 = function() {
    var deferred = when.defer();
    setTimeout(function() {
        deferred.resolve('B');
    }, 2000);
    return deferred.promise;
};R



function test(){
    var d=when.defer();
    when.settle([promise1(), promise2()]).then(function(result) {
        console.log(result); /*
         [{"state":"rejected","reason":"A"},
         {"state":"fulfilled","value":"B"}] */

        result.forEach(function(res){
            sleep(8000);
            if(res.state==="rejected"){
                console.log(res.reason);
            }else{
                console.log(res.value)
            }
        });
        console.log("我只醒了-----------------")
        d.resolve(result);
    });
    return d.promise;

}
test();

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
};



function t(){
    var defer=when.defer();
    var c=[{"name":344},{"name":3243},{"name":3243},{"name":3243},{"name":3243}];


    /*c.forEach(function(e){
        console.log("+"+e);

        return;
    });*/
    for(var i=0;i<c.length;i++){
        console.log(c[i]);
        defer.reject(false);
        return;
    }
    defer.resolve();

    console.log("=========================")
    return defer.promise;
}
//t();