const express = require('express');
const bodyParser = require('body-parser');
const api = express();
const files = require('./files');

api.use(bodyParser.json());

api.get('/movies', async (req, res) => {
    try {
        let movies = await files.fileRead('movies.json');
        res.send(movies);
    } catch (err) {
        console.log(err);
        res.send('error');
    }
});

api.post('/movies', async (req, res) => {
    try {
        let movies = await files.fileRead('movies.json');
        movies = [...movies, req.body];
        await files.fileWrite('movies.json', JSON.stringify(movies));
        res.send('ok');
    } catch (err) {
        console.log(err);
        res.send('error');
    }
});

api.put('/movies/:id', async (req, res) => {
    try {
        let movies = await files.fileRead('movies.json');
        if (movies[req.params.id]) {
            movies[req.params.id] = req.body;
        } else {
            throw ('Record does not exist');
        }
        await files.fileWrite('movies.json', JSON.stringify(movies));
        res.send('ok');
    } catch (err) {
        console.log(err);
        res.send('error');
    }
});

api.delete('/movies/:id', async (req, res) => {
    try {
        let movies = await files.fileRead('movies.json');
        if (movies[req.params.id]) {
            movies = movies.filter((s, i) => {
                return i != req.params.id;
            });
        } else {
            throw ('Record does not exist');
        }
        await files.fileWrite('movies.json', JSON.stringify(movies));
        res.send('ok');
    } catch (err) {
        console.log(err);
        res.send('error');
    }
});

api.patch('/movies/:index', async (req, res) => {
    try {
        let movies = await files.fileRead('movies.json');
        if (movies[req.params.index]) {
            movies[req.params.index] = { ...movies[req.params.index], ...req.body }
        } else {
            throw ('Record does not exist');
        }
        await files.fileWrite('movies.json', JSON.stringify(movies));
        res.send('ok');
    } catch (err) {
        console.log(err);
        res.send('error');
    }
})

api.listen(10000, err => {
    if (err) {
        return console.log(err)
    }
    console.log('Service started on 10000');
});


