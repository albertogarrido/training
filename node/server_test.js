
var sys = require("sys"),
my_http = require("http");
var hello = "<h1>hello</h1><h2>world</h2>";
my_http.createServer(function(request,response){
    sys.puts("I got kicked");
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(hello);
    response.end();
}).listen(8080);
sys.puts("Server Running on 8080");
