var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request, response, next){
	console.log("Someone request ...");
	next();
}

function doSecond(request, response, next){
	console.log("Someone request second ...");
	next();
}

function profile(request, response){
	console.log("User entered profile");
}

app.use(doFirst);
app.use(doSecond);

app.use('/profile', profile);

http.createServer(app).listen(8888); 
console.log("Server is running...");