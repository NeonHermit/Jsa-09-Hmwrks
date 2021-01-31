const { Validator } = require('node-input-validator');

const bandSchema = {
    name: 'required|minLength:1',
    formed_on: 'required|digits:4',
}


const band = async (data, schema) => {
    let v = new Validator(data, schema);
    let res = await v.check();
    if (!res) {
        throw v.errors;
    }
    return res;
};

module.exports = {
    bandSchema,
    band,
}