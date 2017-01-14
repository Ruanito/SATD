/*
* App requires
*/
var express           = require('express');
var minimist          = require('minimist');

/*
* Create Express app
*/
var app = express();

/*
* Get atgv
*/
var argv = minimist(process.argv.slice(2));

/*
*  Show options help
*/
if (argv.help || argv.h) {
	console.log('Usage: node server.js [OPTIONS]...');
	console.log('');
	console.log('Default port: 8080');
	console.log('-p, --port					port where server will listen');
	console.log('-h, --help					show help and exit');
	return 0;
}

var port = argv.p || argv.port || 8080;

/*
* Start server
*/
app.listen(port, function() {
	console.log('Server is running on port:'+port);
});


/*
* Use web folder to show index
*/
app.use('/', express.static('web'));