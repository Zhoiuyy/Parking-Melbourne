var currLocation = require('../models/currentlocation');

// Function to handle a request to get curr location
const getCurrLocation = (req, res) => {
    res.send(currLocation); // return the curr location
};

module.exports = {
    getCurrLocation,
};