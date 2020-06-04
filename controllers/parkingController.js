const mongoose = require("mongoose"); 
const parkingHistory = mongoose.model("parkingHistory"); 
const Layer = mongoose.model("layer");
const Restriction = mongoose.model("restriction");
var uuid = require('node-uuid');


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
        var layer=  await Layer.findOne({"bay_id":req.body.location});            
        var restriction = await Restriction.findOne({"BayID":req.body.location});

        if (!layer || !restriction) {
            console.log('parking bay not found');
            res.render('sendMessage', {
                message: 'parking bay not available, please choose another parking bay',
                cookie: req.signedCookies.account,
            });
        }else{
        
            var myDate = new Date();
            var item = ({
                username:req.signedCookies.account,
                parkingBayID:req.body.location,
                location: layer.rd_seg_dsc, 
                session: restriction.Description1,
                status:"parking",
                date: myDate.toLocaleDateString(),
                start: myDate.toLocaleTimeString(),
                parkingID: uuid.v1(),
            });
            
            var data = new parkingHistory(item);
            data.save();
            
            res.render('sendMessage', {
            message: 'your parking information has been recorded, you can check in your parking history',
            cookie: req.signedCookies.account,
            });
        }
        
        
    } catch (err) {
        res.status=400; 
        console.log(err);
        return res.send(err);
    }
}; 



module.exports = {
    getAllStatus, 
    getStatusByUsername, 
    createStatus
}; 