var http = require("http");
var counter = 0;
http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	counter++;
	console.log('visit number ' + counter);
	response.end();
}).listen(8888);
