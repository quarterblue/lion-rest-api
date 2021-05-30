// Clubs Model
const mongoose = rquire('mongoose');

const clubSchema = new mongoose.Schema({
  id: Number,
  name: String,
  stadium: String,
  official_site: String,
  logo_img: String,
  nick_names: Array,
  founded: Number,
  capacity: Number,
  owner: Array,
  manager: String,
  rank: Number,
});

const Club = mongoose.model('clubs', clubSchema);

module.exports = Club;
