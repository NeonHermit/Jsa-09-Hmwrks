const config = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');

const bikes = require('./handlers/bikes');

const api = express();
api.use(bodyParser.json());

api.get('/api/v2/bikes', bikes.getAll);
api.get('/api/v2/bikes/:id', bikes.getOne);
api.post('/api/v2/bikes', bikes.create);
api.put('/api/v2/bikes/:id', bikes.update);
api.patch('/api/v2/bikes/:id', bikes.updatePartial);
api.delete('/api/v2/bikes/:id', bikes.remove);

api.listen(config.get('server').port, err => {
    if (err) {
        console.log(err);
    }
    console.log('Server successfully started on port', config.get('server').port);
});