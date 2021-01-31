const mongoose = require('mongoose');

const Bands = mongoose.model(
    'bands',
    {
        name: String,
        formed_on: Number,
        active_members: [{ first_name: String, last_name: String, active_from: Number }],
        discography: [{ title: String, released_on: Number }]
    }
);

const getAll = async () => {
    return await Bands.find({});
};

const getOne = async (id) => {
    return await Bands.findOne({ _id: id });
};

const create = async (data) => {
    let band = new Bands(data);
    await band.save();
};

const update = async (id, data) => {
    return Bands.updateOne({ _id: id }, data);
};

const updatePartial = async (id, data) => {
    return Bands.updateOne({ _id: id }, data);
};

const remove = async (id) => {
    return Bands.deleteOne({ _id: id });
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove,
};
