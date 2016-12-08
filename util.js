import ejs from 'ejs';
import path from 'path';
import fs from 'fs';

export const getIP = () => {
    const ifaces = require('os').networkInterfaces();
    const defultAddress = '127.0.0.1';
    let ip = defultAddress;

    for (const dev in ifaces) {
        if (ifaces.hasOwnProperty(dev)) {
            ifaces[dev].forEach(
                /* jshint loopfunc: true */
                (details) => {
                    if (ip === defultAddress && details.family === 'IPv4') {
                        ip = details.address;
                    }
                }
            );
        }
    }
    return ip;
}


export function renderEjs(templateName, data) {
    console.log('__dirname is: ', __dirname);
    var templatePath = path.join(__dirname, 'templates', templateName);
    
    const ejsTemplate = fs.readFileSync(templatePath, 'utf8');
    return ejs.render(ejsTemplate, data || {});
}
