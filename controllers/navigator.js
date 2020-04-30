const mongoose = require("mongoose");
const Location = mongoose.model("locations");

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