const mongoose = require("mongoose"); 

// parking history schema stored in the database
const parkingHistorySchema = new mongoose.Schema({
    username: String, 
    registrationNumber: String,
    location: String, 
    session: String,
    date: String, 
    start: String, 
    end: String, 
    status: String,
    parkingID:String
}); 

const parkingHistory = mongoose.model("parkingHistory", parkingHistorySchema, "parkingHistory"); 

module.exports = {
    parkingHistory
}; 