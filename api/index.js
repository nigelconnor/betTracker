import './db';
import dotenv from 'dotenv';
import express from 'express';
import betsRouter from './bets';
import bodyParser from 'body-parser';
import {loadBets} from './betsData';

if (process.env.seedDb) {
    loadBets();
}

dotenv.config();

const app = express();

const port = process.env.PORT;

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.use('/api/bets', betsRouter);
app.use(express.static('public'));

app.listen(port, () => {
    console.info(`Server running at ${port}`);
});

