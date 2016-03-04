var history = require('../public/history.json');
var food = 0;
var cloth = 0;
var other = 0;
var grocery = 0;
exports.view = function(req, res){
    for (var i = 0; i < history["savings"].length; i++) {
        if(username == history["savings"][i].username){
            for(var j = 0; j<history["savings"][i].history.length;j++){
                var category = history["savings"][i]["history"][j].category;
                switch(category){
                    case "food":
                        console.log("food is "+history["savings"][i]["history"][j].amount);
                        food+= parseInt(history["savings"][i]["history"][j].amount);
                        break;
                    case "cloth":
                        cloth+= parseInt(history["savings"][i]["history"][j].amount);
                        break;
                    case "other":
                        other += parseInt(history["savings"][i]["history"][j].amount);
                        break;
                    case "grocery":
                        grocery+= parseInt(history["savings"][i]["history"][j].amount);
                        break;
                }
            }
            history["savings"][i]["food"] = food.toString();
            history["savings"][i]["cloth"] = cloth.toString();
            history["savings"][i]["other"] = other.toString();
            history["savings"][i]["grocery"] = grocery.toString();
            res.render('stats',history["savings"][i]);
        }
    }
    console.log(food);
	
};

