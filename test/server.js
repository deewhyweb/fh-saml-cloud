var mbaasApi = require('fh-mbaas-api');
var server = require('../application.js').server;

exports.after = function(finish) {
  console.log('global after');
  mbaasApi.db({
    "act": "close"
  }, function() {
    if (server) {
      server.close(function() {
        return finish();
      });
    } else {
      return finish();
    }
  });
};