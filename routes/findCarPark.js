const express = require('express');

const parkingController = require('../controllers/parkingController.js');


// add our router
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('findCarPark', {
      //location:  [144.963, -37.814],
      cookie: req.signedCookies.account
    }); 
  });
// ask for the input of destination
router.post('/', (req, res) => parkingController.createStatus(req, res));

router.get('/parking', (req, res) => parkingController.getParkingStatus(req, res));

router.get('/finishParking', (req, res) => parkingController.finishParking(req, res))


module.exports = router;

