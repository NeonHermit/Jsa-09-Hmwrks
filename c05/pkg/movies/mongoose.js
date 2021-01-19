const mongoose = require('mongoose');

const Movies = mongoose.model(
    'movies',
    {
        name: String,
        year: Number
    },
    'movies'
);

const getAll = async () => {
    let movies = await Movies.find({});
    return movies;
};

const getOne = async (id) => {
    let movies = await Movies.findOne({ _id: id });
    return movies;
};

const create = async (data) => {
    let movie = new Movies(data);
    await movie.save();
};

const update = async (id, data) => {
    await Movies.updateOne({ _id: id }, data);
};

const updatePartial = async (id, data) => {
    await Movies.updateOne({ _id: id }, data);
};

const remove = async (id) => {
    await Movies.deleteOne({ _id: id });
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove,
};

