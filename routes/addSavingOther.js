var data = require("../public/data.json");
var history = require("../public/history.json");

exports.view = function(req, res){
    
    var input = req.query.inputAmount;

    for (var i = 0; i < data["user"].length; i++) {
        if(username == data["user"][i].username){
            var resultSaving = parseInt(data["user"][i].saving) + parseInt(input); 
            var resultNeeds = parseInt(data["user"][i].needs) - parseInt(input); 
            data["user"][i].saving = resultSaving;   
            data["user"][i].needs = resultNeeds;  
        }
    }  
    
     for (var i = 0; i < history["savings"].length; i++) {
        if(username == history["savings"][i].username){
            var currentdate = new Date(); 
            var date = currentdate.getFullYear() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getDate();
            var newRecord = {"date":date,"category":"other","amount": input};
            history["savings"][i]["history"].push(newRecord);
        }
      }
    
    res.render('addOthers', {'confirmationMessage' : "You have successfully added $" + input + "!"});

};