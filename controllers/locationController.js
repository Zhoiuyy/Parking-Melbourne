const mongoose = require("mongoose");

// import author model
const Location = mongoose.model("locations");

    
// function to handle a request to get all authors
const getCurrLocation = async (req, res) => {
  try {
    const currLocation = await Location.find();
    return res.send(currLocation);
  } catch (err) {
    res.status(400);
    return res.send("Database query failed");
  }
};
    
  
  

// function to modify author by ID
const updateAuthor = async (req, res) => {
  res.send("Working on this feature");
};

// function to add author
const addAuthor = async (req, res) => {
 res.send("Working on this feature");
};

// function to get author by id
const getAuthorByID = (req, res) => {
  res.send("Working on this feature");
};

// remember to export the functions
module.exports = {
    getCurrLocation,
    getAuthorByID,
    addAuthor,
    updateAuthor
};
