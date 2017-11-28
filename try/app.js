
var express = require('express')

var app = express()


var birds = require('./routes/index');

app.use('/', birds);



/*
app.get('/', function (req, res) {
  res.send('Hello express')
})

app.get('/example/b', function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});


var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}*/

//app.get('/example/c', [cb0, cb1, cb2]);


var server = app.listen(7777, function () {

  var host = server.address().address

  var port = server.address().port

  console.log('open listening at http://%s:%s', host, port)

})

