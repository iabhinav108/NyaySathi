const UserModel = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const generateAccessToken = require('../middlewares/jwtControl') 
const cookie = require('cookie')

async function userRegistration(req, res) {
  const { 
    username,
     email, 
     password,
     confirmPassword,
     fullName,
     phoneNumber,
     dob, 
     address, 
     city, 
     state, 
     pincode } 
     = req.body;
  const user = await UserModel.findOne({ email: email });

  if (user) {
      res.send({ "status": "failed", "message": "Email Already Exists" });
  } else {
      if (username && email && password && confirmPassword && fullName 
        && phoneNumber && dob && address && city && state && pincode) {
          if (password === confirmPassword) {
              try {
                  const salt = await bcrypt.genSalt(10);
                  const hashedPassword = await bcrypt.hash(password, salt);
                  const validationObj = {
                      username: username,
                      email: email,
                      password: hashedPassword,
                      full_name: fullName,
                      phone_number: phoneNumber,
                      dob: dob,
                      address: address,
                      city: city,
                      state: state,
                      pincode: pincode,
                  };

                  await UserModel.validate(validationObj);

                  const newUser = new UserModel(validationObj);
                  if(email ==='chmdsih2023@gmail.com'){
                    newUser.role = "ADMIN";
                  }
                  await newUser.save();

                  const saved_user = await UserModel.findOne({ email: email })
                  const { tokenID,token, expiration } = generateAccessToken(saved_user._id);
                  saved_user.accessTokens.push({tokenID:tokenID, token: token, expiration: expiration });
                  await saved_user.save();
                  res.setHeader('Set-Cookie', cookie.serialize('tokenID', tokenID, { httpOnly: true }));
                  res.status(201).send({ "status": "success", "message": "Registered Successfully","tokenID":tokenID});
              } catch (error) {
                  res.send({ "status": "failed", "message": "Unable to Register" });
                  console.log(error);
              }
          } else {
              res.send({ "status": "failed", "message": "Passwords Don't Match" });
          }
      } else {
          res.send({ "status": "failed", "message": "All Fields are required" });
      }
  }

}
module.exports = {userRegistration};