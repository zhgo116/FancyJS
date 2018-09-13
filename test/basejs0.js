/**
 * Created by fancy on 16-11-9.
 */
/*function SuperClass(){
    this.books=['JavaScript','html','css'];
}
function SUbClass(){}
SUbClass.prototype=new SuperClass();
var instance1=new SUbClass();

var instance2=new SUbClass();
console.log(instance1.books);
instance1.books.push('设计模式');
console.log(instance2.books);*/


/*

javascript中单引号和双引号差别 js中右很多包含双引号的字符，使用单引号可以避免转义
var c='123"'+12+'"';
console.log(c);

var d="123\""+12+"\"";
console.log(d);
*/


//组合继承

/*
function SuperClass(name){
    this.name=name;
    this.books=['Javascript','html','css'];
}
SuperClass.prototype.getName=function(){
    console.log(this.name);
}

function SubClass(name,time){
    SuperClass.call(this,name);
    this.time=time;
}
SubClass.prototype=new SuperClass();
SubClass.prototype.getTime=function(){
    console.log(this.time);
}

var instance1=new SubClass('js book',2014);
instance1.books.push('设计模式');
console.log(instance1.books);
instance1.getName();
instance1.getTime();

var instance2=new SubClass('css book',2013);
console.log(instance2.books);
instance2.getName();
instance2.getTime();

*/


//原型是继承
function inheritObject(o){
    function F(){}
    F.prototype=o;
    return new F()
}

var books={name:'css book',alikeBook:['css book','html book']};
var newBook=inheritObject(books);
newBook.name='ajax book';
newBook.alikeBook.push('xml book');

var otherBook=inheritObject(books);
otherBook.name='flash book';
otherBook.alikeBook.push('as book');

console.log(newBook.name);
console.log(newBook.alikeBook);

console.log(otherBook.name);
console.log(otherBook.alikeBook);

console.log(books.name);
console.log(books.alikeBook);

var C=function(){
    C.prototype.show=function show(){
        console.log("===========");
    }
    console.log("+++++++++++++++++++");
    function cshow(){
        console.log("cshowoooooooooooooooooooo");
    }
}


var dd=new C();
dd.show();

global.cc="23444";
console.log(cc);
console.log(global.cc)


