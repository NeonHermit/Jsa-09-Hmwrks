const mongoose = require('mongoose');

const Bands = mongoose.model(
    'bands',
    {
        name: String,
        formed_on: Number,
        active_members: [{ first_name: String, last_name: String, active_from: Number }],
        discography: [{ title: String, released_on: Number }]
    },
    'bands'
);

const getAll = async () => {
    let bands = await Bands.find({});
    return bands;
};

const getOne = async (id) => {
    let bands = await Bands.findOne({ _id: id });
    return bands;
};

const create = async (data) => {
    let band = new Bands(data);
    await band.save()
};

const update = async (id, data) => {
    await Bands.updateOne({ _id: id }, data);
};

const updatePartial = async (id, data) => {
    await Bands.updateOne({ _id: id }, data);
};

const remove = async (id) => {
    await Bands.deleteOne({ _id: id });
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove,
};