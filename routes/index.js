var express = require('express');

var app = express()

/* GET home page. */
// 网站首页接受 GET 请求
app.get('/', function(req, res, next) {
  res.render(

    'index',
    {
      title: 'Express'
    }
  );
});

// 网站首页接受 POST 请求
app.post('/', function(req, res) {
  res.send('POST request to the homepage');
});

module.exports = app;
