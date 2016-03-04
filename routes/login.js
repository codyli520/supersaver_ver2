var data = require("../public/data.json");

exports.view = function(req, res){
    var usrname = req.query.username;
    var password = req.query.password;
    var flag = 0;
    
    console.log("usrname is: " + usrname);
    if (usrname != undefined){
        for (var i = 0; i < data["user"].length; i++) {
            console.log("username at " + i + " is: " +data["user"][i].username );
            if(usrname == data["user"][i].username){
                flag = 1;
                if(password == data["user"][i].password){
                    
                    var amountNeeded = (parseInt(data["user"][i].goal)- parseInt(data["user"][i].saving)).toString()
                    data["user"][i].needs = amountNeeded;
                    res.render('index', data["user"][i]);
                    console.log(data);
                    username = data["user"][i]["username"];
                    password = data["user"][i]["password"];
                    goal = data["user"][i]["goal"];
                    saving = data["user"][i]["saving"];
                    needs = (parseInt(goal) - parseInt(saving)).toString();
                    console.log("Need " + amountNeeded);
                    return;
                }
            }
        }

        if(flag == 0){
            res.render('login',{'noSuchUser' : '*User Does Not Exist!'});
        }else if(flag == 1){
            res.render('login', {'wrongPassword' : '*Wrong Password!'});
        }
    }
    else
        res.render('login');
};