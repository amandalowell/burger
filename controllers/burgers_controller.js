// Dependencies
var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res) { 

  burger.selectAll(function(burger_data){
    console.log(burger_data);
    res.render("index",{burger_data}); 
  })
});    


router.post('/burgers/add', function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
      res.redirect('/'); 
    });
});


router.put('/burgers/update', function(req, res) {
  burger.updateOne(req.body.burger_id, function(result) {
    console.log(result)
    res.redirect("/");
  });
});

module.exports = router;