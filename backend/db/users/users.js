const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    name:{
        type:String
    },
    phoneNumber:{
        type:String
    },
})

const user = new mongoose.model('User',userSchema)

module.exports = user