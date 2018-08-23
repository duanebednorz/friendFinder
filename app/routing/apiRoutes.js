var friendsList = require("../data/friends");

module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friendsList);
		
	})

// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
	var newFriend = req.body;
	var newScore = 0;
	var total = 0;
	var match = {
		name: "",
		photo: "",
		scores: 10000
	}
	
	// Calculating totals 
	for (var i = 0; i < friendsList.length; i++) {
		total = 0;

		for (var j = 0; j < friendsList[i].scores.length; j++) {
			total += Math.abs(friendsList[i].scores[j] - newFriend.scores[j]);

			if (total <= match.scores) {
				match.name = friendsList[i].name,
				match.photo = friendsList[i].photo,
				match.scores = total
			}
    	}
    }
    friendsList.push(newFriend);
    res.json(match);
    console.log(match);
});
}