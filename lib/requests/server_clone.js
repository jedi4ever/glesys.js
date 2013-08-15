'use strict';

var hashmerge = require('hashmerge');

var server_clone = function(options, callback) {
  var self = this;

  var defaults = {
    bios: false
  };

  var required = [ 'serverid' ];
  var optional = [ 'disksize', 'memorysize', 'cpucore', 'transfer', 'description', 'datacenter' ] ;

  var settings = hashmerge(defaults, options);

  //self._check_options(required, optional);

  self._request('/server/clone', settings , function(err, body) {
    if (err) {
      return callback(err) ;
    }

    callback(null, body.response.server);
  });

};

module.exports = server_clone;
