require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');

const api = express();
api.use(bodyParser.json());

const bikes = require('./handlers/bikes');

api.get('/bikes', bikes.getAllBikes);
api.get('/bikes/:id', bikes.getOneBike);
api.post('/bikes', bikes.createBike);
api.put('/bikes/:id', bikes.updateBike);
api.patch('/bikes/:id', bikes.updateBikePartial);
api.delete('/bikes/:id', bikes.deleteBike);

api.listen(10000, err => {
    if(err) {
        return console.log('Could not start API', err);
    }
    console.log('Server successfully started on port 10000');
});