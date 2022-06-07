const asyncHandler = require('express-async-handler')
const res = require('express/lib/response')
// use this instead of try catch method to catch errors
// wrap the functions with it 

const Goal = require('../models/goalModel')
const User = require('../models/userModel')



// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler( async (req,res) =>{    // async is used coz when mongoose is used to connect db it sends a promise 
    
    /*
    // retrieves all the goals in the db
    const goals = await Goal.find() 
    */

    // to make it user specific add user in parameter
    const goals = await Goal.find({user: req.user.id})


    res.status(200).json(goals)
    // res.json({message: "Get Goals"})    // earlier
})



// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoals = asyncHandler( async (req, res) =>{ 

  // To check if a particular field is entered by user or not
  
    /*
        if(!req.body.text){
            res.status(400).json({
                message : "Please enter text field"
            })
        }
    */
    // But Express has it's own error handeller
        if(!req.body.text){
            res.status(400)    // client error 400 is used  
            throw new Error('Please enter a text field')  // this throws error as a HTML page
        }

        // if there is no error
        const goal = await Goal.create({
            text: req.body.text,
            user: req.user.id
        })
        res.json(goal)
    // res.json({"message": `Set Goal : ${req.body.text}`})    // wud work even if u use '' or "" or type key without qoutes eg message(wo quotes)
})


// @desc Update goal
// @route PUT /api/goal/:id
// @access Private
const updateGoal = asyncHandler( async (req, res) =>{    // Update route requires a param

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not Found')
    }
   

      // Check for user
      if(!req.user){
          res.status(401)
          throw new Error("User not found")
      }
  
  
      // Make sure the log in user matches the goal user
      if(goal.user.toString() != req.user.id){
          res.status(401)
              throw new Error("User not authorised"
      )
      }
  

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.json(goal)
    // res.json({"message": `Update Goal ${req.params.id}`})   // Use back ticks for adding a variable 
})


// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler( async (req, res) =>{   
    
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not Found')
    }
     

      // Check for user
      if(!req.user){
          res.status(401)
          throw new Error("User not found")
      }
  
  
      // Make sure the log in user matches the goal user
      if(goal.user.toString() != req.user.id){
          res.status(401)
              throw new Error("User not authorised"
      )
      }
  
    
    await goal.remove()

    res.json({"message": `Delete Goal ${req.params.id}`}) 
})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}