var express = require('express');
var accountRouter = express.Router();

var accountController = require('../controllers/accountController.js');


/* home page */

accountRouter.get('/', accountController.getAllAccounts);

accountRouter.get('/:id', accountController.getAccountById);

accountRouter.get('/log-in',function(req, res, next) {
  res.render('index', { title: 'log-in' });
});

// handle the POST request to add an author
accountRouter.post('/sign-up',accountController.createAccount);

accountRouter.post('/update',accountController.updateAccounts);



accountRouter.get('/history',function(req, res, next) {
  res.render('index', { title: 'history' });
});




module.exports = accountRouter;