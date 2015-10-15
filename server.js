var express = require('express');
var adorasult = require('adorasult');
var cors = require('cors');

var app = express();
app.use(cors());

app.get('/', function (req, res) {
  res.json({
  	insult: adorasult()
  });
});

var server = app.listen(process.env.PORT ||3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Adorasult is listening on port %s', port);
});