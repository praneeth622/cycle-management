const user = require('../db/users/users')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            throw new Error('Token not found');
        }
        console.log("1")
        const verifyUser = jwt.verify(token, process.env.SERCET_KEY);
        console.log("2")
        const presentUser = await user.findOne({ _id: verifyUser._id });
        if (!presentUser) {
            throw new Error('User not found');
        }
        c
        req.user = presentUser
        
        console.log("You are a valid User");
        
        next(); 
    } catch (err) {
        console.log("You are not a valid user to access");
        res.status(401).redirect('/login');
    }
};

module.exports = auth