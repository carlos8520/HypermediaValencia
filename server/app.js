const express = require('express');
const nodemon = require('nodemon');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();
const PORT = process.env.PORT || 3000;

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, (accessToken) => {
        console.log(accessToken);
    })
);

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.listen(PORT);

