/**
 * Created by shevchuk on 19/03/15.
 */
var querystring = require('querystring');
var http = require('http');

var postData = querystring.stringify({
    'msg' : 'Hello World!'
});

var options = {
    hostname: 'localhost',
    port: 15000,
    //path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    }
};

var req = http.request(options);

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

req.on('response', function (res) {
   if (res.statusCode == 200) {
       console.log(200, "OK")
   }
})

// write data to request body
req.write(postData);
req.end();