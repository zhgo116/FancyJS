/**
 * Created by caosheng on 16-12-14.
 * 资源:1.地图
 */

var mongoose=require('mongoose');
var shortid=require('shortid');
var Schema=mongoose.Schema;
var ResourceSchema=new Schema({
    _id:{
        type:String,
        unique:true,
        'default':shortid.generate
    }

})

mongoose.model('resource',ResourceSchema);