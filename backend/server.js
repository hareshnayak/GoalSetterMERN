const path = require('path')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()   
const { errorHandler } = require('./middleware/error_middleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000     // Takes port no. from .env file

connectDB()
const app = express()

app.use(express.json()) // to parse json in post request
app.use(express.urlencoded({extended: false})) // for urlencoded


app.use('/api/goals', require('./routes/goal_routes'))
app.use('/api/users', require('./routes/user_routes'))

//Serve frontend
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(_dirname, '../frontend/build')))
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html' )))
} 
  
app.use(errorHandler) // to override the error handler provided by express

app.listen(port, ()=> console.log(`Server started on port ${port}`))
