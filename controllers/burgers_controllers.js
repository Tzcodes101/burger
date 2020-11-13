const express = require("express");
let burger = require("../models/burger.js");

//create router
let router = express.Router();

//get route for index (aka home)
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

//get route for all
router.get("/burgers", function(req, res) {
    burger.selectAll(function(burgerData) {
        res.render("index", {burger_data: burgerData})
    });
});

//post route, then go back to home page 
router.post("/burgers/add", function(req, res) {
    burger.insertOne(
        ["burger_name", "devoured"], [req.body.burger_name, false], function(result) {
        console.log(result)
        res.redirect("/");
    });
});

//put route
router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        devoured: true}, condition, function(result) {
        if (result.changedRows === 0 ) {
            return res.status(404).end();
        } else {
        console.log(result);
        res.sendStatus(200);
        }
    });
});

module.exports = router;




//export router