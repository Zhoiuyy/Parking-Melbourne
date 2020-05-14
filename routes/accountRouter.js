var express = require('express');
var accountRouter = express.Router();

var accountController = require('../controllers/accountController.js');
var parkingController = require('../controllers/parkingController.js');


/* home page */

accountRouter.get('/', accountController.getAllAccounts);

accountRouter.get('/log-in',function(req, res, next) {
  res.render('logIn', {
    cookie: req.signedCookies.account
  });
});

accountRouter.post('/log-in',accountController.accountLogIn);


accountRouter.get('/sign-up', function(req, res, next) {
  res.render('signup', {
    cookie: req.signedCookies.account
  });
});

accountRouter.get('/log-out', function(req, res, next) {
  res.clearCookie('account')
  res.redirect('/')
});

accountRouter.post('/log-out', function(req, res, next) {
  res.clearCookie('account')
});

// handle the POST request to create an account

accountRouter.post('/sign-up', accountController.createAccount);

// page for update the account
accountRouter.get('/:username/update', function(req, res, next) {
  res.render('update', {
    title: 'update'
  }); 
});

// handle the POST request to update an account
accountRouter.post('/:username/update',accountController.updateAccounts);

//accountRouter.get('/:id/delete',accountController.deleteAccounts);

accountRouter.get('/:username/history', parkingController.getStatusByUsername);

// page for a specific account
accountRouter.get('/:username', accountController.getAccountByUsername);

accountRouter.get('/:username/payment-details',accountController.getPaymentDetailsById);




module.exports = accountRouter;