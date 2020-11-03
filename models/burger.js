const orm = require("../config/orm.js");

//call orm functions with burger specific input
const burger = {
    //all burgers
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    //add burger
    insertBurger: function(cb) {
        orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
    },

    //update burger
    
}