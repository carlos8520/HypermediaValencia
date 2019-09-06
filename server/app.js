const express = require('express');
const passportConfig = require('./services/passsport');

const app = express();
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);

