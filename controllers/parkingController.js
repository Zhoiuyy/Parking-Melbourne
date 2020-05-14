const mongoose = require("mongoose"); 

const parkingHistory = mongoose.model("parkingHistory"); 

// print all parking history of all users
const getAllStatus = async (req, res) => {
    try {
        const parkingHistorys = await parkingHistory.find();
        return res.send(parkingHistorys); 
    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
}; 

// display a parking record with a specific ID
const getStatusByUsername = async (req, res) => {
    try {
        const parkingHistorys = await parkingHistory.find({"username":req.params.username});
        if (!parkingHistorys) {
            console.log('account not found');
            return res.send('account not found');
        } else {
            res.render('parkingHistory', {
                title: 'parkingHistory',
                parkingHistorys: parkingHistorys,
                cookie: req.signedCookies.account
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
        var item = req.body; 
        var data = new parkingHistory(item); 
        data.save(); 
        res.redirect('/parking/done_newparking'); 
    } catch (err) {
        res.status(400); 
        return res.send("Database query failed");
    }
}; 



module.exports = {
    getAllStatus, 
    getStatusByUsername, 
    createStatus
}; 