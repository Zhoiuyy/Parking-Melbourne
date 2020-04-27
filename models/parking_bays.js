const mongoose = require("mongoose");

const parkingBaySchema = new mongoose.Schema({ 
  Bay_number: String,
  Address: String,
  Postcode: String
});

const ParkingBay = mongoose.model("parking_bays", parkingBaySchema, "parking_bays"); 
module.exports = ParkingBay;
