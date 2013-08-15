'use strict';

var hashmerge = require('hashmerge');
var request = require('request');

var Glesys = function(options) {

  var self = this;

  var defaults = {
    customer_id: null,
    api_key: null
  };

  self.settings = hashmerge( defaults , options);

};

module.exports = Glesys;

Glesys.prototype.credentials = function() {
  var self = this;

  var credentials = {
    username: self.settings.username,
    api_key: self.settings.api_key
  };
  return credentials;
};

var API_URL = 'https://api.glesys.com';

Glesys.prototype._request = function(url, parameters, callback) {

  var methodParams = hashmerge(parameters,{}); // Add credentials to methodParams
  var getURL = API_URL + '/' + url ;

  var requestParams = {
    url: getURL,
    form: methodParams, // Pass things through application/x-www-form-urlencoded
    strictSSL: true,
    auth: {
      user: this.credentials().username,
      password: this.credentials().api_key,
      sendImmediately: true,
    },
    json: true
  };

  request.post(requestParams, function(error, response, body) {
    if(!error && !!body.status && body.status !== 'OK'){
      error = new Error(body.description);
    }

    if (body.response && body.response.status && body.response.status.code !== 200) {
      error = new Error(body.response.status.text);
    }

    callback(error, body);
  });

};

// Auto load functions
var fs = require('fs');
var path = require('path');
var requestsPath = path.join(__dirname,'requests');

var requests = fs.readdirSync(requestsPath);
requests.forEach(function(filename) {
  if (path.extname(filename) === '.js' ) {
    var requestName = path.basename(filename, '.js');
    Glesys.prototype[requestName] = require(path.join(__dirname, './requests', requestName));
  }
});
