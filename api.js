var express = require('express')

var app = express()

app.get('/',function(req,res){
    res.send('hello all working...')
})

app.get('/api/:id',function(req,res){ //passing parameter
    let id = req.params.id
    res.send('hello yash '+id)
})

app.get('/telsuko',function(req,res){ // passing query
    let queries=req.query.id
    res.send('hey all '+queries)
})

app.listen(8000, function(res,req){
    console.log('status:running')
})
