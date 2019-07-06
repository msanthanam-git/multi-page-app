var http = require("http");

function onRequest(request,response){
    console.log("A user requested:" + request.url);
    //response.writeHead(200);
    response.write("Requested URL:" + request.url);
    response.end();
}


http.createServer(onRequest).listen(8888);
console.log("http server running in port 8888");
