// Require express, path, and burger module
var express = require('express');
var burger = require('../models/burger.js');
var path = require('path');

// Set up express router
var router = express.Router();

// Defining paths
router.get("/", function(req, res) {
    burger.selectAll(function(data){
        var hbObject = {
            burgers : data
        };
        console.log(hbObject);
        res.render("index", hbObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burger_name,'false',function(result){
        res.json({ id: result.insertId });
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = 'id = ' +req.params.id; 
    connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      else if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
  
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne(newDevour, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

// Exporting router.
module.exports = router;