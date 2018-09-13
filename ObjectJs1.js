/**
 * Created by admin on 2016/10/25.
 */


var checkObject={
    checkName:function(){
        console.log("checkname");
    },checkEmail:function(){
        console.log("checkEmail");
    }
}
checkObject.checkName();
//************************************
var checkObj=function(){};
checkObj.checkName=function(){
    console.log("checkname");
}
checkObj.checkEmail=function(){
    console.log("checkEmail");
}
checkObj.checkName();


//////////////////////////////////对象调用方式new
var checkObj1=function(){};
    checkObj1.prototype.checkName=function(){//prototype会使只创建一次对象，不会重复创建;this.会创建多个
        console.log("checkname2");

    }
    checkObj1.prototype.checkEmail=function(){
        console.log("checkemail2");
    }


var c1=new checkObj1();
c1.checkName();


//////////////////////////////////对象调用方式new
var checkObj2=function(){};
    checkObj2.prototype={//prototype会使只创建一次对象，不会重复创建;this.会创建多个
    checkName:function(){
        console.log("checkname22222");
        return this;
    },
    checkEmail:function(){
        console.log("checkemail222222");
        return this;
    }}


var c2=new checkObj2();
c2.checkName().checkEmail();


///////////////////////////////////////////////////////污染全局function

Function.prototype.checkEmail=function(){
    console.log("=====prototype.checkEmail");
}


var f=function(){};
f.checkEmail();

//////////////////////////////////////
/****
 * prototype(原型概念)
 * JavaScript 可以建立其传统 OO 语言中的
 继承，从而体现对象的层次关系。JavaScript 本身是基于原型的，每个对象都有一个 prototype 的属性来，这个
 prototype 本身也是一个对象，因此它本身也可以有自己的原型，这样就构成了一个链结构。 访问一个属性的时
 候，解析器需要从下向上的遍历这个链结构，直到遇到该属性，则返回属性对应的值，或者遇到原型为 null 的对
 象(JavaScript 的基对象 Object 的 prototype 属性即为 null)，如果此对象仍没有该属性，则返回 undefined.
 *
 */

Function.prototype.addMethod=function(name,fn){
    this.prototype[name]=fn;   //prototype使这种checkName方法绑定(继承的概念)在addM对象上也就是function(){}全局，所以下方才m.checkEmail可以找到
    return this;
}

/*var addM=new Function();*/    //两者亦可
var addM=function(){};
addM.addMethod('checkName',function(){
    console.log("Function checkname");
    return this;
}).addMethod('checkEmail',function(){
    console.log("Function checkEmail");
    return this;
});
var m=new addM;
m.checkEmail().checkName();



function Base(name){
    this.name = name;
    this.getName = function(){
        return this.name;
    }
}
//声明一个对象child
function Child(id){
    this.id = id;
    this.getId = function(){
        return this.id;
    }
}
//将child的原型指向一个新的base对象
Child.prototype = new Base("base");
//实例化一个child对象
var c1 = new Child("child");
//c1本身具有getId方法
console.log(c1.getId());
//由于c1从原型链上"继承"到了getName方法，因此可以访问
console.log(c1.getName());


/**函数返回多个值   厉害!!!!*/
function point(left,top){
    this.left=left;
    this.top=top;
    return {x:this.left,y:top};
}
var po= point(12,45);
console.log(po.x+"==="+po.y);



/**
 *
 *
 运算符==读作相等，而运算符===则读作等同
 *相等运算符
 如果操作数具有相同的类型，则判断其等同性，如果两个操作数的值相等，则返回 true(相等)，否则返回 fals
 e(不相等). 如果操作数的类型不同，则按照这样的情况来判断： - null 和 undefined相等 - 其中一个是数字，另
 一个是字符串，则将字符串转换为数字，在做比较 - 其中一个是 true，先转换成 1(false 则转换为 0)在做比较 -
 如果一个值是对象，另一个是数字/字符串，则将对象转换为原始值(通过 toString()或者 valueOf()方法) - 其他
 情况，则直接返回 false
 等同运算符
 如果操作数的类型不同，则不进行值的判断，直接返回false
 如果操作数的类型相同，分下列情况来判断：
 ?  都是数字的情况，如果值相同，则两者等同(有一个例外，就是 NaN，NaN 与其本身也不相等)，否则不等同
 ?  都是字符串的情况，与其他程序设计语言一样，如果串的值不等，则不等同，否则等同
 ?  都是布尔值，且值均为 true/false                ，则等同，否则不等同
 ?  如果两个操作数引用同一个对象(数组，函数)，则两者完全等同，否则不等同
 ?  如果两个操作数均为  null/undefined  ，则等同，否则不等同
 *
 **/
console.log(1 == true);
console.log(1 === true);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

console.log(null!==undefined);




/*

javascript 数组操作方法
concat()    连接两个或更多的数组，并返回结果。
join()       把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
pop()       删除并返回数组的最后一个元素。
push()      向数组的末尾添加一个或更多元素，并返回新的长度。
reverse()   颠倒数组中元素的顺序。
shift()     删除并返回数组的第一个元素。
slice()     从某个已有的数组返回选定的元素。
sort()      对数组的元素进行排序。
splice()    删除元素，并向数组添加新元素。
unshift()   向数组的开头添加一个或更多元素，并返回新的长度。
valueOf()   返回数组对象的原始值。
*/

const a=23; //声明常量



o={x:1,y:{z:[false,null,""]}};
s=JSON.stringify(o);//序列化
p=JSON.parse(s);    //还原对象
console.log(s+"==="+ p.x);


var ss={x:1,y:1}.toString();
console.log(ss);//返回[object Object]

console.log(new Date().valueOf())


/*
 //两者等同
var a=cons();
var a=cons;
*/


var info={"error":{"status":"12","message":"454"}};
console.log(info)

console.log(true===true)