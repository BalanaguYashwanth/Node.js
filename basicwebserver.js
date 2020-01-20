var http=require('http');

function onRequest1(request,response)
{
    console.log("this is the user"+request.url);
    response.writeHead(200,{"context-type":"text/plain"});
    response.write("here is some data");
    response.end();
    
}

http.createServer(onRequest1).listen(8888);
console.log("server is runnig");

