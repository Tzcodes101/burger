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
    insertBurger: function(columns, values, cb) {
        orm.insertOne("burgers", columns, values, function(res) {
            cb(res);
        });
    },

    //update burger, will change devoured to true
    updateBurger: function(id, cb) {
        let condition = "id=" + id;
        orm.updateBurger("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burger;