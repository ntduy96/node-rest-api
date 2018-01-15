const Sequelize = require('sequelize');

/**
 * MySQL database connection
 */
// set up a connection
const sequelize = new Sequelize('test', 'mytester', process.env.dbPass, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    underscored: true,
    underscoredAll: true,
    freezeTableName: true
  }
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
