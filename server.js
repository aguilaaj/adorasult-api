var express = require('express');
var adorasult = require('adorasult');

var app = express();
app.get('/', function (req, res) {
  res.json({ insult: adorasult() });
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Example app listening at http://localhost:%s', port);
});