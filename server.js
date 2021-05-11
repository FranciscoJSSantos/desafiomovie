var express = require('express');
var path = require('path');
var serverStatic = require('server-static');

var app = express();
app.use(serverStatic(path.join(_dirname, 'dist')))

var port = process.env.PORT || 5000
app.listen(port)
console.log('server started' + port)