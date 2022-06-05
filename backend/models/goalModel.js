const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    /*
        text: String 
    */
    // 'text' here has been taaken as an object
    text: {
        type: String,
        required: [true, 'PLease add a text value'] // OR simply required:true
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema)

