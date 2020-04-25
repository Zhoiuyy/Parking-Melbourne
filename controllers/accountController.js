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
      /*
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
      */      
      var item = req.body;
      //var item = ({name:"Y",gender:"F",licenseId:"1002",CardHolderName:"Y",CardNumber:"123456789",expiryDate:"13/90",CVV:"123"});
      var data = new Account(item);
      //var data = new Account({name:"Y",gender:"F",licenseId:"1002",CardHolderName:"Y",CardNumber:"123456789",expiryDate:"13/90",CVV:"123"});
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
      const id = req.params.id;
      var item = req.body;
      Account.findByIdAndUpdate(id,item);
      /*
      Account.findById(id, function(err, doc) {
      if (err) {
        console.error('error, no account found');
      }
      //doc.id = req.body.id,
      doc = req.body;
      doc.save();
      });
      */
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
