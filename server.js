var http = require('http');
var fs = require('fs');

//404 response
function send404Response(response){
    response.writeHead(404,{"Content-Type": "text/plain"});
    response.write("Error 404: page not found");
    response.end();
}

//handle user request
function onRequest(request, response){
    if(request.url == '/'){
        console.log(request.url);
        response.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("index.html").pipe(response);               
    } else{
        console.log(request.url);
        send404Response(response);
    }
    
}

http.createServer(onRequest).listen(8000);
console.log("Server is running...");

