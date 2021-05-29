const express = require('express');

// const {
//   httpGetAllPlayers,
//   httpGetSinglePlayer,
// } = require('../controllers/players.controller');

const playersRouter = express.Router();

// playersRouter.get('/', httpGetAllPlayers);
// playersRouter.get('/:id', httpGetSinglePlayer);
// playersRouter.get('/:id/stats', httpGetSinglePlayer);

module.exports = playersRouter;
