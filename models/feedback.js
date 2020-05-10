const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    comment:String,
});

const Feedback = mongoose.model("feedback", feedbackSchema,"feedback");

module.exports = Feedback;

