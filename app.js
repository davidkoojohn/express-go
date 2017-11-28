
var express = require('express')

var app = express()

app.get('/', function (req, res) {
  res.send('Hello express')
})

var server = app.listen(7777, function () {

  var host = server.address().address

  var port = server.address().port

  console.log('open listening at http://%s:%s', host, port)

})


