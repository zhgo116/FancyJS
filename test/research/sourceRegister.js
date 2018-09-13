/**
 * Created by Fan on 2017/3/9.
 */

module.exports=(function(){
    var obj={};
    var regs={};

    obj.register=function(provide,conn){
        regs[provide]=conn;
        return this;
    }
    obj.get=function(name){
        return regs[name];
    }
    return obj;
});