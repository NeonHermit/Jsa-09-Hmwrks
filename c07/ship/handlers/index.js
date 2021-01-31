const express = require('express');
const shipData = require('../pkg/ships');
const { ship, shipSchema } = require('../pkg/ships/validator');
const router = new express.Router();

router.get('/api/v2/ships', async (req, res) => {
    try {
        let ships = await shipData.find({});
        res.send(ships);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/api/v2/ships/:id', async (req, res) => {
    let _id = req.params.id;
    try {
        let ships = await shipData.findById(_id);
        if (!ships) {
            return res.status(404).send('Not Found!');
        }
        res.send(ships);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/api/v2/ships', async (req, res) => {
    let ships = new shipData(req.body);
    try {
        await ship(req.body, shipSchema);
        await ships.save();
        res.status(201).send(ships);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
});

router.put('/api/v2/ships/:id', async (req, res) => {
    try {
        let ships = await shipData.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).send(ships);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/api/v2/ships/:id', async (req, res) => {
    try {
        let ships = await shipData.findByIdAndDelete(req.params.id);
        res.send(ships);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;