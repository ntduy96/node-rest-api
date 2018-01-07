const mongoose = require('mongoose');

/**
 * Open a connection to the `test` database on MongoDB Atlas
 */
// Change connection uri due to MongoDB Atlas database running on version 3.4.10
mongoose.connect('mongodb://myTester:' + process.env.MONGO_ATLAS_PSW + '@node-rest-shop-shard-00-00-wzzlz.mongodb.net:27017,node-rest-shop-shard-00-01-wzzlz.mongodb.net:27017,node-rest-shop-shard-00-02-wzzlz.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin');

const db = mongoose.connection;

// Notify if connection error occurs
db.on('error', console.error.bind(console, 'connection error:'));

// Notify if connect database successfully
db.once('open', () => {
  console.log('====================================');
  console.log('Mongo Atlas Connected');
  console.log('====================================');
});
