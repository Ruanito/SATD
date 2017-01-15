exports.search = function (req, res) {
	var sKeyWord = req.params.keyWord;
	
	res.json({status: 'sucess', message: sKeyWord});
}