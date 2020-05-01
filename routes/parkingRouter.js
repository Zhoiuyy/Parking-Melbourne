var express = require('express');
var mongoose = require('mongoose'); 
var parkingRouter = express.Router();

var parkingController = require('../controllers/parkingController.js');
 
const Viewing_status = mongoose.model("viewing_status"); 


parkingRouter.get('/', (req, res) => {
   res.send("Welcome to parking homepage! You can manage your parking here. ");  
});

//////////////////////////////////////////

// print all parking history of all users
parkingRouter.get('/viewing_status', parkingController.getAllStatus);


//////////////////////////////////////////

// set when a notification is sent, input is how many minutes 
// before the session ends

/* need test later*/
// display notification time
parkingRouter.get('/setting_notification/:id', (req, res) => {
    Viewing_status.findById({'_id':req.params.id}, function (err, result) {
        if (err) {
            res.send(err); 
        } else {
            res.send("You will be notified " + result.min_before + "before your session ends. "); 
        }
    });
});

//////////////////////////////////////////

// let users know where their vehicle is and nevigate them to there, 
// input is latitude and longitude
parkingRouter.post('/finding_car', parkingController.createLocation); 
parkingRouter.get('/done_finding', (req, res) => {
    res.send("We're looking for your car ..."); 
}); 

// display parking location
parkingRouter.get('/finding_car/:id', function (req, res) {
    Viewing_status.findById({'_id':req.params.id}, function (err, result) {
        if (err) {
            res.send(err); 
        } else {
            res.send("Your car is at " + result.location + "! You'll be directed there now!"); 
        }
    }); 
}); 

//////////////////////////////////////////

// pay for this parking session
parkingRouter.get('/paying', (req, res) => {
    res.send("You have successfully paid for this session!");
}); 

//////////////////////////////////////////

// display a parking record with a specific ID
parkingRouter.get('/:id', parkingController.getStatusById); 

module.exports = parkingRouter; 