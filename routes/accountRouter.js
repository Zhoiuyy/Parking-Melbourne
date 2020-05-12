var express = require('express');
var accountRouter = express.Router();

var accountController = require('../controllers/accountController.js');
var parkingController = require('../controllers/parkingController.js');


/* home page */

accountRouter.get('/', accountController.getAllAccounts);

accountRouter.get('/log-in',function(req, res, next) {
  res.render('logIn');
});

accountRouter.post('/log-in',accountController.accountLogIn);


accountRouter.get('/sign-up', function(req, res, next) {
  res.render('signup', {
    title: 'sign-up'
  });
});

// handle the POST request to create an account

accountRouter.post('/sign-up', accountController.createAccount);


accountRouter.get('/:id/update', function(req, res, next) {
  res.render('update', {
    title: 'update'
  }); 
});

accountRouter.post('/:id/update',accountController.updateAccounts);

//accountRouter.get('/:id/delete',accountController.deleteAccounts);

accountRouter.get('/:id/history', parkingController.getStatusById);

accountRouter.get('/:id', accountController.getAccountById);

accountRouter.get('/:id/payment-details',accountController.getPaymentDetailsById);




module.exports = accountRouter;