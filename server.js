import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};

app.use(myLogger);

app.get('/', myLogger, function (req, res) {
    res.send('Hello World!');
});

app.listen(3000);