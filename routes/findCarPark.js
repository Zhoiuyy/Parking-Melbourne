var express = require('express');

const locationController = require('../controllers/locationController.js');
const pbController = require('../controllers/parkingBay.js');
const navigator = require('../controllers/navigator.js')
var parkingController = require('../controllers/parkingController.js');


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
// get current location
router.get('/get-curr-location', (req, res) => locationController.getCurrLocation(req, res));


// ask for the specific type of parking bay
router.get('/filter', (req, res) => pbController.askForType(req, res));

// navigate from the current location to destination
router.get('/navigate', (req, res) => navigator.navigate(req, res))


module.exports = router;

