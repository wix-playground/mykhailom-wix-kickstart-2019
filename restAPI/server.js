const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/orders', router);

app.get('/', (req, res) => {
    res.send('OK');
});

module.exports = app;