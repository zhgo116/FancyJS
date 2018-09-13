var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
db.collection('demo').find({}).toArray(function(err, docs) {
    console.log("Found the following records");
    console.dir(docs);
});
    db.close();
});