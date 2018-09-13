/**
 * Created by fancy on 16-11-14.
 */

/***
 *通过new实例化对象时:对类会执行一次，所以类内部的this上定义的属性的方法就可以复制到新创建的对象上，成为对象共有化属性和方法
 *
 *
 * 通过new创建对象的时候执行不到通过点添加的属性和方法
 *所以新创建的对象无法获取到它,可以通过类调用，称为类的静态共有属性和静态共有方法
 * 而prototype创建的属性或者方法在类实例的对象是可以通过this访问的到，这是因为新创建的对象的prototype和类的prototype指向的是同一个对象
 *
 *
 ***/




//私有属性与私有方法、特权方法、对象公有属性、对象共有方法、构造器
var Book=function(id,name,price){
    //私有属性
    var num=1;
    //私有方法
    function checkId(){

    }
    //特权方法
    this.getName=function(){};
    this.getPrice=function(){};
    this.setName=function(){};
    this.setPrice=function(){};

    //对象共有属性
    this.id=id;
    //对象共有方法
    this.copy=function(){};
    //构造器
    this.setName(name);
    this.setPrice(price);

};

//类静态共有属性（对象不能访问）
Book.isChinese=true;
//类静态共有方法（对象不能访问）
Book.resetTime=function () {
    console.log('new TIem');
};
Book.prototype={
    //共有属性
    isJSBook:false,
    //共有方法
    display:function () { }
};

var b=new Book(11,'javascript设计模式',50);
console.log(b.num);
console.log(b.isJSBook);
console.log(b.id);
console.log(b.isChinese);

console.log(Book.isChinese);
Book.resetTime();

