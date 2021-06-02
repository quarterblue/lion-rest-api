const clubs = require('../../data/example');
// const options = require('../helpers/options');

function httpGetAllClubs(req, res) {
  console.log(clubs);
  return res.status(200).json(clubs);
}

function getAllClubs(req, res) {
  return res.status(200).json(clubs);
}

function httpGetSingleClub(req, res) {
  const id = req.params.id;
  console.log(id);
  return res.status(200).json([clubs[id]]);
}

module.exports = {
  httpGetAllClubs,
  httpGetSingleClub,
};
