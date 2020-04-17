var express = require('express');
var accountRouter = express.Router();

var accountController = require('../controllers/accountController.js');


/* home page */
accountRouter.get('/',function(req, res, next) {
  res.render('index', { title: 'account' });
});

accountRouter.get('/log-in',function(req, res, next) {
    res.render('index', { title: 'log-in' });
});

accountRouter.get('/sign-up',function(req, res, next) {
    res.render('index', { title: 'sign-up' });
});

accountRouter.get('/contact',function(req, res, next) {
    res.render('index', { title: 'contact' });
});

accountRouter.get('/history',function(req, res, next) {
    res.render('index', { title: 'history' });
});

accountRouter.get('/car-details',function(req, res, next) {
    res.render('index', { title: 'car-details' });
});
  
accountRouter.get('/payment-details',function(req, res, next) {
    res.render('index', { title: 'payment-details' });
});


module.exports = accountRouter;