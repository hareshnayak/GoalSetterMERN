// @desc Register User
// @route POST /api/users
// @access Public
const registerUser = (req,res)=>{
    res.json({
        message : "register user"
    })
}

// @desc Authenticate User
// @route POST /api/users/login
// @access Public
const loginUser = (req,res)=>{
    res.json({
        message : "login user" 
    })
}

// @desc Display User
// @route GET /api/users/me
// @access Public
const getMe = (req,res)=>{
    res.json({
        message : "Display user data"
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}