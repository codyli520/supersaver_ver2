exports.view = function(req, res){
	res.render('addGrocery',{"username": username, "goal":goal, "saving":saving, "needs":needs});
};

