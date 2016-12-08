import CONFIG from './config';
import express from 'express';
import {getIP} from './util';
import fs from 'fs';
import path from 'path';


const app = express();

fs.readdir('./routers', function (err, files) {
    if (err) {
        console.log('read ./routers err');
    }
    else {
        files.forEach(function (item) {
            if (/.js$/.test(item)) {
                let mods = require(path.join(__dirname, 'routers', item)).default;
                mods.forEach(function (mod) {
                    app.all(mod.path, mod.callback);
                });
            }
        });
    }
});

app.listen(CONFIG.dev.port, function (err) {
    console.log(
        `Listening at http://localhost:${CONFIG.dev.port} or http://${getIP()}:${CONFIG.dev.port}\n`
    );
});
