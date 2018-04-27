var express = require('express');

var burger = require('../models/burger.js');

var router = express.Router();
var path = require('path');

router.get("/", function(req, res) {
    if (err) {
        return res.status(500).end();
      }
    res.render("index", { quotes: data });
});

router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});



module.exports = router;