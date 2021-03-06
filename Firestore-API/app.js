const express = require('express')
const db = require('./firebase')
const cors = require('cors');
const app = express()
app.use(cors())
app.use(express.json());

app.post('/post/:object',async function(req,res){
    var body = await req.body
    db.collection(req.params.object).doc().set(body)
    .then(() => {
        console.log(res.statusCode)
    })
    .catch(err=>{
        console.log(err)
    })
    res.send('sucessfully created..')
})

app.get('/get/:object',async function(req,res){
    const docs= await  db.collection(req.params.object).get()
    docs.forEach((doc)=>(
        console.log(doc.id,doc.data())
    ))
    res.send('successfully call')
})

app.put('/update/:object/:id',async function(req,res){
    const docs=db.collection(req.params.object).doc(req.params.id).set(req.body)
    res.send('successfully updated')
})

app.delete('/delete/:object/:id',async function(req,res){
    const docs=db.collection(req.params.object).doc(req.params.id).delete()
    res.send('successfully deleted')
})


app.listen(8000,(req,res)=>{
    console.log('status:running')
})

