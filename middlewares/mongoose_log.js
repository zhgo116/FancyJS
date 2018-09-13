var mongoose = require('mongoose');
var logger   = require('../common/logger');
var config = require('../config/settings');

if (config.debug) {
  var traceMQuery = function (method, info, query) {
    return function (err, result, millis) {
      if (err) {
        logger.error('traceMQuery error:', err)
      }
      var infos = [];
      infos.push(query._collection.collection.name + "." + method);
      infos.push(JSON.stringify(info));
      infos.push((millis + 'ms').green);

      logger.debug("MONGO", infos.join(' '));
    };
  };

  mongoose.Mongoose.prototype.mquery.setGlobalTraceFunction(traceMQuery);
}
