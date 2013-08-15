'use strict';

var server_list = function(options, callback) {
  var self = this;

  self._request('/server/list', {} , function(err, body) {
    if (err) {
      return callback(err) ;
    }

    callback(null, body.response.servers);
  });

};

module.exports = server_list;
