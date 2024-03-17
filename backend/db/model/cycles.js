const mongoose = require('mongoose')

//Defining schema
const cyclesSchema = new mongoose.Schema({
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

const Cycle = new mongoose.model('Cycle',cyclesSchema)

module.exports = Cycle;