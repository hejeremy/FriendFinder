var data = require("../data/friends");
var bodyParser = require("body-parser");
var path = require("path");

module.exports = function(app){
    // Sets up the Express app to handle data parsing
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));

    app.get("/api/friends", function(req, res){
        console.log(".get happened");
    });

    // Create New Characters - takes in JSON input
    app.post("/api/friends", function(req, res) {
        var newcharacter = req.body;
        console.log(newcharacter);

        data.push(newcharacter);
        console.log(JSON.stringify(data));
    });
}
