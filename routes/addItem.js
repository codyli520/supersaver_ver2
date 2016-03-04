var items = require("../public/items.json");

exports.addItem= function(req, res) {   
	for (var i = 0; i < items["items"].length; i++) {
        if(username == items["items"][i].username){
            var newItem = {
                "id":(items["items"][i]["item"].length+1).toString(),
                "name":req.query.name,
                "price":req.query.price,
                "url":"http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords="+req.query.name
            }
            items["items"][i]["item"].push(newItem);
            res.render('goal',items["items"][i]);
        }
    }
}