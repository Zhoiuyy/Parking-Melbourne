var express = require('express');
var accountRouter = express.Router();

var accountController = require('../controllers/accountController.js');


/* home page */

accountRouter.get('/', accountController.getAllAccounts);

accountRouter.get('/log-in',function(req, res, next) {
  res.render('index', { title: 'log-in' });
});


accountRouter.get('/sign-up', function(req, res, next) {
  res.send("sign up Page");
});

// handle the POST request to create an account

accountRouter.post('/sign-up',accountController.createAccount);

accountRouter.get('/:id/update', function(req, res, next) {
  res.send("update the accout, id ="+ req.params.id);
});

accountRouter.post('/:id/update',accountController.updateAccounts);
/*
accountRouter.get('/:id/delete', function(req, res, next) {
  res.send("delete the accout,id = " + req.params.id);
});
*/

accountRouter.get('/:id/delete',accountController.deleteAccounts);

accountRouter.get('/:id/history',function(req, res, next) {
  res.send("History Page for id = "+req.params.id);
});

accountRouter.get('/:id', accountController.getAccountById);

accountRouter.get('/:id/payment-details',accountController.getPaymentDetailsById);




module.exports = accountRouter;