/**
 *
 *
 * new test() 会打印比如对象的属性，比如this.属性,this.方法
 * Created by Fan on 2017/3/9.
 */


var source=function(config,impl){
    Object.defineProperty(this,"_impl",{
        get:function(){
            return impl;
        }
    });
    this.config=config;
    return this;
}

var test=function(){
    this.name="java";
    var eat= function () {
        return "我还能吃饭";
    }
    var drink=function(){
        console.log("我还能喝水");
        return this;
    }
    this.aa=function(){
        console.log("2");
    }

}
test.prototype.pEat=function(){
    console.log("我在原型中吃饭");
    return this;
}
var cdd=source("testconfig",new test());
var ddd=new test();
console.log(cdd._impl.pEat())
