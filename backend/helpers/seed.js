require('dotenv').config();

const Club = require('../models/clubs.model');
const ClubStats = require('../models/stats.model');
const db = require('../helpers/db');

const { clubs, statsOverall } = require('../clubs.examples');

async function loadClubs() {
  for (let club of clubs) {
    const cluby = new Club(club);
    try {
      await cluby.save();
    } catch (err) {
      console.log(err);
    }
  }
}

async function loadClubStats() {
  for (let stats of statsOverall) {
    const staty = new ClubStats(stats);
    try {
      await staty.save();
    } catch (err) {
      console.log(err);
    }
  }
}

async function loadClubResults() {}

async function init() {
  await db.connectDb();
  // loadClubs();
  loadClubStats();
  // loadClubResults();
}

init();
