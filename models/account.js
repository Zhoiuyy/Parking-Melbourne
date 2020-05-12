const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    username:String,
    password:String,
    name:String,
    gender: String,
    licenseId:String,
    CardHolderName:String,
    CardNumber:String,
    expiryDate: String,
    CVV:String,
});

const Account = mongoose.model("account", accountSchema,"account");

module.exports = Account;
