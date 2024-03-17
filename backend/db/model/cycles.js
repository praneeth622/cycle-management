const mongoose = require('mongoose')

//Defining schema
const cycleSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email: {
        type: String,
    },
    cycleBrand:{
        type:String,
    },
    userPhoneNumber:{
        type:Number
    },
    userRollNumber:{
        type:String,
    },
    pricePerHr:{
        type:Number,
    },
    cycleDescription:{
        type:String
    },
    imageSrc:  {
        type:String
    },
})

//Creating the Schema 

const Cycle = new mongoose.model('Cycle',cycleSchema)

module.exports = Cycle;