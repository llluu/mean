var express = require('express');
var app = express();

// var logger = function(req, res, next) {
// 	console.log(req.method, req.url);

// 	next();
// }

var helloWorld = function(req, res, next) {
//middleware
	//res.setHeader('Content-Type', 'text/plain');
	//res.end('Hello World');
	res.send('Hello World');
};


var goodbyeWorld = function(req, res, next) {
	//res.setHeader('Content-Type', 'text/plain');
	//res.end('Goodbye World');
	res.send('Goodbye World');
};

// app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

app.listen(3000);
console.log('Server Running at http://localhost:3000');

module.exports = app;