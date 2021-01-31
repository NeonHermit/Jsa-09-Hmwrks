const config = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');

const shipRouter = require('./handlers');

const api = express();
api.use(bodyParser.json());
api.use(shipRouter);

api.listen(config.get('server').port, err => {
    if (err) {
        return console.log('Could not START', err);
    }
    console.log('Server successfully started on port', config.get('server').port);
});