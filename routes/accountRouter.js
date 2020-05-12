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
  res.send("update the accout, id ="+ req.params.id);
});

accountRouter.post('/:id/update',accountController.updateAccounts);

//accountRouter.get('/:id/delete',accountController.deleteAccounts);

accountRouter.get('/history/username', parkingController.getStatusByUsername);

accountRouter.get('/:id', accountController.getAccountByUsername);

accountRouter.get('/:id/payment-details',accountController.getPaymentDetailsById);




module.exports = accountRouter;