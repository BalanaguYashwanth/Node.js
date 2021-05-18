var http = require('http')

function add(a,b){
    return a+b
}

var result = add(4,5)
console.log(result)

http.createServer(function(req,res){
    res.end('hello world')
}).listen(8000)

