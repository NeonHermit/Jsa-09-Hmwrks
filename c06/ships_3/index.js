require('./src/db');

const express = require('express');
const bodyParser = require('body-parser');

const shipRouter = require('./src/routes');

const api = express();
api.use(bodyParser.json());
api.use(shipRouter);


api.listen(10000, err => {
    if (err) {
        return console.log('Could not START', err);
    }
    console.log('Succesfully started');
});