/*!
 * redis client
 *
 *
 *
 * Redis Hset 命令用于为哈希表中的字段赋值 。
 如果哈希表不存在，一个新的哈希表被创建并进行 HSET 操作。
 如果字段已经存在于哈希表中，旧值将被覆盖



 */
'use strict';

var settings = require('../config/settings');
var redis = require('redis');
var client = redis.createClient(settings.redis_port, settings.redis_host);
client.auth(settings.redis_psd);
module.exports = client;
// client.set("string key", "string val", redis.print);
// client.hset("hash key", "hashtest 1", "some value", redis.print);
// client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
// client.hkeys("hash key", function (err, replies) {
//     console.log(replies.length + " replies:");
//     replies.forEach(function (reply, i) {
//         console.log("    " + i + ": " + reply);
//     });
//     client.quit();
// });