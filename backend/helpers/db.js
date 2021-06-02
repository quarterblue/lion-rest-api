const mongoose = require('mongoose');

const database_url =
  process.env.DATABASE_URL || 'mongodb://localhost:27017/epl';

async function connectDb() {
  return mongoose
    .connect(database_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('[MongoDB]: Database Connected.');
      return true;
    })
    .catch((err) => {
      console.log('Error: Could not connect to database', err);
      return false;
    });
}

exports.connectDb = connectDb;
