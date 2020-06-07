const express = require('express');
const feedbackRouter = express.Router();
const mongoose = require("mongoose");
const Feedback = mongoose.model("feedback");


/* GET contact page. */
feedbackRouter.get('/', function(req, res, next) {
    res.render('feedback',{
        cookie: req.signedCookies.account
    });
});

feedbackRouter.post('/', function(req, res, next) {
    const item = ({
        feedback:req.body.feedback,
        parkingId:req.body.parkingId
    });
    const data = new Feedback(item);
    data.save();
    res.render('sendMessage', {
        message: 'Thank you for your feedback. We\'ll endeavour to process your feedback as quickly as possible.',
        cookie: req.signedCookies.account
    });
});

module.exports = feedbackRouter;