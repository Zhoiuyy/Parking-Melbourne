var express = require('express');

const lfController = require('../controllers/locationFinder.js');
const pbController = require('../controllers/parkingBay.js');

// add our router
const router = express.Router();

router.get('/', function(req, res, next) {res.send('Welcome to find-car-park homepage');});

// get current location
router.get('/get-curr-location', (req, res) => lfController.getCurrLocation(req, res));

// ask for the input of destination
router.get('/go', (req, res) => pbController.askForDest(req, res));



module.exports = router;

