const pickle = require('rickmortyapi');

let cache = {};

const getChar = async (req, res) => {
    try {
        let ctime = new Date().getTime();
        if(cache[req.params.id] && (ctime - cache[req.params.id].timestamp) < (30 * 1000)) {
            res.status(200).send(cache[req.params.id].data);
            return;
        }

        let data = await pickle.getCharacter([req.params.id]);
        cache[req.params.id] = {
            timestamp: new Date().getTime(),
            data: data
        }
            res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const getAllLocations = async (req, res) => {
    try {
        let data = await pickle.getLocation();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getChar,
    getAllLocations,
};