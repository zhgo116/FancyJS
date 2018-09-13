/**
 * Created by user0 on 2016/12/26.
 */
var when = require('when');
var h = [11,22,33];

var hf = function(i){
    setTimeout(function(){
        //console.log(i);
        return when.Promise.resolve();
    },4000);
};

var hs = [];
for (var i = 0; i< h.length;i++){
    hs.push(hf(h[i]));
}
when.Promise.reduce(hs,function(t,item,index){
    console.log(123+"---"+t+"--"+item+"---"+index);
}).catch(function(){
    console.log(321);
});
