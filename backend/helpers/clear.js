require('dotenv').config();

const db = require('../helpers/db');

const clear = async () => {
  try {
    console.log('[clear]: running...');
    await db.connectDb;

    const clubs = await db.clubs.find({}).toArray();

    if (clubs.length > 0) {
      await db.clubs.drop();
    }
  } catch (err) {
    console.log(err);
  }
};

clear();
