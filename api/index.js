
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const server = express();

const port = process.env.PORT;

server.use(express.static('public'));

server.listen(port, () => {
    console.info(`Server running at ${port}`);
});