var data = require("../public/data.json");
var items = require("../public/items.json");
var history = require("../public/history.json");

exports.view = function(req, res){  
	// Your code goes here
    var newUser = {"username": req.query.username, "password": req.query.password, "goal": req.query.goal, "saving" : "0"}
    
    
    var newItem = {"username": req.query.username, "item":[]}
    
    
    var newHistory = {"username": req.query.username, "history":[]}
    
    console.log("name is: " + newUser.username + " " + "password is: " + newUser.password + " goal is: " + newUser.goal);
    
	data["user"].push(newUser);
    items["items"].push(newItem);
    history["savings"].push(newHistory);
    console.log("data length is: " + data["user"].length);
    
    var usrname = req.query.username;
	res.render('signup', {'username' : usrname});
};