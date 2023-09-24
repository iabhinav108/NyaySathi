require('dotenv').config()
const UserModel = require('../../models/User')
const bcrypt = require('bcrypt')
const gat = require('../../middlewares/jwtControl')
const cookie = require('cookie')

async function adminLogin(req, res) {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const admin = await UserModel.findOne({ email: email });
            if (admin != null) {
                const isMatch = await bcrypt.compare(password, admin.password)
                if ((admin.role === 'ADMIN')) {
                    if(isMatch){
                        const {tokenID,token,expiration} = gat(admin._id);
                        admin.accessTokens.push({tokenID:tokenID,token:token,expiration:expiration});
                        admin.save();
                        res.setHeader('Set-Cookie', cookie.serialize('tokenID', tokenID, { httpOnly: true }));
                        res.status(201).send({ "status": "success", "message": "Login Success","tokenID":tokenID});
                    }
                    else{
                        res.send({ "status": "failed", "message": "Incorrect Password! Please Try Again" });
                    }
                }
                else {
                    res.status(403).send({ "status": "failed", "message": "Access Not Allowed!" });
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

module.exports ={adminLogin};