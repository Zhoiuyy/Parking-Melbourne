var express = require('express');
var feedbackRouter = express.Router();
const mongoose = require("mongoose");
const Feedback = mongoose.model("feedback");


/* GET contact page. */
feedbackRouter.get('/', function(req, res, next) {
    res.render('feedback',{
        cookie: req.signedCookies.account
    });
});

feedbackRouter.post('/', function(req, res, next) {
    var item = ({
        feedback:req.body.feedback,
    });
    var data = new Feedback(item);
    data.save();
    res.render('sendMessage', {
        message: 'Thank you for your feedback. We\'ll endeavour to process your feedback as quickly as possible.',
    });
});

module.exports = feedbackRouter;