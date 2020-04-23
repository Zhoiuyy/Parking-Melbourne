const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({ 
  name: String,
  address: String,
});

const Location = mongoose.model("locations", locationSchema, "locations"); 
module.exports = Location;
