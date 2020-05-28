const mongoose = require("mongoose");
const Location = mongoose.model("locations");
/*
const showmap = async (req, res) => {
    try {
        res.render('findCarPark', {
        cookie: req.signedCookies.account
        }); 
    } catch (err) {
    res.status(400);
    return res.send("Database query failed");
    }
};
*/

// print the starting point and destination
const navigate = async (req, res) => {
    const currLocation = await Location.find({"type":"start"});
    const dest = await Location.find({"type":"dest"});
    
    res.send("Navigation Starting point:" + currLocation + "Destination:" + dest + 
    "Redirecting to navigation page...");
};

module.exports = {
    navigate
};