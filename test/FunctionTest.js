var test=function(obj){
    var a=new Function (obj);
    return a;
}

var c=test(function(doc){
    return doc;
});
console.log(c)