const mongoose = require('mongoose')

const connectDB = async () => {
    try {        
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)  // color cyan comes from the colors package
    } catch(error){
        console.log(error)
        process.exit(1)  // exit the process with failure
    }
}

module.exports = connectDB