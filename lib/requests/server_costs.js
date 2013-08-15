'use strict';

var hashmerge = require('hashmerge');

var server_costs = function(options, callback) {
  var self = this;

  var defaults = {
  };

  var required = [ 'serverid' ];
  var optional = [ ] ;

  var settings = hashmerge(defaults, options);

  //self._check_options(required, optional);

  self._request('/server/costs', settings , function(err, body) {
    if (err) {
      return callback(err) ;
    }

    /*
    { currency: 'EUR',
     server:
      { items: [ [Object], [Object], [Object], [Object], [Object] ],
        total: { withtax: 19.225, withouttax: 15.38 } },
     license: { items: [], total: { withtax: 0, withouttax: 0 } },
     extra: { items: [], total: { withtax: 0, withouttax: 0 } },
     total: { withtax: 19.225, withouttax: 15.38 }
     }
    */

    callback(null, body.response.costs);
  });

};

module.exports = server_costs;
