const mongoose = require("mongoose"); 

const Viewing_status = mongoose.model("viewing_status"); 
const Notification = mongoose.model("notification"); 
const Location = mongoose.model("location"); 

// print all parking history of all users
const getAllStatus = async (req, res) => {
    try {
        const all_status = await Viewing_status.find();
        return res.send(all_status); 
    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
}; 

// display a parking record with a specific ID
const getStatusById = async (req, res) => {
    try {
        const status_list = await Viewing_status.find({"id":req.params.id});
        if (!status_list) {
            console.log('account not found');
            return res.send('account not found');
        } else {
            res.render('parkingHistory', {
                title: 'parkingHistory',
                status_list: status_list,
              });
        }
    } catch (err) {
        res.status(400);
        return res.send("Database query failed"); 
    }
}; 

// create a new parking record
// input is all the record information
const createStatus = async (req, res) => {
    try {
        /*
        var newstatus = ({
            id: req.body.id,
            user_id: req.body.user_id,
            license_plate: req.body.license_plate,
            location: req.body.location,
            session: req.body.session,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            status: req.body.status,
        }); 
        */
        
        var item = req.body; 

        var data = new Viewing_status(item); 
        data.save(); 
        
        res.redirect('/'); 
    } catch (err) {
        res.status(400); 
        return res.send("Database query failed");
    }
}; 

//////////////////////////////////////////

// set when a notification is sent
// input is how many minutes before the session ends
const createNotification = async (req, res) => {
    try {
        /*
        var item = {
            id: req.body.id,
            min_before: req.body.min_before,
        }
        */

        var item = req.body; 
        var data = new Notification(item); 
        data.save(); 

        res.redirect('/'); 
    } catch (err) {
        res.status(400); 
        return res.send("Database query failed");
    }
}; 

//////////////////////////////////////////

// let users know where their vehicle is and nevigate them to there, 
// input are latitude and longitude
const createLocation = async (req, res) => {
    try {
        /* var newlocation = {
            id: req.body.id,
            location: req.body.location,
        } */
        var item = req.body; 
        
        var data = new Location(item); 
        data.save(); 

        res.redirect('/'); 
    } catch (err) {
        res.status(400); 
        return res.send("Database query failed");
    }
}; 

module.exports = {
    getAllStatus, 
    getStatusById, 
    createStatus, 
    //updateStatus, 
    createNotification,
    createLocation 
}; 