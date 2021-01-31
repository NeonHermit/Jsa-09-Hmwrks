const bikeData = require('../pkg/bikes');
const { bike, bikeSchema } = require('../pkg/bikes/validator');

const getAll = async (req, res) => {
    try {
        let data = await bikeData.getAll();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const getOne = async (req, res) => {
    try {
        let data = await bikeData.getOne(req.params.id);
        if (data) {
            return res.status(200).send(data);
        }
        res.status(404).send('Not Found!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const create = async (req, res) => {
    try {
        await bike(req.body, bikeSchema);
        let data = await bikeData.create(req.body);
        return res.status(201).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const update = async (req, res) => {
    try {
        let data = await bikeData.update(req.params.id, req.body);
        if (data.nModified === 0) {
            return res.status(404).send('Not Found!');
        }
        return res.status(204).send('');
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const updatePartial = async (req, res) => {
    try {
        let data = await bikeData.update(req.params.id, req.body);
        if (data.nModified === 0) {
            return res.status(404).send('Not Found!');
        }
        return res.status(204).send('');
    } catch {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const remove = async (req, res) => {
    try {
        let data = await bikeData.remove(req.params.id);
        if (data.deletedCount === 0) {
            return res.status(404).send('Not Found!');
        }
        return res.status(204).send('');
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove,
};