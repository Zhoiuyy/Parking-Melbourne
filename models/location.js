const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  type: String,
  name: String,
  address: String,
  postcode: String
});

const Location = mongoose.model("locations", locationSchema, "locations"); 
module.exports = Location;
