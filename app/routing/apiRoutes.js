var friends = require('../data/friends');

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        if (checkExist(req.body)) {
            console.log('Finding friend...');
            res.json(findBestFit(req.body));
            friends.push(req.body);
        } else {
            console.log('You are already on the friends list!');
            res.json(false);
        }
    });
}

function checkExist(inputObj) {
    let newFriend = true;
    for (let i=0; i<friends.length; i++) {
        if (friends[i].name === inputObj.name && friends[i].photo === inputObj.photo) {
            newFriend = false;
        }
    }
    return newFriend;
}

function findBestFit(inputObj) {
    var friend = {
        name: 'No Results',
        photo: 'https://cdn.dribbble.com/users/308895/screenshots/2598725/no-results.gif',
        score: 40
    }
    for (let i=0; i<friends.length; i++) {
        let score = testCompatibility(inputObj, friends[i]);
        if (score < friend.score) {
            friend = {
                name: friends[i].name,
                photo: friends[i].photo,
                score: score
            }
        }
    }
    return friend;
}

function testCompatibility(obj1, obj2) {
    let totalScore = 0;
    for (let i=0; i<obj1.scores.length; i++) {
        totalScore += Math.abs(obj1.scores[i] - obj2.scores[i]);
    }
    return totalScore;
}