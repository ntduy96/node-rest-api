const mongoose = require('mongoose');

/**
 * Open a connection to the `test` database on MongoDB Atlas
 */
mongoose.connect('mongodb+srv://myTester:'+ process.env.MONGO_ATLAS_PSW +'@node-rest-shop-wzzlz.mongodb.net/test');

const db = mongoose.connection;

// Notify if connection error occurs
db.on('error', console.error.bind(console, 'connection error:'));

// Notify if connect database successfully
db.once('open', () => {
  console.log('====================================');
  console.log('Mongo Atlas Connected');
  console.log('====================================');
});
