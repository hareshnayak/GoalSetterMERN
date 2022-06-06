const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next)=>{

    let token   // variable token is initialized

    // check token in authorisation header       
    // present as 'Bearer jadhaff'
    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer'))
        {
        try{
            // Get token from Header by spliting the string into array with 'Bearer' and ${token}
            token = req.headers.authorization.split(' ')[1]

            // Verify token 
            const decoded = jwt.verify(token , process.env.JWT_SECRET)

            // Get user from the token by decoded the token 
            // we donot want the password hence select -password
            req.user = await User.findById(decoded.id).select('-password')

            next() // calling next piece of middleware

        }catch(error){
            console.log(error)
            res.status(401) // not authorised
            throw new Error("Not authorized")
        }
    }

    if(!token){
        res.status(401)  
        throw new Error('Not authorized, no token')
    }

})

module.exports = {protect}