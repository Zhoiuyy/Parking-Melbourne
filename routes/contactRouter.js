var express = require('express');
var contactRouter = express.Router();

/* GET contact page. */
contactRouter.get('/', function(req, res, next) {
    res.render('contact');
});

module.exports = contactRouter;