var express = require('express');
var feedbackRouter = express.Router();
const mongoose = require("mongoose");
//const Feedback = mongoose.model("feedback");


/* GET contact page. */
feedbackRouter.get('/', function(req, res, next) {
    res.render('feedback');
});

feedbackRouter.post('/', function(req, res, next) {
    var item = ({
        feedback:req.body.feedback,
    });
    var data = new Feedback(item);
    data.save();
    res.render('sendMessage', {
        message: 'Feedback submitted successfully'
    });
});

module.exports = feedbackRouter;