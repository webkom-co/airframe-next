import React from 'react';
import { renderToString } from 'react-dom/server';
import { clearChunks, flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import express from 'express';
import compression from 'compression';
import path from 'path';
import _ from 'lodash';

import {
    getCompiledTemplate,
    getStatsEntrypointFiles,
    getFileExtension,
    readWebpackStats
} from './helpers';

import config from './../config';
import layoutHtml from './../app/index.html';
import { App } from './../app/components';

const app = express();
const port = process.env.PORT || 4100;
const rootDir = path.dirname(process.argv[1]);

app.use(compression());

app.use(async (req, res, next) => {
    if(req.accepts('html') && !getFileExtension(req.url)) {
        clearChunks();

        const appComponent = <App.Server url={ req.url } />;
        const contentHtml = renderToString(appComponent);
        const webpackStats = await readWebpackStats(config.clientStatsFile);
        const entryPoints = getStatsEntrypointFiles(webpackStats);
        // TODO: There is something wrong here - flushChunkNames() returns
        // nested chunks as 'Parent/Child' format, but flushChunks
        // expects 'Parent-Child'. Quick replace() for now. The topic
        // is active here: https://github.com/faceyspacey/react-universal-component/issues/117
        // but upgrading webpack didn't help
        const chunkNames = _.map(
            flushChunkNames(),
            (chunkName) => chunkName.replace('/', '-')
        );
        const chunks = flushChunks(webpackStats, {
            chunkNames,
            outputPath: rootDir
        });

        const destHtml = getCompiledTemplate({
            layoutHtml, 
            contentHtml,
            entryFiles: entryPoints,
            chunks,
            options: {
                title: config.siteTitle
            }
        });

        res
            .header('Content-Type', 'text/html')
            .send(destHtml);
    } else {
        next();
    }
});

app.use(express.static(rootDir));

app.use((req, res) => {
    res.status(404);
  
    if (req.accepts('html')) {
        res.redirect('/not-found');
        return;
    }

    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }

    res.type('txt').send('Not found');
});

app.listen(port, () => {
    /* eslint-disable-next-line no-console */
    console.log('SSR application started!');
});
