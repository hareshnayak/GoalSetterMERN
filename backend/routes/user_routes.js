const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getMe} 
= require('../controllers/user_controller')

// protecting route /me
// without the protect function it gave the response

const {protect} = require('../middleware/auth_middleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect,  getMe)

module.exports = router
