// Require express, path, and burger module
var express = require('express');
var burger = require('../models/burger.js');
var path = require('path');

// Set up express router
var router = express.Router();

// Defining paths
router.get("/", function(req, res) {
    if (err) {
        return res.status(500).end();
      }
    res.render("index", { quotes: data });
});

router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});


// Exporting router.
module.exports = router;