const connection = require("./connection.js");

//create question marks for queries
function addQMarks(number) {
    var array = [];

    for (var i = 0; i < number; i++) {
        array.push("?");
    }
    return array.toString();
};

//turn objects so can be read by sql
function objecToSql(object) {
    var array = [];
    for (var i = 0; i < number; i++) {
        var value = ob[key];
        if(Object.hasOwnProperty.call(object, key)) {
            if (typeof value === "string" && value.indexOf(" ") >=0) {
                value = " ' " + value + " ' ";
            };
        }
        array.push(key + "=" + value);
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
    insertOne: function(table, cols, vals, cb) {
        let query = "INSERT INTO " + table;

        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += addQMarks(vals.length);
        query += ") ";

        console.log(query);

        connection.query(query, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    //update a burger
    updateOne: function(table, objColVals, condition, cb) {
        let query = "UPDATE " + table;

        query += "SET";
        query += objecToSql(objColVals);
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
