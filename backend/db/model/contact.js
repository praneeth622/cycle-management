const mongoose = require('mongoose')

//Defining schema
const contactSchema = new mongoose.Schema({
    email:{
        type:String
    },
    messagee:{
        type:String
    }
})

//Creating the Schema 

const contact = new mongoose.model('Contact',contactSchema)

module.exports = contact;