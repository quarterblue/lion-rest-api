require('dotenv').config();

const Club = require('../models/clubs.model');
const db = require('../helpers/db');

const { clubs } = require('../clubs.examples');

async function hello() {
  await db.connectDb();
  for (let club of clubs) {
    const cluby = new Club(club);
    try {
      const savedClub = await cluby.save();
    } catch (err) {
      console.log(err);
    }
  }
}

hello();
