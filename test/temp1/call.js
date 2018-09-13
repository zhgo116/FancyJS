/*
*
*{ } 大括号，表示定义一个对象，大部分情况下要有成对的属性和值，或是函数
*var java=function(){
*/



var func=require('./execute_demo1.js');
func.renderIndex(1,2);


/*function a(){

    function demo2(){
        console.log("demo2")
    }
    function demo1(){
        console.log("demo1")

    }
    this.demo2();
    console.log("a")
}
a();*/

var a={
    demo2:function(){
        console.log("demo2")
    },
        demo1:function(){
            console.log("demo1");
            this.demo2();
        }
};


var java=function(){
    this.name="334"
    console.log(name);
}
module.exports=a;
java();