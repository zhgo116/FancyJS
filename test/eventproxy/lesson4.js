var cheerio = require('cheerio');
var superagent = require('superagent');

var urls = [];
for (var i = 1; i <= 10; i++) {
    var tmp = 'http://acm.zju.edu.cn/onlinejudge/showProblemStatus.do?problemId=' + i;
    urls.push(tmp);
}

urls.forEach(function(item) {
    superagent
        .get(item)
        .end(function (err, sres) { // callback
            if (err) {
                console.error(err);
            }

            var $ = cheerio.load(sres.text);
            var ans = $('.runUserName a font').eq(0).text();
            console.log(ans);
        });
});