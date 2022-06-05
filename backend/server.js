const express = require('express')
const dotenv = require('dotenv').config()   
const port = process.env.PORT || 5000     // Takes port no. from .env file
const { errorHandler } = require('./middleware/error_middleware')


const app = express()

app.use(express.json()) // to parse json in post request
app.use(express.urlencoded({extended: false})) // for urlencoded


app.use('/api/goals', require('./routes/goal_routes'))

app.use(errorHandler) // to override the error handler provided by express

app.listen(port, ()=> console.log(`Server started on port ${port}`))
