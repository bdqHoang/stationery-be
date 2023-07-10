const express = require('express');
const cors = require('cors');
const app = express();
// config middelware
app.use(express.json());
app.use(cors({
    origin: 'localhost:3000'
}));

const routes = require('./routers/index');
app.use('/api', routes);

module.exports = app;