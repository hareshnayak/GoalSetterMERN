const express = require('express')
const router = express.Router()
const { 
    getGoals, 
    setGoals, 
    updateGoal, 
    deleteGoal } 
    = require('../controllers/goal_controller')

/*
router.get('/', (req, res) =>{
    // res.send('Get Goals')
    // res.status(200).json({"message": "Get Goals"}) // works the same on status 200
    res.json({"message": "Get Goals"})
})
*/

// cleaner approach
// all the above route code shifted to controller file

/* 
router.get('/', getGoals)
router.post('/', setGoals)
*/

// Here we notice that the above two routes have same '/' hence can be chained together
router.route('/').get(getGoals).post(setGoals)

/*
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)
*/

// Similarly 
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router

