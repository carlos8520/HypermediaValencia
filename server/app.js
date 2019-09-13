const express = require('express');
require('./models/User');
const passportConfig = require('./services/passsport');
const mongoose = require('mongoose');


const keys = require('./config/keys')

const app = express();


mongoose.connect(keys.mongooseURI);
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);

