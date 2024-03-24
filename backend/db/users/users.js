const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')

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
    tokens:[
        {
            token:{
                type:String
            }
        }
    ]
})

//Middileware for JWT Auth
userSchema.methods.genarateAuthToken = async function(){
    try{
        const token  = jwt.sign({_id:this._id},process.env.SERCET_KEY)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token
    }
    catch(err){
        console.log("Error in JWT Auth")
        console.log(err)
    }
}


const user = new mongoose.model('User',userSchema)

module.exports = user;