var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'The Fast and the Furious', 
    cookie: req.signedCookies.account, 
  });
});

module.exports = router;
