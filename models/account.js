const mongoose = require('mongoose');

// account schema stored in the database
const accountSchema = new mongoose.Schema({
    username:String,
    password:String,
    name:String,
    gender: String,
    licenseId:String,
    CardHolderName:String,
    CardNumber:Number,
    expiryDate:String,
    CVV:Number,
});

const Account = mongoose.model("account", accountSchema,"account");

module.exports = Account;
