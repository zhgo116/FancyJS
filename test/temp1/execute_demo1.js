var siteFunc={
    getIndex:function (req,res,callback) {
        console.log("我进了getIndex")
        callback();
    },
    renderIndex:function(a,b){
        this.getIndex(a,b,function(temp){
            console.log("我进了this.getIndex")
        });
        console.log("我是renderIndex")
    }
};
module.exports=siteFunc;