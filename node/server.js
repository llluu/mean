var connect = require('connect');
var app = connect();

app.use(function(req, res, next) {
//middleware
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
});

app.listen(3000);
console.log('Server Running at http://localhost:3000');
