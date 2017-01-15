/*
* App requires
*/
var express           = require('express');
var minimist          = require('minimist');
var morgan            = require('morgan');
var fs                = require('fs');
var FileStreamRotator = require('file-stream-rotator');
var mysql							= require('mysql');

/*
* Create Express app
*/
var app = express();

/*
* Create database connection
*/
db = mysql.createConnection({
	host: 		'localhost',
	user: 		'sat_dev',
	password: '123mudar',
	database: 'satdata'
});

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

/*
* Crete log directory and file
*/
var logDirectory = __dirname + '/log';
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
var accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: logDirectory + '/access-%DATE%.log',
  frequency: 'daily',
  verbose: false
});

var port = argv.p || argv.port || 8080;

/*
* Start server
*/
app.listen(port, function() {
	console.log('Server is running on port:'+port);
});

/*
* Write in log file
*/
app.use(morgan('combined', {stream: accessLogStream}));

/*
* Use web folder to show index
*/
app.use('/', express.static('web'));