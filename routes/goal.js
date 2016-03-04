var items = require("../public/items.json");
var user = require("../public/data.json");

exports.view = function(req, res){  

    for (var i = 0; i < user["user"].length; i++) {
        if(username == user["user"][i].username){
            console.log("im here")
            var goal = parseInt(user["user"][i].goal); 
            var saving = parseInt(user["user"][i].saving); 
            var percent = (saving * 100 / goal).toString();
            console.log("percentage is: " + percent);
            
            
            
            for (var j = 0; j < items["items"].length; j++) {
                console.log("username is: " + username);
                if(username == items["items"][j].username){
                    items["items"][j].goal = goal;
                    items["items"][j].saving = saving;
                    items["items"][j].percentage = (Math.round(saving*1000/goal)/10).toString();
                    console.log(items["items"][j]);
                    res.render('goal', items["items"][j]);
                }
            }
        }
    }  
};

exports.getItemDetail = function(req, res) {
	var itemID = req.params.id;
    itemID = parseInt(itemID);
    
    for (var i = 0; i < items["items"].length; i++) {
        if(username == items["items"][i].username){
            console.log(items["items"][i]["item"][itemID-1]);
  	         res.json(items["items"][i]["item"][itemID-1]);
        }
    }
  	
}
  
