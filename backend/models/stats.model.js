const mongoose = require('mongoose');

// const statsOverall = [
//   {
//     id: 1,
//     club: 'Arsenal',
//     matchesPlayed: 1114,
//     wins: 597,
//     losses: 236,
//     goals: 1956,
//     goalsConceded: 1100,
//     cleanSheets: 423,
//   },
// ];

// // clubsRouter.get(/:id/stats/current, http);
// const statsCurrent = [
//   {
//     id: 20,
//     club: 'Arsenal',
//     season: '2020/2021',
//     matchesPlayed: 38,
//     wins: 18,
//     losses: 13,
//     goals: 55,
//     goalsConceded: 39,
//     cleanSheets: 12,
//     rank: '8',
//   },
// ];

const clubStatsSchema = new mongoose.Schema({
  id: Number,
  name: String,
  matches_played: Number,
  wins: Number,
  losses: Number,
  goals_scored: Number,
  goals_conceded: Number,
  clean_sheets: Number,
});

const ClubStats = mongoose.model('clubstats', clubStatsSchema);

module.exports = ClubStats;
