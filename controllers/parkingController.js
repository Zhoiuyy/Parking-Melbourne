const mongoose = require("mongoose"); 

const Viewing_status = mongoose.model("viewing_status"); 

     

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

// create a new parking record
// input is all the record information
const createStatus = async (req, res) => {
    try {
        var item = req.body; 

        var data = new Viewing_status(item); 
        data.save(); 

        res.redirect('/parking/done_status'); 
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

        var item = req.body; 

        var data = new Notification(item); 
        data.save(); 

        res.redirect('/parking/done_notification'); 
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
        
        var item = req.body; 
        
        var data = new Location(item); 
        data.save(); 

        res.redirect('/parking/done_finding'); 
    } catch (err) {
        res.status(400); 
        return res.send("Database query failed");
    }
}; 

//////////////////////////////////////////

// display a parking record with a specific ID
const getStatusById = async (req, res) => {
    try {
        const status = await Viewing_status.find({"id":req.params.id});
        if (status) {
            res.send(status);
        } else {
            res.send("parking does not exist"); 
        }
    } catch (err) {
        res.status(400);
        return res.send("Database query failed"); 
    }
}; 

//////////////////////////////////////////

module.exports = {
    getAllStatus, 
    getStatusById, 
    createStatus, 
    createNotification,
    createLocation
}; 