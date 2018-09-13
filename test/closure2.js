/*
 *当内部函数 在定义它的作用域 的外部 被引用时,
 * 就创建了该内部函数的闭包 ,如果内部函数引用了位于外部函数的变量,
 * 当外部函数调用完毕后,这些变量在内存不会被 释放,因为闭包需要它们.
 */
function outerFun() {
    var a = 99;

    function innerFun() {
        a++;
        console.log(a);
    }

    return innerFun;  //注意这里
}
var obj = outerFun();
obj();  //结果为1
obj();  //结果为2
var obj2 = outerFun();//即使再次调用相同的构造函数，但只会生成新对象和方法，新的临时变量只是对应新 的值，和上次那次调用的是各自独立的。
obj2();  //结果为1
obj2();  //结果为2


/*就是在构造函数体内定义另外的函数作为目标对象的方法函数，
而这个对象的方法函数反过来引用外层函数体中的临时变量。这使得只要目标 对象在生存期内始终能保持其方法，
就能间接保持原构造函数体当时用到的临时变量值。尽管最开始的构造函数调用已经结束，临时变量的名称也都消失了，
但在目 标对象的方法内却始终能引用到该变量的值，而且该值只能通这种方法来访问。即使再次调用相同的构造函数，
但只会生成新对象和方法，新的临时变量只是对应新 的值，和上次那次调用的是各自独立的。*/

/*function outerFun1() {
    var a = 0;
    console.log(a);
}
var a = 4;
outerFun1();
console.log(a);*/

function a() {
    var i = 0;
    function b() { console.log(++i); }
    return b;
}
var c = a();//当函数a的内部函数b被函数a外的一个变量引用的时候，就创建了一个闭包。
c();
c();

/*
//函数的作用域是在定义函数时候就已经确定，而不是在执行的时候确定
function f(x) {
    var g = function () { return x; }
    return g;
}
var h = f(1);
console.log(h());
*/

console.log(os.tmpdir())