const mongoose = require("mongoose");

// import author model
const Account = mongoose.model("account");

    
// function to handle a request to get all users
const getAllAccounts = async (req, res) => {
  try {
    const all_accounts = await Account.find();
    return res.send(all_accounts);
  } catch (err) {
    res.status(400);
    return res.send("Database query failed");
  }
};
    

// function to create User
const createAccount = async (req, res) => {
    try {
      
      var item = {
          id:req.body.id,
          name:req.body.name,
          gender:req.body.gender,
          licenseId:req.body.licenseId,
          CreditCard:req.body.CreditCard,
      }
      
      
      //var item = req.body;
      var data = new Account(item);
      data.save();

      res.redirect('/');
      } catch (err) {
        res.status(400);
        return res.send("Database query failed");
      }
};


// function to get user by id
const getAccountById = (req, res) => {
    try {
        const account = Account.find({"id":"1"});
        if (account){
            res.send(account); 
        } 
        else{
            res.send("User did not exist");
        }
        
    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    } 
};

const updateAccounts = async (req, res) => {
  try {
      const id = req.body.id;
      Account.findById(id, function(err, doc) {
      if (err) {
        console.error('error, no account found');
      }
      doc.id = req.body.id,
      doc.name = req.body.name,
      doc.gender = req.body.gender,
      doc.licenseId = req.body.licenseId,
      doc.CreditCard = req.body.CreditCard,
      doc.save();
      });
      res.redirect('/');
  } catch (err) {
      res.status(400);
      return res.send("Database query failed");
  }
};



// remember to export the functions
module.exports = {
    getAllAccounts,
    createAccount,
    getAccountById,
    updateAccounts
};
