var http=require('http');

function onRequest(request,response)
{
    console.log("hi babay"+request.url);
    response.writeHead(200,{"context-Type":"text/plain"});
    response.write('some data is there ');
    response.end();
}

http.createServer(onRequest).listen(8889);
console.log("Server ha is wking....");


