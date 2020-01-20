var http=require('http');
var fs=require('fs');

function send404notfound(response)
{
   response.writeHead(404,{"context-type":"plain/text"});
    response.write("error");
    response.end();

}

function onRequest(request,response)
{
    if(request.method=="GET"  && request.url=="/")
    {
    console.log("the data"+request.url);
    request.writeHead(200,{"context-type":"plain/text"});
    fs.createReadStream("./practice.html").pipe(response);
    }
    else
    {
        send404notfound(response);
    }
}

http.createServer(onRequest).listen(8889);
console.log("sever is running......")