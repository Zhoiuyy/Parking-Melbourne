const mongoose = require("mongoose");

// import account model
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
    

// function to get account by id
const getAccountById = async (req, res) => {
    try {
        const account = await Account.find({"id":req.params.id});
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

const getPaymentDetailsById = async (req, res) => {
  try {
      const account = await Account.find({"id":req.params.id}, {CardHolderName : 1, CardNumber : 1, expiryDate : 1, CVV : 1});
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


// function to create User
const createAccount = async (req, res) => {
    try {
      
      var item = ({
          id:req.body.id,
          name:req.body.name,
          gender:req.body.gender,
          licenseId:req.body.licenseId,
          CardHolderName:req.body.CardHolderName,
          CardNumber:req.body.CardNumber,
          expiryDate: req.body.expiryDate,
          CVV:req.body.CVV
      });
          
     // var item = req.body;
      var data = new Account(item);
      data.save();

      res.redirect('/');
      } catch (err) {
        res.status(400);
        return res.send("Database query failed");
      }
};

const deleteAccounts = async (req, res) => {
  try {
      
      const id = req.params.id;
      Account.findByIdAndRemove(id).exec();
      res.send("The account was successfully deleted， id = " + id);
      
      
      res.redirect('/');
      
  } catch (err) {
      res.status(400);
      return res.send("Database query failed");
  } 
};



const updateAccounts = async (req, res) => {
  try {
      
      //var item = req.body;
      //Account.findByIdAndUpdate(id,item);
      const id = req.params.id;
      Account.findById(id, function(err, doc) {
      if (err) {
        console.error('error, no account found');
      }
      doc.id = req.body.id,
      doc.name = req.body.name,
      doc.gender = req.body.gender,
      doc.licenseId = req.body.licenseId,
      doc.CardHolderName = req.body.CardHolderName,
      doc.CardNumber = req.body.CardNumber,
      doc.expiryDate =  req.body.expiryDate,
      doc.CVV = req.body.CVV
     
      doc.save();
      });
      res.send("The account was successfully deleted， id = " + id);

      
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
    updateAccounts,
    getPaymentDetailsById,
    deleteAccounts
};
