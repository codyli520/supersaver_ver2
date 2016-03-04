exports.view = function(req, res){
  res.render('addClothes',{"username": username, "goal":goal,"saving":saving, "needs":needs});
};

