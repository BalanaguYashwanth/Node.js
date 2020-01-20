var http = require('http');
var fs = require('fs');

function print404(response)
{

    response.writeHead(404,{'context-text':'text/plain'});
    response.write( "this guy 404 error");
    response.end();
}
function onRequest(response,request)
{
    if(request.method == 'GET' && request.url == '/' )
    {
    response.writeHead(200,{'context-text':'text/html'});
    fs.createReadStream("./index.html").pipe(response);
    }
    else{
        print404(response);
    }


}

http.createServer(onRequest).listen(8888);
console.log("Server ha is wking....");
