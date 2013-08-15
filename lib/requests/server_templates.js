'use strict';

var hashmerge = require('hashmerge');

var server_templates = function(options, callback) {
  var self = this;

  var defaults = {
  };

  var required = [ ];
  var optional = [  ] ;

  var settings = hashmerge(defaults, options);

  //self._check_options(required, optional);

  self._request('/server/templates', settings , function(err, body) {
    if (err) {
      return callback(err) ;
    }

    // Returns a hash of  OpenVZ , VMware , Xen
    callback(null, body.response.templates);
  });

};

module.exports = server_templates;
