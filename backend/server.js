require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routers/router');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
// Routes
app.use('/api', router); // Prefix all routes with '/api'

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
