const mongoose = require('mongoose');

// restriction schema stored in the database
const restrictionSchema = new mongoose.Schema({
    BayID:Number,
    Description1:String,
});

const Restriction = mongoose.model("restriction", restrictionSchema,"restriction");

module.exports = Restriction;

