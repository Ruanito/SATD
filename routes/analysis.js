/*
* Search keyword in the database, if not found insert into
*/
exports.search = function (req, res) {
	var sKeyWord = req.params.keyWord;
	var iSearch;

	streamingResults = function(search_id) {
		res.json({status: "sucess", resultId: search_id});
	}

	db.query("SELECT * FROM searchs WHERE keyword like ? AND date = CURDATE()", [sKeyWord], function (err, results, fields){
		if (err)
			throw err;
		else {
			if (results.length === 0) {
				db.query("INSERT INTO searchs (keyword, date) VALUES (?, NOW())", [sKeyWord], function(err, result) {
					if (err)
						throw err;
					streamingResults(result.id);
				});
			} else {
				streamingResults(results[0].id);
			}
		}
	});
}