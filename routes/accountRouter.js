var express = require('express');
var accountRouter = express.Router();

var accountController = require('../controllers/accountController.js');
var parkingController = require('../controllers/parkingController.js');

//all account, for test only
accountRouter.get('/', accountController.getAllAccounts);

// page for login
accountRouter.get('/log-in',function(req, res, next) {
  res.render('logIn', {
    cookie: req.signedCookies.account
  });
});
// handle the POST request to log in 
accountRouter.post('/log-in',accountController.accountLogIn);

//page for sign up
accountRouter.get('/sign-up', function(req, res, next) {
  res.render('signup', {
    cookie: req.signedCookies.account
  });
});

// handle the POST request to create an account
accountRouter.post('/sign-up', accountController.createAccount);


//for log out
accountRouter.get('/log-out', function(req, res, next) {
  res.clearCookie('account')
  res.redirect('/')
}); 

//page for update the account
accountRouter.get('/:username/update', function(req, res, next) {
  res.render('update', {
    title: 'update',
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
accountRouter.post('/:username/update',accountController.updateAccounts);

// handle the POST request to update an account's password
accountRouter.post('/:username/reset-password',accountController.updatePassword);

// page for viewing parking history
accountRouter.get('/:username/history', parkingController.getStatusByUsername);

// page for a specific account
accountRouter.get('/:username', accountController.getAccountByUsername);

module.exports = accountRouter;