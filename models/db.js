var mongoose = require('mongoose');

const uri = "mongodb+srv://Ying:<password>@cluster0-piwg5.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri,
    function(err){
    if(!err){
        console.log('Connected to mongo.');
    }else{
        console.log('Failed to connect to mongo!', err);
    }
});

require('./user.js');
