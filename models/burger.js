const orm = require("../config/orm.js");

//call orm functions with burger specific input
const burger = {
    //all burgers
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    //add burger
    insertBurger: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    //update burger, will change devoured to true
    updateBurger: function(objColVals, condition, cb) {
        orm.updateBurger("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    }

    module.exports = burger;