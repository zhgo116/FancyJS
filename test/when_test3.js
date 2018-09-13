(function(){
    var fs=require('fs');
    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    };
    console.log('for start')
    for(var i=0;i<100;i++){
        console.log("kaishi");
        fs.readFile(__dirname + '/index.html',
            function (err, data) {
                if (err) {
                    console.log('baocuo')
                }else{
                    console.log('woshihuitiao')
                }});
        console.log('jieshu');
    }
    console.log('for end')
})();