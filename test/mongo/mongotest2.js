
console.log("===========================================");

var mongoose=require('mongoose');
var db=mongoose.createConnection('localhost','test');
db.on('error',console.error.bind(console,'链接错误'));
var c=0;
db.on('open',function(e,r){//监听mongo status
    console.log('---开启'+r);

    var ObjectId = mongoose.Schema.Types.ObjectId;
    var PersonSchema=new mongoose.Schema({
        name:String//定义一个属性name，类型为String
    });
    PersonSchema.methods.speak=function () {//为Schema模型追加speak方法
        console.log('我的名字叫'+this.name)
    }

    var PersonModel=db.model('person',PersonSchema);
    var PersonEntity=new PersonModel({name:'krouky'});//Model创建Entity
    console.log(PersonEntity.name+"--"+PersonEntity._id);
    PersonEntity.speak();

    // for(var i=0;i<10;i++){
    //     sleep(3000);
    //     console.log("1"+i);
                    //PersonEntity.save(); //执行完成后，数据库就有该数据了
                    //PersonModel.find(function(err,persons){
                    //    persons.forEach(function(res){
                    //        console.log(res);
                    //    })
                    //});


    //     c=i;
    // }
    PersonModel.findOne(function(e,r){
        console.log(r)
    });

});

db.on('close',function(e){
    console.log('---关闭'+e);
    console.log('----------'+c)
});

db.on('reconnected',function(e){
    console.log('---重新开启'+e);
    console.log('----------'+c)
});

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
};