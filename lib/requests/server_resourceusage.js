'use strict';

var hashmerge = require('hashmerge');

var server_resourceusage = function(options, callback) {
  var self = this;

  var defaults = {
  };

  var required = [ 'serverid', 'resource', 'resolution'];

  // resource: Allowed: cpuusage, diskioread, diskiowrite, memoryusage, diskusage, beancounterfails, transfertotal, transferin, transferout
  // resoultion: Allowed: minute, hour, day
  var optional = [ ] ;

  var settings = hashmerge(defaults, options);

  //self._check_options(required, optional);

  self._request('/server/resourceusage', settings , function(err, body) {
    if (err) {
      return callback(err) ;
    }

    // { info: { type: 'cpuusage', resolution: 'hour', unit: 'cores' }, values: []
    callback(null, body.response.usage);
  });

};

module.exports = server_resourceusage;
