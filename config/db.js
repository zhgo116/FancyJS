var Grid = require('gridfs-stream');
var mongoose = require('mongoose');
var url = "mongodb://" + runtimeConfig.db.ip + ":" + runtimeConfig.db.port + "/" + runtimeConfig.db.dbName;
mongoose.connect(url);
Grid.mongo = mongoose.mongo;
var db = mongoose.connection;
var gfs = Grid(db.db);
module.exports = mongoose;