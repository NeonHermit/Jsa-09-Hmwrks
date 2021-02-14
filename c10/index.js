const express = require('express');
const ram = require('./handlers/ram');

const api = express();

api.get('/api/v1/rickandmortey/character/:id', ram.getChar);
api.get('/api/v1/rickandmortey/location', ram.getAllLocations);
 

api.listen(10000, err => {
    if(err) {
        console.log(err)
    }
    console.log('Server successfully started on port 10000');
});
