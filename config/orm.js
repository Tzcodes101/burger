const connection = require("./connection.js");

//create question marks for queries
function addQMarks(number) {
    let array = [];

    for (var i = 0; i < number; i++) {
        array.push("?");
    }
    return array.toString();
};

//turn objects so can be read by sql
function objecToSql(object) {
    let array = [];
    for (var i = 0; i < number; i++) {
        array.push(key + "=" + object[key]);
    }
    return array.toString();
};

var orm = {

    //select all burgers
    selectAll: function(tableName, cb) {
        let query = "Select * FROM " + tableName + ";";
        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    //insert a burger
    insertOne: function(table, columns, values, cb) {
        let query = "INSERT INTO " + table;

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
        let query = "UPDATE " + table;

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
