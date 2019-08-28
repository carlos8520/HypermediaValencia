const express = require('express');
const nodemon = require('nodemon');

const app = express();
const PORT = process.env.PORT || 3000;
 
app.get('/', function (req, res) {
  res.send('just wanna go home')
});
 
app.listen(PORT);