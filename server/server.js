const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const _ = require('lodash');
const horoscopeCTRL = require('./horoscopeCTRL');
const constellationsCTRL = require('./constellationsCTRL');
const cors = require('cors');
const config = require('./config.js')

const app = module.exports = express();
app.use(bodyParser.json());

let corsOptions = {
    origin: `http://localhost:3000`
}
app.use(cors(corsOptions));

const tarotCTRL = require('./tarotCTRL.js');

 massive(config.secret)
 .then(dbInstance => {
    console.log(".thendb working");
    app.set('db', dbInstance);
    dbInstance.init.constellations_init().then(function() {
        console.log("response being hit");
    })
    .catch(function(error) {
        console.log("error logging",error);
    });

 }); 



// ENDPOINTS
app.get('/tarot',  tarotCTRL.getTarot);

// app.get('/constellations/:id', constellationsCTRL.getConstellations);

// app.get('/horoscope/:sign', horoscopeCTRL.getHoroscope);


app.listen(3003, () => console.log(`Listening on port ${config.port}`))