const express = require('express');
const router = express.Router();

// Example middleware for input validation
function validateRegistrationInput(req, res, next) {
  const {
    username,
    email,
    password,
    confirmPassword,
    fullName,
    countrycode,
    phoneNumber,
    dob,
    address,
    city,
    state,
    pincode
  } = req.body;

  // Validate username
  if (!username || username.length < 3) {
    return res.status(400).json({ message: 'Username must be at least 3 characters long' });
  }

  // Validate email
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  // Validate password
  if (!password || password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  // Validate confirmPassword
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  // If all validation passes, proceed to the next middleware or route
  next();
}

module.exports = { validateRegistrationInput };
