const express = require('express');
const nodemon = require('nodemon');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
const PORT = process.env.PORT || 3000;

passport.use(new GoogleStrategy());

app.listen(PORT);