const mongoose = require("mongoose"); 

// parking history schema stored in the database
const viewing_statusSchema = new mongoose.Schema({
    username: String, 
    user_id: String, 
    license_plate: String,
    location: String, 
    session: String, 
    start_time: String, 
    end_time: String, 
    min_before: String, 
    status: String
}); 

const Viewing_status = mongoose.model("viewing_status", viewing_statusSchema, "viewing_status"); 

module.exports = {
    Viewing_status
}; 