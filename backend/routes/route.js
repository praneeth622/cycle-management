const express = require('express');
const route = express.Router(); // Change this line to use express.Router()
const Cycle = require('../db/model/cycles');
const contact = require('../db/model/contact');

// Uploading file and storing file


// Defining router

// const cpUpload = upload.fields([
//   { name: 'name', maxCount: 4 },
//   { name: 'email', maxCount: 4 },
//   { name: 'cycleBrand', maxCount: 4 },
//   { name: 'userPhoneNumber', maxCount: 4 },
//   { name: 'userRollNumber', maxCount: 4 },
//   { name: 'pricePerHr', maxCount: 4 },
//   { name: 'cycleDescription', maxCount: 4 },
//   { name: 'image', maxCount: 4 },
// ]);

route.post("/post",  async (req, res) => {
  
try {
    const cycleData = {
          imageSrc: req.files && req.files.image && req.files.image[0] ? req.files.image[0].filename : '../uploads/image.png',
          name: req.body.name ,
          mail: req.body.email ,
          cycleBrand: req.body.cycleBrand ,
          userPhoneNumber: req.body.userPhoneNumber,
          userRollNumber: req.body.userRollNumber ,
          pricePerHr: req.body.pricePerHr, 
          cycleDescription: req.body.cycleDescription,
    };
    const cycleD = new Cycle(cycleData)
    const createcycle = await cycleD.save();
    res.status(201).send(createcycle);
  } catch (error) {
    console.error("Error in posting cycle:", error);
    res.status(400).send(error);
  }
});

route.get("/find", async (req, res) => {
  try {
    const data = await Cycle.find();
    res.status(200).send(data);
  } catch (error) {
    console.error("Error in retrieving data from MongoDB:", error);
    res.status(400).send(error);
  }
});

route.post("/contact", async (req, res) => {
    const reqs= JSON.stringify(req.body)
    console.log(reqs)
  try {
    const { email, message } = req.body;

    const complaint = new contact({
      email: email,
      message: message,
    });

    const postComplaint = await complaint.save();
    res.status(201).send(postComplaint);
  } catch (error) {
    console.error("Error in posting complaint:", error);
    res.status(400).send(error);
  }
});

route.get("/", (req, res) => {
  res.send("Hello There");
});

module.exports = route;
