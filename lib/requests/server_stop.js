'use strict';

var hashmerge = require('hashmerge');

var server_stop = function(options, callback) {
  var self = this;

  var defaults = {
    type: 'soft' //  soft , hard, reboot
  };

  var required = [ 'serverid' ];
  var optional = [ 'type'];

  var settings = hashmerge(defaults, options);

  //self._check_options(required, optional);

  self._request('/server/stop', settings , function(err, body) {
    if (err) {
      return callback(err) ;
    }

    callback(null, body.response.server);
  });

};

module.exports = server_stop;
