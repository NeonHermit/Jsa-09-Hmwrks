const { Validator } = require('node-input-validator');

const shipSchema = {
    name: 'required|minLength:1',
    class: 'required|minLength:1'
};

const ship = async (data, schema) => {
    let v = new Validator(data, schema);
    let res = await v.check();
    if (!res) {
        throw v.errors;
    }
    return res;
};

module.exports = {
    shipSchema,
    ship,
};