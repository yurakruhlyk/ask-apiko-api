const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const { MongoManager } = require('./app/mongo');
const api = require('./app/api');

const mongoManager = new MongoManager(config);

const app = express();
mongoManager.connect();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', api(config));

module.exports = app;