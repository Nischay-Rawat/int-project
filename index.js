const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/db');
connectDB();
const passport = require('passport');
require('./tools/authTool.js');
const user= require('./routes/userRoute.js')
const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use('/api',user);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is  running on ${PORT}`));
