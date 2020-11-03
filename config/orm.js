const connection = require("./connection.js");

function addQMarks(number) {
    let array = [];

    for (var i = 0; i < number; i++) {
        array.push("?");
    }
    return array.toString();
};

function objecToSql(object) {
    let array = [];
    for (var i = 0; i < number; i++) {
        array.push(key + "=" + object[key]);
    }
    return array.toString();
};

const orm = {

    //select all burgers
    selectAll: function(tableInput, cb) {
        const query = "Select * FROM " + tableInput + ";";
        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    //insert a burger
    insertOne: function(table, columns, values, cb) {
        const query = "INSERT INTO " + table;

        query += " (";
        query += columns.toString();
        query += ") ";
        query += "VALUES (";
        query += addQMarks(values.length);
        query += ") ";

        console.log(query);

        connection.query(query, values, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    //update a burger
    updateBurger: function(table, colValsAsObj, condition, cb) {
        const query = "UPDATE " + table;

        query += "SET";
        query += objecToSql(colValsAsObj);
        query += " Where ";
        query += condition;

        console.log(query);
        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
