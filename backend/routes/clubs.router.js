const express = require('express');

const {
  getAllClubs,
  getSingleClub,
} = require('../controllers/clubs.controller');

const clubsRouter = express.Router();

clubsRouter.get('/', getAllClubs);
clubsRouter.get('/:id', getSingleClub);

// clubsRouter.get(/:id/stats, http);
// clubsRouter.get(/:id/stats/:yearId, http);
// clubsRouter.get(/:id/results, http);
// clubsRouter.get(/:id/results/:yearId, http);
// clubsRouter.get(/:id/players, http);
// clubsRouter.get(/:id/players/:playerId, http);

module.exports = clubsRouter;
