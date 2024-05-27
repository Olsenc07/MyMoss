import express from 'express';
import cors from 'cors';
import {json} from 'body-parser';
const server = express();

server.use(cors());
server.use(json());


// Backend routes
import emailRouter from 'backend/email.js';
server.use('/api/sendGrid', emailRouter);


async function startServer() {
    const port = process.env['PORT'] || 4200;
    const server = createServer();
    (await server).listen(port, () => {
        console.log(`Node Express server listening`);
    });
}

startServer().catch(err => {
    console.error('Uncaught error in startServer:', err);
});