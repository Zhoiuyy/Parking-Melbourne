const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    id:String,
    name:String,
    gender: String,
    licenseId:String,
    CreditCard: String,
});

const Account = mongoose.model("account", accountSchema,"account");

module.exports = Account;
