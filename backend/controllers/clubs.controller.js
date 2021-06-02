const Club = require('../models/clubs.model');
// const options = require('../helpers/options');

async function getAllClubs(req, res) {
  await Club.find({}, null, null, (err, clubs) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: 'Server query error.',
      });
    }
    return res.json(clubs);
  });
}

async function getSingleClub(req, res) {
  const id = req.params.id;

  await Club.find({ id: id }, (err, club) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: 'Cannot find club',
      });
    } else {
      return res.json(club);
    }
  });
  console.log(id);
  return res.status(200).json([clubs[id]]);
}

function getSingleClubOverallStats(req, res) {}
function getSingleClubYearlyStats(req, res) {}
function getSingleClubCurrentResults(req, res) {}
function getSingleClubYearlyResults(req, res) {}
function getSingleClubPlayers(req, res) {}
function getSingleClubSinglePlayer(req, res) {}

module.exports = {
  getAllClubs,
  getSingleClub,
};
