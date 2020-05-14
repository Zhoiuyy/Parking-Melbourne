var express = require('express');
var mongoose = require('mongoose'); 
var parkingRouter = express.Router();

var parkingController = require('../controllers/parkingController.js');
 
//const parkingh = mongoose.model("viewing_status"); 

// access homepage of parking 
parkingRouter.get('/', (req, res) => {
   res.send("Welcome to parking homepage! You can manage your parking here. ");  
});

// print all parking history of all users
parkingRouter.get('/viewing_status', parkingController.getAllStatus);

// create a new parking record, input is all the record information
parkingRouter.post('/newparking', parkingController.createStatus);
parkingRouter.get('/done_newparking', (req, res) => {
    res.send("You have successfully created a new parking record!")
})

/* need test later*/
// display notification time
parkingRouter.get('/setting_notification/:id', (req, res) => {
    Viewing_status.findById({'_id':req.params.id}, function (err, result) {
        if (err) {
            res.send(err); 
        } else {
            res.send("You will be notified " + result.min_before + " minutes before your session ends. "); 
        }
    });
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

// pay for this parking session
parkingRouter.get('/paying', (req, res) => {
    res.send("You have successfully paid for this session!");
}); 

// display a parking record with a specific ID
parkingRouter.get('/:username', parkingController.getStatusByUsername); 

module.exports = parkingRouter; 