const bandData = require('../pkg/bands');
const { band, bandSchema } = require('../pkg/bands/validator');

const getAll = async (req, res) => {
    try {
        let data = await bandData.getAll();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const getOne = async (req, res) => {
    try {
        let data = await bandData.getOne(req.params.id);
        if (data === null) {
            return res.status(404).send('Not Found!');
        }
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const create = async (req, res) => {
    try {
        await band(req.body, bandSchema);
        let data = await bandData.create(req.body);
        return res.status(201).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const update = async (req, res) => {
    try {
        let data = await bandData.update(req.params.id, req.body);
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
        let data = await bandData.update(req.params.id, req.body);
        if (data.nModified === 0) {
            return res.status(404).send('Not Found!');
        }
        return res.status(204).send('');
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const remove = async (req, res) => {
    try {
        let data = await bandData.remove(req.params.id);
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
}