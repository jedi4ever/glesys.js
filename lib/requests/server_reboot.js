'use strict';

var hashmerge = require('hashmerge');

var server_reboot = function(options, callback) {
  var self = this;

  var defaults = {
  };

  var required = [ 'serverid' ];
  var optional = [ ] ;

  var settings = hashmerge(defaults, options);

  //self._check_options(required, optional);

  self._request('/server/reboot', settings , function(err, body) {
    if (err) {
      return callback(err) ;
    }

    callback(null, body.response.server);
  });

};

module.exports = server_reboot;
