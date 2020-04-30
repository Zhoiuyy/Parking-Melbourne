const mongoose = require("mongoose");

// a location schecma for the database
const locationSchema = new mongoose.Schema({
  type: String,
  name: String,
  address: String,
  postcode: String
});

const Location = mongoose.model("locations", locationSchema, "locations"); 
module.exports = Location;
