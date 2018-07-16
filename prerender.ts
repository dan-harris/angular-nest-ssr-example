import 'zone.js/dist/zone-node';
import * as path from 'path';
import * as fs from 'fs';
import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
import { AppServerModuleNgFactory, LAZY_MODULE_MAP } from './dist/nest-angular-microfrontend-example-prerender/main';

const minify = require('html-minifier').minify;
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const distFolder = './dist/nest-angular-microfrontend-example';
const index = fs
    .readFileSync(path.resolve(__dirname, `${distFolder}/index.html`), 'utf8')
    .toString();

// we could automate this based on the app.routes.ts file but
// to keep it simple let's just create an array with the routes we want
// to prerender
const paths = [
    '/list-lazy',
    '/list'
];

enableProdMode();

// for every route render the html and save it in the correct folder
paths.forEach(p => renderToHtml(p, distFolder + p));

// don't forget to overwrite the index.html as well
renderToHtml('/index.html', distFolder);

function renderToHtml(url: string, folderPath: string): void {
    // Render the module with the correct url just 
    // as the server would do
    renderModuleFactory(AppServerModuleNgFactory, {
        url,
        document: index,
        extraProviders: [
            provideModuleMap(LAZY_MODULE_MAP)
        ],
    }).then(html => {
        // create the route directory
        if (url !== '/index.html') {
            fs.mkdirSync(folderPath);
        }
        fs.writeFile(folderPath + '/index.html', minify(html), (err => {
            if (err) {
                throw err;
            }
            console.log(`success`);
        }));
    });
}