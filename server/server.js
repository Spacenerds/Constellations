var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var _ = require('lodash');
var tarotCTRL = require('./tarotCTRL');
var horoscopeCTRL = require('./horoscopeCTRL');
var constellationsCTRL = require('./constellationsCTRL');


// var db = massive.connectSync({
//   connectionString : 'asdfadfadf'
// });

// console.log(db)

var app = express();
app.use(bodyParser.json());

var port = 3000;

app.get('/tarot',  tarotCTRL.getTarot);

app.get('/constellations/:id', constellationsCTRL.getConstellations);

app.get('/horoscope/:sign', horoscopeCTRL.getHoroscope);

app.listen(port, function() {
  console.log("Started server on port", port);
});