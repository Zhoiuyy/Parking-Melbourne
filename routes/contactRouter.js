const express = require('express');
const contactRouter = express.Router();

/* GET contact page. */
contactRouter.get('/', function(req, res, next) {
    res.render('contact',{
        cookie: req.signedCookies.account
    });
});

module.exports = contactRouter;