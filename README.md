# Description
Based on the [Glesys](http://glesys.com) [API documentation](https://github.com/GleSYS/API/wiki/Full-API-Documentation)

# Example Usage

    var Glesys = require('glesys');
    var api = Glesys({ });
    api.server_list({}, function(err, list) {
      console.log(list);
    });

__Note:__ there is currently quite some code duplication, but this allows it for easy code files per request

# API
All request follow the same convention:

`server_list(options, callback)` where callback has `error,value`

## Server
Functions implemented

<pre>
server_allowedarguments.js
server_clone.js
server_console.js
server_costs.js
server_create.js
server_destroy.js
server_details.js
server_edit.js
server_limits.js
server_list.js
server_reboot.js
server_resetlimit.js
server_resetpassword.js
server_resourceusage.js
server_start.js
server_status.js
server_stop.js
server_templates.js
</pre>

## Other
Currently only the server API is implemented

# Tests
- The tests currently run against a real(test) account
- Signing up at Glesys is free, you are only invoiced per usage
- For testing it's best to create a API test account and use that
- This test account will be limited to 2 servers and will not be billed
- `cp config_sample.js config.js` and edit the credentials in the file

# License
MIT
