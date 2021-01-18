const fs = require('fs');

const fileWrite = (file, text) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, text, err => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
}

const changeMode = (file) => {
    return new Promise((success, fail) => {
        fs.chmod(file, 0o765, err => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
}

const makeDir = (path) => {
    return new Promise((success, fail) => {
        fs.mkdir(path, { recursive: true }, err => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
}

const newName = (oldPath, newPath) => {
    return new Promise((success, fail) => {
        fs.rename(oldPath, newPath, err => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
}

const removeThyDir = (path) => {
    return new Promise((success, fail) => {
        fs.rm(path, { recursive: true }, err => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
}

const main = async () => {
    try {
        await fileWrite('data.txt', 'Hello');
        console.log('Uspesno kreiranje i zapisuvanje vo data.txt');
        await changeMode('data.txt',);
        console.log('Uspesno promeneti read/write/execute dozvoli');
        await makeDir('dir2/random');
        console.log('Uspesno kreiranje direktoriumi');
        await newName('staroIme.txt', 'NovoIme.txt');
        console.log('Uspesno promeneto ime na fajl');
        await removeThyDir('ThyDir');
        console.log('Uspesno brisenje direktorium');
    } catch (err) {
        console.log(err);
    }
}

main();
