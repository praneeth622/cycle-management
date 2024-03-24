require('dotenv').config()
const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000
const route = require('./routes/route.js')
const cookieParser = require('cookie-parser');

require('./db/conn.js')
require('./db/model/cycles.js')

const cors = require('cors');
app.use(cors({
    origin:'http://localhost:3000', 
    credentials:true,          
    optionSuccessStatus:200
}))
app.use(cookieParser())


//Middle ware : given will turn the incoming req to json
app.use(express.json());
app.use(route)


app.listen(PORT,()=>{
    console.log(`Connected successfull in port ${PORT}`)
})