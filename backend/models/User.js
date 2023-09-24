const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    userID:{
      type: String
    },
    role:{
      type: String
    },
    username: {
      type: String,
      required: true,
      trim:true,
    },
    email: {
      type: String, 
      required: true,
      unique: true, 
      trim:true,
    },
    password: {
      type: String, 
      required: true, 
      trim:true
    },
    full_name: {
      type: String, 
      required: true, 
      trim:true},
    phone_number: {
      type: String, 
      required: true,
      trim:true
    },
    dob: {
      type: String, 
      required: true,
    },
    address: {
      type: String, 
      required: true,
    },
    city: {
      type: String, 
      required: true, 
      trim:true,
    },
    state: {
      type: String, 
      required: true, 
      trim:true,
    },
    pincode: {
      type: String, 
      required: true, 
      trim:true,
    },
    accessTokens: [
      {
        tokenID: String,
        token: String,
        expiration: Date,
      },
    ],
});

userSchema.pre('save', function (next) {
  if (!this.userID) {
      const randomString = Math.random().toString(36).substring(2, 6);
      this.userID = "NS_" + randomString;
  }
  if(!this.role){
    const role_assign = "USER";
    this.role = role_assign
  }
  next();
});

const User =mongoose.model("Users", userSchema)

module.exports = User;