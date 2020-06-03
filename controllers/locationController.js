const mongoose = require("mongoose");
const Location = mongoose.model("locations");
    
// get the "fake" current location from the database
const getCurrLocation = async (req, res) => {
  try {
    const currLocation = await Location.find({"type":"start"});
    res.send(currLocation);
  } catch (err) {
    res.status(400);
    return res.send("Database query failed");
  }
};

// update the destination using post function
const updateDestination = async (req, res) => {
  Location.findById("5eaa58f9364a020fd5599c55", function(err, doc){
    if(err){
      console.log("Warning, cannot find dest in the datebase!");
    }
    doc.name = req.body.name,
    doc.address = req.body.address,
    doc.postcode = req.body.postcode,
    
    doc.save();
  });
  res.redirect('/');
}
    
// insert a new location into the database.
const createLocation = async (req, res) => {
  try { 
    item = req.body;
    var data = new Location(item);
    data.save();
    //res.redirect(`/navigate?destination=${dest.id}`);
    res.send("done");
    res.redirect('/findCarPark');
    } catch (err) {
      res.status(400);
      return res.send("Database query failed");
    }
};





// remember to export the functions
module.exports = {
    getCurrLocation,
    createLocation,
    updateDestination
};
