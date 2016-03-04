exports.view = function(req, res){
	res.render('addOthers',{"username": username, "goal":goal,"saving":saving, "needs":needs});
};

