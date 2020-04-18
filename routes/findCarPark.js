var express = require('express');
var router = express.Router();

/* GET findCarPark page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to EasiParking' });
});

module.exports = router;
