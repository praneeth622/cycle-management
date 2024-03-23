const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://praneethdevarasetty31:8qgJLzdzAjMvKssx@cluster0.myjyejx.mongodb.net/?retryWrites=true&w=majority",{
    
})
.then(()=>{
    console.log("Mongodb Connected Sucessfully ...")
})
.catch((err)=>{
    console.log("We Got An error in connecting database : ")
    console.log(err)
})