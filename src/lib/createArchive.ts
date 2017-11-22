import * as fs from 'fs';

export const directory = () => {

    let now = new Date();
    let name = `./archive/${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;

    if (!fs.existsSync(name)) {
        fs.mkdirSync(name);
    }

    return name;
};
