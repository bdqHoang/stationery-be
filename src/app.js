const express = require('express');
const app = express();
// config middelware
app.use(express.json());

const routes = require('./routers/index');
app.use('/api', routes);

module.exports = app;