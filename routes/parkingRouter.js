var express = require('express');
var parkingRouter = express.Router();

var parkingController = require('../controllers/parkingController.js');


parkingRouter.get('/', function (req, res) {
   res.send("You're at Router Parking right now");  
});

// print all parking history of all users
parkingRouter.get('/viewing_status', parkingController.getAllStatus);

// create a new parking record, input is all the record information
parkingRouter.post('/newparking', parkingController.createStatus);

// set when a notification is sent, input is how many minutes 
// before the session ends
parkingRouter.post('/setting_notification', parkingController.createNotification);

// let users know where their vehicle is and nevigate them to there, 
// input is latitude and longitude
parkingRouter.post('/finding_car', parkingController.createLocation); 

// pay for this parking session
parkingRouter.get('/paying', function (req, res) {
    res.send("you have successfully paid for this session!");
}); 

// display a parking record with a specific ID
parkingRouter.get('/:id', parkingController.getStatusById); 

module.exports = parkingRouter; 