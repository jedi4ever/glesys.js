'use strict';

var hashmerge = require('hashmerge');

var server_destroy = function(options, callback) {
  var self = this;

  var defaults = {
    keepip: false
  };

  var required = [ 'serverid' ];
  var optional = [ 'keepip' ];

  var settings = hashmerge(defaults, options);

  //self._check_options(required, optional);

  self._request('/server/destroy', settings , function(err, body) {
    if (err) {
      return callback(err) ;
    }

    callback(null, null);
  });

};

module.exports = server_destroy;
