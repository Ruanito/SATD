/*
* Search keyword in the database, if not found insert into
*/
exports.search = function (req, res) {
	var sKeyWord = req.params.keyWord;

	db.query("SELECT * FROM searchs WHERE keyword like ?", [sKeyWord], function (err, results, fields){
		if (err)
			throw err;
		else {
			if (results.length === 0) {
				db.query("INSERT INTO searchs (keyword, date) VALUES (?, now())", [sKeyWord], function(err, result) {
					if (err)
						throw err;
					return res.json({status: "sucess", message: result});
				});
			} else {
				return res.json({status: "sucess", message: results});
			}
		}
	});

}