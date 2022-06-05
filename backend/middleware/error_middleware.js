// Contains functions that execute during the request response cycle

const { MongoServerClosedError } = require("mongodb")

const errorHandler = (err, req, res, next)=>{
    const statusCode = res.statusCode? res.statusCode : 500  // 500 is server error

    res.status(statusCode)

    // By default Express gives error in HTML  
    // Change it to json object
    res.json({
        message : err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack   // error stack will only be shown if in development mode 
        // NODE_ENV can be changed in .env file
    })
}

module.exports = {
    errorHandler,
}