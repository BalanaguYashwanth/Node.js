var http=require('http')
var connect = require('connect')


function code(request,respone,next)
{
    console.log("bunti");
    //next() // next code will be execute with it simuntanoeasuly
}

function dosecond(request,response,next)
{
    console.log('hiji');
    //next()

}

app=connect()
app.use('/code',code)
app.use('/dosecond',dosecond)
http.createServer(app).listen(8889);
console.log('server is working...')