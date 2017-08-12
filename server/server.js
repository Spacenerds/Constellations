var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var _ = require('lodash');
var tarotCTRL = require('./tarotCTRL');
var horoscopeCTRL = require('./horoscopeCTRL');
var constellationsCTRL = require('./constellationsCTRL');
const app = express();
app.use(bodyParser.json());


 massive({
  host: 'ec2-23-23-221-255.compute-1.amazonaws.com',
    port: 5432,
    database: 'd7p9hdlkvruvt8',
    user: 'gjfrvorujlxzzk',
    password: 'd1c03e091035b93f0e86f7d31c1fe1fd4c6aa1796e7d2162766a4f3828739138',
    ssl: true
}).then(db => {
    console.log(".thendb working");
    app.set(db, 'db');
    db.init.constellations_init().then(function(response) {
        
        console.log("response being hit",response);
    })
    .catch(function(error) {
        console.log("error logging",error);
    });






app.get('/tarot',  tarotCTRL.getTarot);

app.get('/constellations/:id', constellationsCTRL.getConstellations);

app.get('/horoscope/:sign', horoscopeCTRL.getHoroscope);

});

app.listen(3003, function() {
        console.log("app listening on port 3003");
})