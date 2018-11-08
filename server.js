
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const { path } = parsedUrl;

        handle(req, res, parsedUrl);
    }).listen(dev ? 4100 : 80, err => {
        if (err) throw err;
        //eslint-disable-next-line
        console.log('> Ready on http://localhost:3000');
    })
})