const express = require('express');

const {
  httpGetAllClubs,
  httpGetSingleClub,
} = require('../controllers/clubs.controller');

const clubsRouter = express.Router();

clubsRouter.get('/', httpGetAllClubs);
clubsRouter.get('/:id', httpGetSingleClub);

// clubsRouter.get(/:id/stats, http);
// clubsRouter.get(/:id/stats/:yearId, http);
// clubsRouter.get(/:id/results, http);
// clubsRouter.get(/:id/results/:yearId, http);
// clubsRouter.get(/:id/players, http);
// clubsRouter.get(/:id/players/:playerId, http);

module.exports = clubsRouter;
