const express = require('express');
const Ships = require('../models/ships');
const router = new express.Router();


router.get('/ships', async (req, res) => {
    try {
        let ships = await Ships.find({});
        res.send(ships)
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/ships/:id', async (req, res) => {
    let _id = req.params.id;
    try {
        let ships = await Ships.findById(_id);
        if (!ships) {
            return res.status(404).send('Nothing Found');
        }
        res.send(ships);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

router.post('/ships', async (req, res) => {
    let ships = new Ships(req.body);
    try {
        await ships.save();
        res.status(201).send(ships);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

router.patch('/ships/:id', async (req, res) => {
    try {
        let ships = await Ships.findByIdAndUpdate(req.params.id, req.body);
        res.send(ships);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/ships/:id', async (req, res) => {
    try {
        let ships = await Ships.findByIdAndDelete(req.params.id);
        res.send(ships);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;