const mongoose = require('mongoose');

// account schema stored in the database
const feedbackSchema = new mongoose.Schema({
    comment:String,
});

const Feedback = mongoose.model("feedback", feedbackSchema,"feedback");

module.exports = Feedback;

