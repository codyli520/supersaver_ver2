exports.view = function(req, res){
	res.render('addFood',{"username": username, "goal":goal,"saving":saving, "needs":needs});
};

