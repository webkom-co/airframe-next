import fs from 'fs-extra';
import _ from 'lodash';
import path from 'path';

const rootDir = path.dirname(process.argv[1]);

const isExtension = (fileName, ext) => 
        fileName.substring(fileName.length - ext.length, fileName.length) === ext;

export async function readWebpackStats(statsFileName) {
    let statsContent;
    try {
        statsContent = await 
            fs.readFile(path.join(rootDir, statsFileName))
              .then(rawJson => JSON.parse(rawJson));
    } catch(error) {
        throw('Failed to read Webpack Client stats file. Details: %s', error.message);
    }
    return statsContent;
}

export function getStatsEntrypointFiles(stats, entrypoint = 'app') {
    const { assets } = stats.entrypoints[entrypoint];
    const output = { js: { }, css: { } };

    if(!assets) {
        throw('Failed to load Entrypoint assets from Webpack stats file.');
    }

    _.forEach(assets, assetName => {
        if(isExtension(assetName, '.js')) {
            output.js[assetName] = { entry: stats.publicPath + assetName };
        }
        if(isExtension(assetName, '.css')) {
            output.css[assetName] = stats.publicPath + assetName;
        }
    });

    return output;
}

export function getCompiledTemplate({layoutHtml, contentHtml, entryFiles, chunks, options}) {
    const compiledTemplate = _.template(layoutHtml);
   
    return compiledTemplate({
        SSRData: {
            innerHtml: contentHtml,
            files: {
                chunks: entryFiles.js,
                css: entryFiles.css
            },
            options: { ...options, chunks: chunks || { } }
        },
        htmlWebpackPlugin: null
    });
}

export function manifestToTemplateFiles(filesManifest) {
    const output = { js: {}, css: {} };
    const isExtension = (fileName, ext) => 
        fileName.substring(fileName.length - ext.length, fileName.length) === ext;

    _.each(_.keys(filesManifest), fileKey => {
        if(isExtension(fileKey, '.js')) {
            output.js[fileKey] = { entry: filesManifest[fileKey] };
        }
        if(isExtension(fileKey, '.css')) {
            output.css[fileKey] = filesManifest[fileKey];
        }
    });
    return output;
}

export function getFileExtension(urlPathname) {
    const last = urlPathname.split('/').pop();

    return last.indexOf('.') >= 0 ? last.split('.').pop() : null;
}
