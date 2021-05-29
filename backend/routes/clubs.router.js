const express = require('express');

const {
  httpGetAllClubs,
  httpGetSingleClub,
} = require('../controllers/clubs.controller');

const clubsRouter = express.Router();

clubsRouter.get('/', httpGetAllClubs);
clubsRouter.get('/:id', httpGetSingleClub);

// teamsRouter.get('/', () => ):

module.exports = clubsRouter;
