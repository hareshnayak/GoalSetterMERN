// @desc Get goals
// @route GET /api/goals
// @access Private

const getGoals = (req,res) =>{
    res.json({"message": "Get Goals"})
}

// @desc Set goal
// @route POST /api/goals
// @access Private

const setGoals =  (req, res) =>{    
    res.json({"message": "Set Goal"})    // wud work even if u use '' or "" or type key without qoutes eg message(wo quotes)
}

// @desc Update goal
// @route PUT /api/goal/:id
// @access Private

const updateGoal =  (req, res) =>{    // Update route requires a param
    res.json({"message": `Update Goal ${req.params.id}`})   // Use back ticks for adding a variable 
}
// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private

const deleteGoal = (req, res) =>{    
    res.json({"message": `Delete Goal ${req.params.id}`}) 
}

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}