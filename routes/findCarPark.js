var express = require('express');
var router = express.Router();

/* GET findCarPark page. */
router.get('/findCarPark', function(req, res) {
  res.send('Welcome to EasiParking');
});

module.exports = router;
