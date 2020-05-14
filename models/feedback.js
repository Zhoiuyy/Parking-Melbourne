const mongoose = require('mongoose');

// feedback schema stored in the database
const feedbackSchema = new mongoose.Schema({
    comment:String,
    parkingId:String,
});

const Feedback = mongoose.model("feedback", feedbackSchema,"feedback");

module.exports = Feedback;

