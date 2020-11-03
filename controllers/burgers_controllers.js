const express = require("express");
const burger = require("../models/burger.js");

//create router
const router = express.Router();

//get route for index (aka home)
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

//get route for all
router.get("/burgers", function(req, res) {
    burger.selectAll(function(burgerData) {
        res.render("index", {burger_date: burgerData})
    });
});

//post route, then go back to home page 
router.post("/burgers/add", function(req, res) {
    burger.insertBurger(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/");
    });
});

//put route
router.put("/burgers/:id", function(req, res) {
    burger.updateBurger(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;




//export router