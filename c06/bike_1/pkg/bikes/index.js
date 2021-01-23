const mongoose = require('mongoose');

const Bikes = mongoose.model(
    'bikes',
    {
        brand: String,
        model: String,
        production_date: Date,
        groupset: String,
        finishing_kit: [{ cockpit: String, seat_area: String }]
    },
    'bikes'
);

const getAll = async () => {
    let bikes = await Bikes.find({});
    return bikes;
};

const getOne = async (id) => {
    let bikes = await Bikes.findOne({ _id: id });
    return bikes;
};

const create = async (data)  => {
    let bike = new Bikes(data);
    await bike.save();
};

const update = async (id, data) => {
    await Bikes.updateOne({ _id: id }, data);
};

const updatePartial = async (id, data) => {
    await Bikes.updateOne({ _id: id }, data);
};

const remove = async (id) => {
    await Bikes.deleteOne({ _id: id });
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove,
};