const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Import Routers
const clubsRouter = require('./routes/clubs.router');
// const playersRouter = require('./routes/players.router');

const app = express();
app.use(morgan('combined'));

app.use(express.json());

app.use('/clubs', clubsRouter);
// app.use('/players', playersRouter);

module.exports = app;
