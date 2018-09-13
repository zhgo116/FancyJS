function Image(){
    function onload() {
        
    }
    function onerror() {

    }
}
function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        var image = new Image();

        image.onload = function() {
            console.log("load");
            resolve(image);
        };

        image.onerror = function() {
            reject(new Error('Could not load image at ' + url));
        };
        console.log("change src");
        function init_img() {
            image.src = url;
        }
        setTimeout(init_img,2000);
    });
}

function loadImageAsync2(url) {
    return new Promise(function(resolve, reject) {
        var image = new Image();

        image.onload = function() {
            console.log("2load");
            resolve(image);
        };

        image.onerror = function() {
            reject(new Error('Could not load image at ' + url));
        };
        console.log("2change src");
        function init_img() {
            image.src = url;
        }
        setTimeout(init_img,1000);
    });
}

var p = loadImageAsync('http://img02.tooopen.com/images/20141231/sy_78327074576.jpg');
p.then(function (img) {
    console.log("1:"+img.src);
});
var h = loadImageAsync2('http://img02.tooopen.com/images/20141225/sy_77944235469.jpg');
h.then(function (img) {
    console.log("2:"+img.src);
});
console.log("jjjjj");