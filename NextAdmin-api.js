const express = require('express')
const db = require('./firebase')
const admin = require('firebase-admin')
const app=express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.post('/signup',function(req,res){
    email=req.body['email'],
    password=req.body['password']

    admin.auth().createUser({
        email:email,
        password:password
    }).then(resHandler=>{
        console.log(resHandler.uid)
        res.send('done')
    })
    .catch(err=>{
        console.log(err)
        res.send(err.message)
    })
})

app.get('/api/get/:object',async function(req,res){
    allentries=[]
    const entries=await db.collection(req.params.object).get()
    entries.forEach((entry)=>(
        allentries.push(entry.data())
    ))
    res.status(200).json(allentries)
})

app.get('/api/get/:object/:id',async function(req,res){
    allentries=[]
    const entries=await db.collection(req.params.object).doc(req.params.id).get()
    res.status(200).json(entries.data())
})


app.post('/api/post/:object/:id',function(req,res){
    db.collection(req.params.object).doc(req.params.id).set(req.body)
    .then(result=>{
        console.log(result)
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
        res.send(err)
    })
})

app.post('/api/post/:object',function(req,res){
    db.collection(req.params.object).doc().set(req.body)
    .then(result=>{
        console.log(result)
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
        res.send(err)
    })
})


app.delete('/api/delete/:object/:id',function(req,res){
    db.collection(req.params.object).doc(req.params.id).delete()
    .then(result=>{
        console.log(result)
        res.send('successfully deleted')
    })
    .catch(err=>{
        console.log(err.response)
        res.send(err)
    })
})


app.listen(8000,function(req,res){
    console.log('started')
})
