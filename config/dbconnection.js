const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGODB).then(() => {
    console.log("Connection db " )
}).catch((err) => {
    console.log("error",err)
})

module.exports = mongoose

// mongoose.connect(`mongodb://${process.env.LOCALHOST}`).then(() => {