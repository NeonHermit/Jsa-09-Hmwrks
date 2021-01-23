const bandData = require('../pkg/bands');

const getAllBands = async (req, res) => {
    try {
        let data = await bandData.getAll();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const getOneBand = async (req, res) => {
    try {
        let data = await bandData.getOneBand(req.params.id);
        if(data === null) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const createBand = async (req, res) => {
    try {
        await bandData.create(req.body);
        res.status(201).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateBand = async (req, res) => {
    try {
        await bandData.update(req.params.id, req.body);
        res.status(204).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateBandPartial = async (req, res) => {
    try {
        await bandData.update(req.params.id, req.body);
        res.status(204).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

const deleteBand = async (req, res) => {
    try {
        await bandData.remove(req.params.id);
        res.status(204).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAllBands,
    getOneBand,
    createBand,
    updateBand,
    updateBandPartial,
    deleteBand,
}