var express = require('express');

const lController = require('../controllers/locationController.js');
const pbController = require('../controllers/parkingBay.js');
const navigator = require('../controllers/navigator.js')

// add our router
const router = express.Router();

router.get('/', function(req, res, next) {res.send('Welcome to find-car-park homepage');});

// get current location
router.get('/get-curr-location', (req, res) => lController.getCurrLocation(req, res));

// ask for the input of destination
router.get('/go', (req, res) => pbController.askForDest(req, res));

// ask for the specific type of parking bay
router.get('/filter', (req, res) => pbController.askForType(req, res));

// navigate from the current location to destination
router.get('/navigate', (req, res) => navigator.navigate(req, res))


module.exports = router;

