var friends = require('../data/friends');

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/tables", function(req, res) {
        friends.push(req.body);
        console.log('apiRoutes.js app.post happened.');
        res.json(true);
    });
}
