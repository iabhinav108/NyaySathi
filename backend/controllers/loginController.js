require('dotenv').config()
const UserModel = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const gat = require('../middlewares/jwtControl')
const cookie = require('cookie')

async function userLogin(req, res) {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const user = await UserModel.findOne({ email: email });
            if (user != null) {
                const isMatch = await bcrypt.compare(password, user.password)
                if ((user.email === email)) {
                    if(isMatch){
                        const {tokenID,token,expiration} = gat(user._id);
                        user.accessTokens.push({tokenID:tokenID,token:token,expiration:expiration});
                        user.save();
                        res.setHeader('Set-Cookie', cookie.serialize('tokenID', tokenID, { httpOnly: true }));
                        res.status(201).send({ "status": "success", "message": "Login Success","tokenID":tokenID});
                    }
                    else{
                        res.send({ "status": "failed", "message": "Incorrect Password! Please Try Again" });
                    }
                }
                else {
                    res.send({ "status": "failed", "message": "Email Address not Registered or Invalid!" });
                }
            }
            else {
                res.send({ "status": "failed", "message": "You are not Registered." });
            }
        }
        else {
            res.send({ "status": "failed", "message": "All Fields are required" });
        }
    }
    catch (error) {
        console.log(error);
        res.send({ "status": "failed", "message": "Unable to Login" });
    }
}

module.exports ={userLogin};