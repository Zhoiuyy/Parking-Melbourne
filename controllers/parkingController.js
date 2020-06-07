const mongoose = require("mongoose"); 
const parkingHistory = mongoose.model("parkingHistory"); 
const Layer = mongoose.model("layer");
const Restriction = mongoose.model("restriction");
const uuid = require('node-uuid');




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
        res.statusCode = 400;
        return res.send("Database query failed"); 
    }
}; 

// display a parking information
const getParkingStatus = async (req, res) => {
    try {
       
        const parking = await parkingHistory.findOne({"status":"parking", "username":req.signedCookies.account});
        if (!parking) {
            console.log('parking history not found');
            res.render('sendMessage', {
                message: 'You do not have any ongoing parking status, start parking on Find Car Park page',
                cookie: req.signedCookies.account,
            });
        } else {
            res.render('parking', {
                parking: parking,
                cookie: req.signedCookies.account
            });
        }
    } catch (err) {
        res.statusCode = 400;
        return res.send("Database query failed"); 
    }
}; 

//change parking status
const finishParking = async (req, res) => {
    try {
        const myDate = new Date();
        const parking = await parkingHistory.findOne({"status":"parking", "username":req.signedCookies.account});
        parkingHistory.findById(parking._id, function(err, doc) {
            if (err) {
              res.statusCode = 400;
              console.error('error, no account found');
            }
            
            doc.status = "finished",
            doc.end =  myDate.toLocaleTimeString();
            doc.save();
        });
        res.render('sendMessage', {
            message: "You have successfully paid for this session! ",
            cookie: req.signedCookies.account
        });
        
    } catch (err) {
        res.statusCode = 400;
        console.log(err);
        //return res.send("Database query failed"); 
    }
}; 

// create a new parking record
// input is all the record information
const createStatus = async (req, res) => {
    try {
        const layer=  await Layer.findOne({"bay_id":req.body.location});            
        const restriction = await Restriction.findOne({"BayID":req.body.location});
        const parking = await parkingHistory.findOne({"status":"parking", "username":req.signedCookies.account});
        if(parking){
            console.log('ongoing parking status');
            res.render('sendMessage', {
                message: 'you have ongoing parking status, click parking at the top right corner to finish your parking first',
                cookie: req.signedCookies.account,
            });
        }else if (!layer || !restriction) {
            console.log('parking bay not found');
            res.render('sendMessage', {
                message: 'parking bay not available, please choose another parking bay',
                cookie: req.signedCookies.account,
            });
        }else{
        
            const myDate = new Date();
            const item = ({
                username:req.signedCookies.account,
                parkingBayID:req.body.location,
                location: layer.rd_seg_dsc, 
                session: restriction.Description1,
                status:"parking",
                date: myDate.toLocaleDateString(),
                start: myDate.toLocaleTimeString(),
                parkingID: uuid.v1(),
            });
            
            const data = new parkingHistory(item);
            data.save();
            
            res.render('sendMessage', {
            message: 'your parking information has been recorded, you can check in your parking history',
            cookie: req.signedCookies.account,
            });
        }
        
        
    } catch (err) {
        res.statusCode = 400;
        console.log(err);
        return res.send(err);
    }
}; 



module.exports = {
    getStatusByUsername, 
    createStatus,
    getParkingStatus,
    finishParking,
}; 