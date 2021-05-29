const clubs = require('../../data/example');

function httpGetAllClubs(req, res) {
  console.log(clubs);
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
