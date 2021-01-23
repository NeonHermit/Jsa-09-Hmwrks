const bikeData = require('../pkg/bikes');

const getAllBikes = async (req, res) => {
    try {
        let data = await bikeData.getAll();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const getOneBike = async (req, res) => {
    try {
        let data = await bikeData.getOneBike(req.params.id);
        if(data === null) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const createBike = async (req, res) => {
    try {
        await bikeData.create(req.body);
        res.status(201).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateBike = async (req, res) => {
    try {
        await bikeData.update(req.params.id, req.body);
        res.status(204).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateBikePartial = async (req, res) => {
    try {
        await bikeData.updatePartial(req.params.id, req.body);
        res.status(204).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const deleteBike = async (req, res) => {
    try {
        await bikeData.remove(req.params.id);
        res.status(204).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAllBikes,
    getOneBike,
    createBike,
    updateBike,
    updateBikePartial,
    deleteBike,
}