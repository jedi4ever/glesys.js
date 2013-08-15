'use strict';

var server_create = function(options, callback) {
  var self = this;

  var required = [ 'datacenter' , 'platform' , 'hostname' , 'templatename' ,
    'disksize' , 'memorysize' , 'cpucores' , 'rootpassword' , 'transfer'
  ];
  var optional = [ 'description' , 'ip', 'ipv6'];

  //self._check_options(required, optional);

  self._request('/server/create', options , function(err, body) {
    if (err) {
      return callback(err) ;
    }

    callback(null, body.response.server);
  });

};

module.exports = server_create;
