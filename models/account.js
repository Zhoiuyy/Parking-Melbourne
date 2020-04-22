const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    id:String,
    name: {type: String, required: true},
    gender: String,
    licenseId:String,
    CreditCard: String,
}, {collection: 'account'});

const Account = mongoose.model("account", accountSchema);

module.exports = Account;
