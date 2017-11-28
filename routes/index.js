var express = require('express');
var router = express.Router();

/* GET home page. */
// 网站首页接受 POST 请求
router.get('/', function(req, res, next) {
  res.render(

    'index',
    {
      title: 'Express'
    }
  );
});


module.exports = router;
