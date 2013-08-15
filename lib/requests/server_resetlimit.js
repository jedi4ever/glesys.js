'use strict';

var hashmerge = require('hashmerge');

var server_resetlimit = function(options, callback) {
  var self = this;

  var defaults = {
  };

  var required = [ 'serverid' , 'type' ];
  var optional = [ ];

  var settings = hashmerge(defaults, options);

  //self._check_options(required, optional);

  self._request('/server/reset_limit', settings , function(err, body) {
    if (err) {
      return callback(err) ;
    }

    callback(null, body.response.server);
  });

};

module.exports = server_resetlimit;
