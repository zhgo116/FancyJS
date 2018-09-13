/**
 * Created by fancy on 16-11-14.
 */

//原型是继承
function inheritObject(o){
    function F(){}
    F.prototype=o;
    return new F()
}


var book={
    name:'JS book',
    alikeBook:['css book','html book']
};
function createBook(obj){
    var o=new inheritObject(obj);
    o.getName=function(){
        console.log(obj.name);
    }
    return o;
}


var book=createBook(book);
console.log(book.name+"----"+book.alikeBook);
book.getName();
var book2=createBook(book);
book2.alikeBook.push('java book');
book.name='test';
console.log(book2.name+"----"+book2.alikeBook);
book2.getName();

var F=F||{};
console.log(F);