require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');

const api = express();
api.use(bodyParser.json());

const bands = require('./handlers/bands');

api.get('/bands', bands.getAllBands);
api.get('/bands/:id', bands.getOneBand);
api.post('/bands', bands.createBand);
api.put('/bands/:id', bands.updateBand);
api.patch('/bands/:id', bands.updateBandPartial);
api.delete('/bands/:id', bands.deleteBand);

api.listen(10000, err => {
    if(err) {
        return console.log('Could not start APi', err);
    }
    console.log('Succesfully started on port 10000');
});
