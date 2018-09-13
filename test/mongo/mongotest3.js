/**
 * Created by fancy on 16-11-16.
 */
var mongose=require('mongoose');
var Schema=mongose.Schema;
var demoSchema=new Schema({
    name : { type:String },//属性name,类型为String
    age  : { type:Number,default:0 },//属性age,类型为Number,默认为0
    email: { type:String,default:''}
});
//var mc=require('mongodb').MongoClient;//mc.connect回调有close()方法
var mongodb=mongose.connect('mongodb://127.0.0.1:27017/test');

var DemoModel=mongodb.model("demo",demoSchema);

/*

var DemoEntity=new DemoModel({
    name : "Lenka",
    age  : 36,
    email: "lenka@qq.com",time:{type:String}
});
*/
/*
console.log(DemoEntity.name); // Lenka
console.log(DemoEntity.age); // 36
console.log(DemoEntity.time); // 36*/
/*DemoEntity.save();*/
var c=null;
//update不带条件默认更新第一条,multi则更新多个
DemoModel.update({},{$set:{name:'caosheng90',age:9,email:'zhgo116@qq.com'}},{multi: true},function(err,res){
    console.log("====="+JSON.stringify(res))
});
//DemoModel.findOneAndUpdate({name:"liudh"},{$unset:{time:1}},function(err,res){
//    console.log("====="+JSON.stringify(res))
//});
/*DemoModel.ensureIndexes({"name":1});*/

