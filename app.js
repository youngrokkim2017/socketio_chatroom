const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup error handlers
const errorHandlers = require('./handlers/errorHandler');

app.use(errorHandlers);

module.exports = app;