const mongoose = require("mongoose");
const Crypt = require("./crypt");
// import account model
const Account = mongoose.model("account");

    
    

// function to get account by username
const getAccountByUsername = async (req, res) => {
    try {
        console.log(req.params.username); 
        const account = await Account.findOne({"username":req.params.username});
        if (!account) {
          // send the message if the user is not in the database
          console.log('account not found'); 
          return res.send('account not found'); 
        } else {
          // display the user in viewaccout format
          res.render('viewaccount', {
            title: 'viewaccount', 
            account: account,
            cookie: req.signedCookies.account
          }); 
        }
    } catch (err) {
        res.status = 400;
        return res.send("Database query failed");
    } 
};


// fucntion that handles the log in request
const accountLogIn = async (req, res) => {
  const Username = req.body.username;
  const userPassword = req.body.password;
  try {
    // check if the account in the db first
    const account = await Account.findOne({"username":Username});
    if (!account) {
      res.status = 400;
      console.log("account not found");

      return res.render('logIn', {
        message: 'Account not found!!!',
        cookie: req.signedCookies.account
      });
    }
    // then check if the password can match with the password stored in db
    const checkPassword = Crypt.decrypt(userPassword, account.password);
    if(!checkPassword){
      console.log("password incorrect");
      return res.render('logIn', {
        message: 'Password incorrect!!!',
        cookie: req.signedCookies.account
      });
    }
    res.cookie("account",Username, {maxAge: 60000000 , signed:true});
    res.redirect('/');
    
  } catch (err) {
    res.status(400);
    return res.send("Database query failed");
  }
};

// function to create a new account
const createAccount = async (req, res) => {
  
  try {
    // since the username is designed to be unique, check if the username
    // has been taken first
    const account = await Account.findOne({"username":req.body.username,});
    if (account) {
      res.status = 400;

      console.log("This username has already been used by others");
      // display the warning for the user that the username has been taken
      res.render('signup', {
        message:'This username has already been used by others',
        cookie: req.signedCookies.account
      });
      
    }
    else{
      var item = ({
        username:req.body.username,
        password:Crypt.encrypt(req.body.password),
        name:req.body.name,
        gender:req.body.gender,
        licenseId:req.body.licenseId,
        CardHolderName:req.body.CardHolderName,
        CardNumber:req.body.CardNumber,
        expiryDate: req.body.expiryDate,
        CVV:req.body.CVV
    });
        
    var data = new Account(item);
    data.save();
    // remind the user that signed up is successful.
    res.render('sendMessage', {
      message: 'You have successfully signed up the account. You can log in now.',
      cookie: req.signedCookies.account
    });} 
    }
    catch (err) {
      res.status = 400;
      res.render('sendMessage', {
        message: 'You have failed signing up.',
        cookie: req.signedCookies.account
      });
    }
}



// function that handle the updating request of the account
const updateAccounts = async (req, res) => {
  try {
  
      const username = req.params.username;
      const account = await Account.findOne({"username":req.params.username});
      Account.findById(account._id, function(err, doc) {
      if (err) {
        console.error('error, no account found');
      }
      
      doc.name = req.body.name,
      doc.gender = req.body.gender,
      doc.licenseId = req.body.licenseId,
      doc.CardHolderName = req.body.CardHolderName,
      doc.CardNumber = req.body.CardNumber,
      doc.expiryDate =  req.body.expiryDate,
      doc.CVV = req.body.CVV
     
      doc.save();
      });
      // using the updating form in pug to finish updating
      console.log('information updated successfully')
      return res.render('sendMessage', {
        message: 'You have successfully updated your information!',
        cookie: req.signedCookies.account, 
      }); 

  } catch (err) {
    res.status = 400;
    return res.send("Database query failed");
  }
};


const updatePassword = async (req, res) => {
  try {
      const username = req.params.username;
      const account = await Account.findOne({"username":req.params.username});
      Account.findById(account._id, function(err, doc) {
        if(req.body.passwordOne.localeCompare(req.body.passwordTwo) == 0){          
          doc.password = Crypt.encrypt(req.body.passwordOne),
          doc.save();
          console.log('You have successfully updated your password!')
          res.clearCookie('account')
          return res.render('sendMessage', {
            message: 'You have successfully updated your password! Please go back to the home page and log in again.',
            cookie: req.signedCookies.account, 
        });
        }
        else{
          res.render('resetPassword', {
            message:'The two passwords have to match',
            cookie: req.signedCookies.account
          });
        }
        
      });
  } catch (err) {
    res.status = 400;
    return res.send("Database query failed");
  }
};


// export the functions
module.exports = {
    createAccount,
    getAccountByUsername,
    updateAccounts,
    accountLogIn,
    updatePassword
};
