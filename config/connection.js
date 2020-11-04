// Connect Node to MySQL.
var mysql = require("mysql");
var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection(PORT);

connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Wally17mane!",
        database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export the connection.
module.exports = connection;