const mongoose = require('mongoose');

const Bikes = mongoose.model(
    'bikes',
    {
        brand: String,
        model: String,
        production_date: Date,
        groupset: String
    }
);

const getAll = async () => {
    return await Bikes.find({});
};

const getOne = async (id) => {
    return await Bikes.findOne({ _id: id });
};

const create = async (data) => {
    let bike = Bikes(data);
    return await bike.save();
};

const update = async (id, data) => {
    return Bikes.updateOne({ _id: id }, data);
};

const updatePartial = async (id, data) => {
    return Bikes.updateOne({ _id: id }, data);
};

const remove = async (id) => {
    return Bikes.deleteOne({ _id: id });
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove,
};
