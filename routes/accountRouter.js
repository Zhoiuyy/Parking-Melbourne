const express = require('express');
const accountRouter = express.Router();
const mongoose = require("mongoose");
const Account = mongoose.model("account");

const accountController = require('../controllers/accountController.js');
const parkingController = require('../controllers/parkingController.js');

// page for login
accountRouter.get('/log-in',function(req, res, next) {
  res.render('logIn', {
    cookie: req.signedCookies.account
  });
});
// handle the POST request to log in 
accountRouter.post('/log-in',  (req, res) => accountController.accountLogIn (req, res));

//page for sign up
accountRouter.get('/sign-up', function(req, res, next) {
  res.render('signup', {
    cookie: req.signedCookies.account
  });
});

// handle the POST request to create an account
accountRouter.post('/sign-up',  (req, res) => accountController.createAccount(req, res));


//for log out
accountRouter.get('/log-out', function(req, res, next) {
  res.clearCookie('account')
  res.redirect('/')
}); 

//page for update the account
accountRouter.get('/:username/update', async function(req, res, next) {
  const account = await Account.findOne({"username":req.params.username});
  res.render('update', {
    title: 'update',
    account: account,
    cookie: req.signedCookies.account
  }); 
});

//page for update the password
accountRouter.get('/:username/reset-password', function(req, res, next) {
  res.render('resetPassword', {
    title: 'resetPassword',
    cookie: req.signedCookies.account
  }); 
});

// handle the POST request to update an account
accountRouter.post('/:username/update', (req, res) => accountController.updateAccounts(req, res));

// handle the POST request to update an account's password
accountRouter.post('/:username/reset-password', (req, res) => accountController.updatePassword(req, res));

// page for viewing parking history
accountRouter.get('/:username/history', (req, res) => parkingController.getStatusByUsername(req, res));

// page for a specific account
accountRouter.get('/:username', (req, res) => accountController.getAccountByUsername(req, res));

module.exports = accountRouter;