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
accountRouter.get('/:id/update', function(req, res, next) {
  res.render('update', {
    title: 'update'
  }); 
});

// handle the POST request to update an account
accountRouter.post('/:id/update',accountController.updateAccounts);

// page for viewing parking history
accountRouter.get('/:username/history', parkingController.getStatusByUsername);

// page for a specific account
accountRouter.get('/:id', accountController.getAccountByUsername);

//accountRouter.get('/:id/payment-details',accountController.getPaymentDetailsById);




module.exports = accountRouter;