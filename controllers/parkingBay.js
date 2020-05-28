// enter the destination 
const askForDest = (req, res) => {
    res.send("Please enter your destination below: "); 
};

// enter the car park type
const askForType = (req, res) => {
    res.send("Please select the filter for the Parking Bay from below:")
}

module.exports = {
    askForDest,
    askForType
};