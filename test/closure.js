/**
 * Created by fancy on 16-11-14.
 */
console.log("closeure");
/*var Book=(function ()     {
   var bookNum=0;

    function checkBook(name) {}

    return function (newId,newName,newPrice) {
        var name,price;
        function checkId(id) {
            //特权方法
            this.getName=function(){};
            this.getPrice=function(){};
            this.setName=function(){};
            this.setPrice=function(){};

            this.id=newId;
            this.copy=function () {

            };

            bookNum++;
            if (bookNum>100){
                throw new Error('我们仅出版者100');
            }
            this.setName(name);
            this.setPrice(price);
        }
    }
})();
Book.prototype={
    isJSBook:false,
    display:function () {
        
    }
};*/



//在闭包内部实现一个完整的类然后将其返回


var Book=(function () {
    var bookNum=0;

    function checkBook(name) {}

     function _book(newId,newName,newPrice) {
        var name,price;
        function checkId(id) {
            //特权方法
            this.getName=function(){};
            this.getPrice=function(){};
            this.setName=function(){};
            this.setPrice=function(){};

            this.id=newId;
            this.copy=function () {

            };

            bookNum++;
            if (bookNum>100){
                throw new Error('我们仅出版者100');
            }
            this.setName(name);
            this.setPrice(price);
        }
         Book.prototype={
             isJSBook:false,
             display:function () {

             }
         }

    }
    return _book;
})();

function f1(){
    var n=999;
    return function(){
        console.log(n);
    }
}
var result=f1();
result(); // 999
var nAdd;
function f1(){
    var n=999;
    nAdd=function(){n+=1}
    function f2(){
        console.log(n);
    }
    return f2;
}
var result=f1();
result(); // 999
nAdd();
result(); // 1000
result(); // 1000



 var operator=function(){

     operator.prototype.test=function(){
    console.log("34324");
}};

var d=new operator();
d.test();

var cc={};

console.log(operator instanceof Object);
var dd=new Object();
console.log(dd instanceof  Object)
console.log(cc instanceof  Object)
var ddd={'java':123};
var c1=12;
var str = '"name":'+c1+',"age":"23"';
var dd='"java":"23"';
var dddd="{"+str+dd+"}";
console.log(dddd instanceof  Object);

    var str2=[{"name":'+c1+',"age":"23"}];
str2.push({"name":24});


