// var currLocation = require('../models/currentlocation');

const askForDest = (req, res) => {
    res.send("Please enter your destination below: "); 
};

module.exports = {
    askForDest,
};