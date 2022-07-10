const express  = require('express')
const app = express()
const pool = require('./db')

app.use(express.json())

//get

app.get('/gettodos',async (req,res)=>{
    try{
        const response  = await pool.query('SELECT * FROM todo')
        res.json(response.rows)
    }catch(err){
        console.log(err.message)
        res.json({'error':err.message})
    }
})


//get id

app.get('/gettodosbyid',async (req,res)=>{
    try{
        const {id} = req.query
       const response = await pool.query(`SELECT * FROM todo WHERE todo_id = ${id}`)
        res.json(response.rows)
    }catch(err){
        res.json(err.message)
    }
})


//get search 

app.get('/gettodosearch',async(req,res)=>{
    try{
        const {description} = req.query 
        const response = await  pool.query(`SELECT description FROM todo WHERE description ILIKE $1 `,[`%${description}%`]) // It will convert into lowercase and compare eachother
        res.json(response.rows)
    }catch(err){
        res.json(err.message)
    }
})

//post

app.post('/todos',async (req,res)=>{
    try{
        const {description} = req.body
        const newTodo = await pool.query(`INSERT INTO todo(description) VALUES ($1) RETURNING *;`,[description])
        res.json(newTodo.rows)
    }catch(err){
        res.json(err.message)
        console.error(err.message)
    }
})

//update

app.put('/updatetodos/:id',async (req,res)=>{
    try{
        const {id} = req.params
        const {description} = req.body
        const response = await pool.query('UPDATE todo SET description = ($1) WHERE todo_id = ($2)',[description,id]) //sql injection won't cause
        res.json(response)
    }catch(err){
        res.json(err.message)
    }
})


//delete

app.delete('/deletetodos/:id',async (req,res)=>{
    try{
        const {id} = req.params
        const response = await pool.query(`DELETE FROM todo WHERE todo_id = ${id} `) // causes sql injection please avoid
        res.json(response)
    }catch(err){
        res.json(err.message)
    }
})

app.listen(3000,()=>{
    console.log('server is listening to PORT 3000')
})