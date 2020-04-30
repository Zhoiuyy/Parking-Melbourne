const mongoose = require("mongoose");
const Location = mongoose.model("locations");

const navigate = async (req, res) => {
    const currLocation = await Location.find({"type":"start"});
    //res.send(currLocation);
    const dest = await Location.find({"type":"dest"});
    
    res.send("Navigation Starting point:" + currLocation + "Destination:" + dest + 
    "Redirecting to navigation page...");
};

module.exports = {
    navigate
};