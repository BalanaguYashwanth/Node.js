var http = require('http')
var cal = require('./cal')

var result = cal.add(4,5)
console.log(result)

http.createServer(function(req,res){
    res.end('hello world')
}).listen(8000)

