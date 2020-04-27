const mongoose = require("mongoose");

const Location = mongoose.model("locations");


    
const getCurrLocation = async (req, res) => {
  try {
    const currLocation = await Location.find();
    return res.send(currLocation);
  } catch (err) {
    res.status(400);
    return res.send("Database query failed");
  }
};
    
const createDestination = async (req, res) => {
  try { 
    dest = req.body;
    res.send(dest)
    // var data = new Location(dest);
    // data.save();
    res.redirect('/');
    } catch (err) {
      res.status(400);
      return res.send("Database query failed");
    }
};


// remember to export the functions
module.exports = {
    getCurrLocation,
    createDestination
};
