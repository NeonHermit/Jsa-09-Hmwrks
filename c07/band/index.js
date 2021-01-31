const config = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');

const bands = require('./handlers/bands');

const api = express();
api.use(bodyParser.json());

api.get('/api/v2/bands', bands.getAll);
api.get('/api/v2/bands/:id', bands.getOne);
api.post('/api/v2/bands', bands.create);
api.put('/api/v2/bands/:id', bands.update);
api.patch('/api/v2/bands/:id', bands.updatePartial);
api.delete('/api/v2/bands/:id', bands.remove);

api.listen(config.get('server').port, err => {
    if (err) {
        console.log(err);
    }
    console.log('Server successfully started on port', config.get('server').port);
});