const mongoose = require("mongoose"); 

// create database schemas
const viewing_statusSchema = new mongoose.Schema({
    id: String, 
    user_id: String, 
    license_plate: String,
    location: String, 
    session: String, 
    start_time: String, 
    end_time: String, 
    status: String
}); 

const notificationSchema = new mongoose.Schema({
    id: String, 
    min_before: String
}); 

const locationSchema = new mongoose.Schema({
    id: String, 
    location: String
}); 

const Viewing_status = mongoose.model("viewing_status", viewing_statusSchema, "viewing_status"); 
const Notification = mongoose.model("notification", notificationSchema, "notification")
const Location = mongoose.model("location", locationSchema, "location"); 

module.exports = {
    Viewing_status, 
    Notification, 
    Location
}; 