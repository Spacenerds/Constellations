const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const _ = require('lodash');
const horoscopeCTRL = require('./horoscopeCTRL');
const constellationsCTRL = require('./constellationsCTRL');
const tarotCTRL = require('./tarotCTRL.js');
const users_controller = require('./usersCTRL.js');
const cors = require('cors');
const config = require('./config.js')
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
let corsOptions = {
    origin: `*`
}
app.use(cors(corsOptions));
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: true
}))
app.use(express.static(__dirname + '/build'));
app.use(passport.initialize());
app.use(passport.session());

massive(config.secret)
 .then(dbInstance => {
    console.log(".thendb working");
    app.set('db', dbInstance);
    console.log("response being hit");
    passport.use(new Auth0Strategy({
        domain: config.auth0.domain,
        clientID: config.auth0.clientID,
        clientSecret: config.auth0.clientSecret,
        callbackURL: config.auth0.auth0Callback
        
    }, function(accessToken, refreshToken, extraParams, profile, done) {
console.log("response being hit");


    done(null, { id: 2, username: 'Joe', email: 'joe@joe.com' })
  }
))
    dbInstance.init.constellations_init().then(function() {
        console.log("response being hit");
    })
    .catch(function(error) {
        console.log("error logging",error);
    });

    app.get('/auth', passport.authenticate('auth0'));

    app.get('/auth/callback', passport.authenticate('auth0', 
    { successRedirect: 'http://localhost:3000/'}));

    passport.serializeUser(function (user, done) {
        done(null , user);

    });

    passport.deserializeUser(function (user, done ) {
        dbInstance.get_user(user.id).then(dbuser => {
            let newUser = dbuser.length > 0 ? dbuser[0] : {};
            done(null, newUser)
        })
    });

 }); 
// ENDPOINTS
app.get('/api/loggeduser', users_controller.me)
app.get('/api/users', users_controller.getAll)
app.get('/api/user/:id', users_controller.getOneUser)


app.get('/auth0/logout', function (req, res) {
    req.logout();
    res.redirect(config.logoutredirect);
})
app.get('/api/tarot',  tarotCTRL.getTarot);

app.get('/api/constellations/:id', constellationsCTRL.getConstel);
app.get('/api/zodiac/:id', constellationsCTRL.getZodiac);

// app.get('/horoscope/:sign', horoscopeCTRL.getHoroscope);
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(80, () => console.log(`Listening on port ${config.port}`))