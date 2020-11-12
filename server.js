const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controllers.js");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function(err) {
    if (err) {
        console.error("Error connecting " + err.stack);
    }
    console.log(`App listening on ${PORT}`);
})