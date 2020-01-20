
var url = 'https://api.openweathermap.org/data/2.5/weather?q=Chennai,IN&appid=f45061940afd4b5b797a774284ee92c5&units=metric';
var http= require('http');
var request=require('request');

function onRequest1(request,response)
{
    request(url,function(err,res,body)
    {
        var data = JSON.parse(body);
        response.write("<h1>"+'cityname'+data['name']+"</h1>");
        response.write('hibaby');
        response.end();

    });

    


};



http.createServer(onRequest1).listen(8889)
console.log('server is working....')
