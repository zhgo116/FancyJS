/**
 * Created by admin on 2016/9/6.
 */

var log=require("@zoomway/server-common").log;

var logCfg=require("../config/logConfig.json");


var fo=log.logLevel.INFO;


log.init(logCfg);

var logger=log.getLogger("jjtke");


logger.info("sdadsad");

logger.info("xxxxxx");

log.setLevel(log.logLevel.DEBUG);
var logger2=log.getLogger("de");

logger2.info("rteytretre");

logger2.info("asdasdadsadssss");

log.error("adsf");


logger2.debug("xxxxxxxxxxxxxxxx")
logger2.debug("rrrrrrrrrrrrrrrrrr")
log.setLevel(log.logLevel.ERROR);
console.log("ggggggggggggggggggg");
logger2.error("rrrrrrrrrrrrrrrrrr")
console.log("我是")