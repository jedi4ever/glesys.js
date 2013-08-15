//'use strict';

var expect = require('chai').expect;
var Glesys = require('../lib/glesys');
var fs = require('fs');
var path = require('path');

var credentials = require('../config.js');

var nodeGlesysServerId = null;

describe('Glesys', function() {

  // Some tasks can take a long time
  this.timeout(5000);

  it('server_list should list the servers', function(done) {

    var glesys = new Glesys(credentials);
    glesys.server_list({},function(err, list) {
      done(err);
    });

  });

  it('server_create should create a server', function(done) {

    var glesys = new Glesys(credentials);
    var createParams = {
      'datacenter' : 'Falkenberg',
      'platform' : 'OpenVZ',
      'templatename' : 'Ubuntu 12.04 LTS 64-bit',
      'disksize' : '5',
      'memorysize' : '128',
      'cpucores' : 1,
      'hostname': 'node-glesys2',
      'rootpassword' : 'mypassword',
      'transfer': 500
    };

    glesys.server_create(createParams, function(err, server) {
      nodeGlesysServerId = server.serverid;
      //expect(id).to.instanceof(Array);
      done(err);
    });

  });

  // Seems to return error, cannot open console
  it.skip('server_console should show the vnc connection params', function(done) {

    var glesys = new Glesys(credentials);
    var consoleParams = {
      'serverid' : nodeGlesysServerId
    };

    glesys.server_console(consoleParams, function(err,limits) {
      //expect(id).to.instanceof(Array);
      done(err);
    });

  });

  it('server_resetpassword should reset the password', function(done) {

    var glesys = new Glesys(credentials);
    var resetpasswordParams = {
      'serverid' : nodeGlesysServerId,
      'rootpassword': 'just1for2fun'
    };

    glesys.server_resetpassword(resetpasswordParams, function(err, server) {
      //expect(id).to.instanceof(Array);
      done(err);
    });

  });

  it('server_resourceusage should list the usage', function(done) {

    var glesys = new Glesys(credentials);
    var resourceusageParams = {
      'resource': 'cpuusage',
      'resolution' : 'hour',
      'serverid' : nodeGlesysServerId
    };

    glesys.server_resourceusage(resourceusageParams, function(err, usage) {
      //expect(id).to.instanceof(Array);
      done(err);
    });

  });

  it('server_costs should list the costs', function(done) {

    var glesys = new Glesys(credentials);
    var costsParams = {
      'serverid' : nodeGlesysServerId
    };

    glesys.server_costs(costsParams, function(err, usage) {
      //expect(id).to.instanceof(Array);
      done(err);
    });

  });

  it('server_allowedarguments should list the arguments', function(done) {

    var glesys = new Glesys(credentials);
    var allowedargumentsParams = {
      'serverid' : nodeGlesysServerId
    };

    glesys.server_allowedarguments(allowedargumentsParams, function(err, allowedarguments) {
      //expect(id).to.instanceof(Array);
      done(err);
    });

  });

  it('server_templates should list the templates', function(done) {

    var glesys = new Glesys(credentials);
    var templatesParams = {
    };

    glesys.server_templates(templatesParams, function(err, templates) {
      //expect(id).to.instanceof(Array);
      done(err);
    });

  });

  it('server_stop should stop a server', function(done) {

    var glesys = new Glesys(credentials);
    var stopParams = {
      'serverid' : nodeGlesysServerId
    };

    glesys.server_stop(stopParams, function(err, server) {
      //expect(id).to.instanceof(Array);
      done(err);
    });

  });

  it('server_start should start a server', function(done) {

    var glesys = new Glesys(credentials);
    var startParams = {
      'serverid' : nodeGlesysServerId
    };

    glesys.server_start(startParams, function(err, server) {
      //expect(id).to.instanceof(Array);
      done(err);
    });

  });

  it('server_reboot should reboot a server', function(done) {

    var glesys = new Glesys(credentials);
    var rebootParams = {
      'serverid' : nodeGlesysServerId
    };

    glesys.server_reboot(rebootParams, function(err, server) {
      //expect(id).to.instanceof(Array);
      done(err);
    });

  });

  it('server_status should get the status', function(done) {

    var glesys = new Glesys(credentials);
    var statusParams = {
      'serverid' : nodeGlesysServerId
    };

    glesys.server_status(statusParams, function(err, status) {
      //expect(id).to.instanceof(Array);
      done(err);
    });

  });

  it('server_details should get the details', function(done) {

    var glesys = new Glesys(credentials);
    var detailsParams = {
      'serverid' : nodeGlesysServerId
    };

    glesys.server_details(detailsParams, function(err, server) {
      //expect(id).to.instanceof(Array);
      done(err);
    });

  });

  it('server_limits should get the limits', function(done) {

    var glesys = new Glesys(credentials);
    var limitsParams = {
      'serverid' : nodeGlesysServerId
    };

    glesys.server_limits(limitsParams, function(err,limits) {
      //expect(id).to.instanceof(Array);
      done(err);
    });

  });

  it.skip('server_resetlimit should reset the limit', function(done) {

    var glesys = new Glesys(credentials);
    var limitsParams = {
      'serverid' : nodeGlesysServerId
    };

    glesys.server_resetlimit(limitsParams, function(err,limits) {
      //expect(id).to.instanceof(Array);
      done(err);
    });

  });



  it('server_destroy should destroy a server', function(done) {

    var glesys = new Glesys(credentials);
    var destroyParams = {
      'serverid' : nodeGlesysServerId
    };

    glesys.server_destroy(destroyParams, function(err) {
      //expect(id).to.instanceof(Array);
      done(err);
    });

  });

});
