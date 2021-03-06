const fs = require('fs');

const fileRead = (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(JSON.parse(data))
        });
    });
}

const fileWrite = (file, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, data, err => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
}

module.exports = {
    fileRead,
    fileWrite
}