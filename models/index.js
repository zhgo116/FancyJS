var mongoose = require('mongoose');
var config   = require('../config/settings');
var logger = require('../common/logger')

mongoose.connect(config.URL, {
    server: {poolSize: 20}
}, function (err) {
    if (err) {
        logger.error('connect to %s error: ', config.URL, err.message);
        process.exit(1);
    }
});

// models
var User=require('./User');
require('./Resource');

exports.User= mongoose.model('user');
exports.Resource= mongoose.model('resource');

