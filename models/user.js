var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, required: true},
    gender: String,
    ID: String,
    CreditCard: String,
    photo: String
}, {collection: 'Users'});

mongoose.model('users', cafeSchema);