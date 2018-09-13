/**
 *
 * 函数式声明  a默认 prototype是一个空对象
 *  函数式声明 会在与执行期执行
 *  声明式函数会执行到那一行才会有定义
 *
 *function定义的对象有一个prototype属性，prototype属性又指向了一个prototype对象，
 * 注意prototype属性与prototype对象是两个不同的东西，要注意区别。在prototype对象中又有一个constructor属性，
 * 这个constructor属性同样指向一个constructor对象，而这个constructor对象恰恰就是这个function函数本身。
 */



var person={
    sayGoodBy:function(){
        console.log("我是sayGoodBy")
    }
};

var peet=function(){

};

peet.prototype.run=function(){
    console.log("跑")
};

/***
 *
 * 匿名包裹器”或“命名空间”
 *
 * 效果：立即执行
 * 声明式函数后面增加()javascript解析后就会执行
 */
(function(){
    function Constractor() {
        this.method1 = method1;
        this.method2 = method2;
    }

    function method1() {
    }

    function method2() {
    }
})();
     /*****************两种方式*******************/
person.sayGoodBy();

/**
 *构造函数生成的实例所拥有的方法都是指向一个函数的索引，这样可以节省内存
 */
var p=new peet();
p.run();

var fnName=function(){
    console.log("----------------")
}();//javascript解析到此直接执行


(function(a){
    console.log(a);   //firebug输出123,使用（）运算符
}(123));



var flower=function () {
    this.meigui=meigui;
};
var meigui=function(){

};

/**
 *
 *prototype既能保留公有性，又能具有私有性。
 */
function uw3c(name){
    alert("姓名:" + name + ",年龄:" + this.age + ",性别:" + this.sex);
}
uw3c.prototype.age = 15;
uw3c.prototype.sex = "man";
var test1 = new uw3c("css");//姓名:css,年龄:15,性别:man
var test2 = new uw3c("js");//姓名:js,年龄:15,性别:man




function uw3c(){
}
uw3c.prototype.name = "b";
var test = new uw3c();
console.log(JSON.stringify(test));//{}
console.log(test.name);//"b"


