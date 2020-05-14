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

// display a parking record with a specific ID
const getStatusByUsername = async (req, res) => {
    try {
        const status_list = await Viewing_status.find({"username":req.params.username});
        if (!status_list) {
            console.log('account not found');
            return res.send('account not found');
        } else {
            res.render('parkingHistory', {
                title: 'parkingHistory',
                status_list: status_list,
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

        var data = new Viewing_status(item); 
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