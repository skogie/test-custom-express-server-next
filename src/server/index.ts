import express from 'express';
import next from 'next';

const runningAsScript = !module.parent;
const dev = process.env.NODE_ENV !== 'production';
const nextjsApp = next({ dev, customServer: true });
const requestHandler = nextjsApp.getRequestHandler();

export const createServer = () =>
    nextjsApp.prepare().then(() => {
        const server = express();
        server.use((req, res, next) => {
            res.locals = {data: 'My nice data'}
            next()
          })

        server.all('*', (req: any, res) => {
            return requestHandler(req, res);
        });

        return server;
    });

if (runningAsScript) {
    createServer().then((server) => {
        server.listen(3000, () => {
            console.log(`> Ready on http://localhost:3000`);
        });
    });
}
