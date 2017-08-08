var cool = require('cool-ascii-faces');
var express = require('express');
var config = require('./config');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use('/assets', express.static(__dirname + config.root + '/assets'));

// views is directory for all template files
app.set('/views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('./pages/index');
});

app.get('/test', function(request, response) {
  response.render('pages/test');
});

app.get('/trilogy-hub', function(request, response) {
  response.render('pages/trilogy-hub');
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
