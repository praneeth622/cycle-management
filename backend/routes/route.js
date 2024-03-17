const express = require('express')
const route = new express.Router();
const Cycle = require('../db/model/cycles')
const multer = require('multer');


//uploading file and storing file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

const upload = multer({
    storage : storage
})
//Defing router
function errorHandler(err, req, res, next) {
    console.error(err.stack); 
    console.log("error is : "+ err)
    res.status(err.statusCode || 500).json({ message: err.message }); // Set status code and send error message
  }
  
route.use(errorHandler);
const cpUpload = upload.fields([{ name: 'name', maxCount: 4 },
     { name: 'email', maxCount: 4 },
     { name: 'cycleBrand', maxCount: 4 },
     { name: 'userPhoneNumber', maxCount: 4 },
     { name: 'userRollNumber', maxCount: 4 },
     { name: 'pricePerHr', maxCount: 4 },
     { name: 'cycleDescription', maxCount: 4 },
     { name: 'image', maxCount: 4 },
    ])

route.post("/post",cpUpload, async (req, res) => {
    console.log(res.body)
    console.log("File start here : ")
    console.log(res.file)
    
        const cycledata = new Cycle({imageSrc : req.file.filename},
            {name: req.body.name},
            {email: req.body.email},
            {cycleBrand: req.body.cycleBrand},
            {userPhoneNumber: req.body.userPhoneNumber},
            {userRollNumber: req.body.userRollNumber},
            {pricePerHr: req.body.pricePerHr},
            {cycleDescription: req.body.cycleDescription},
            )
        const createcycle = await cycledata.save()
        res.status(201).send(createcycle)
   
});

route.get("/find",async(req,res)=>{
    try{
        const data = await Cycle.find()
        res.status(200).send(data)
        
    }
    catch(e){
        res.status(400).send(e)
        console.log("Error in retriving data from Mongodb")
        console.log(data)
    }
})

route.get("/",(req,res)=>{
    res.send("Hello There")
})

module.exports=route