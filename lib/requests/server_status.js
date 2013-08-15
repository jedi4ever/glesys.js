'use strict';

var hashmerge = require('hashmerge');

var server_status = function(options, callback) {
  var self = this;

  var defaults = {
    statustype: 'state' // state, cpu, memory , disk, bandwith, uptime
  };

  var required = [ 'serverid' ];
  var optional = [ 'statustype'];

  var settings = hashmerge(defaults, options);

  //self._check_options(required, optional);

  self._request('/server/status', settings , function(err, body) {
    if (err) {
      return callback(err) ;
    }

    callback(null, body.response.server[settings.statustype]);
  });

};

module.exports = server_status;
