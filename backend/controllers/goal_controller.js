const asyncHandler = require('express-async-handler')
// use this instead of try catch method to catch errors
// wrap the functions with it 


// @desc Get goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler( async (req,res) =>{    // async is used coz when mongoose is used to connect db it sends a promise 
    res.json({"message": "Get Goals"})
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
    res.json({"message": `Set Goal : ${req.body.text}`})    // wud work even if u use '' or "" or type key without qoutes eg message(wo quotes)
})

// @desc Update goal
// @route PUT /api/goal/:id
// @access Private

const updateGoal = asyncHandler( async (req, res) =>{    // Update route requires a param
    res.json({"message": `Update Goal ${req.params.id}`})   // Use back ticks for adding a variable 
})
// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private

const deleteGoal = asyncHandler( async (req, res) =>{    
    res.json({"message": `Delete Goal ${req.params.id}`}) 
})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}