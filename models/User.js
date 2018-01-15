const Sequelize = require('sequelize');
const connection = require('../connection');

/**
 * User model
 * @typedef User
 * @property {String} userId - user id
 * @property {String} name - user full name
 * @property {String} username - username
 * @property {String} email - email
 * @property {String} idCardNum - id card number
 * @property {String} phone - phone number
 * @property {String} address - address
 * @property {String} avatarUrl - user's avatar url
 * @property {String} password - account password
 */
const User = connection.define('user', {
  userId: { type: Sequelize.STRING, primaryKey: true, field: 'user_id' },
  name: { type: Sequelize.STRING, allowNull: false },
  username: { type: Sequelize.STRING, allowNull: false, unique: true },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  },
  idCardNum: {
    type: Sequelize.STRING,
    field: 'id_card_num',
    allowNull: false,
    unique: true,
    validate: { len: [9, 12] }
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: { len: [10, 11] }
  },
  address: { type: Sequelize.STRING, allowNull: false },
  avatarUrl: {
    type: Sequelize.STRING,
    field: 'avatar_url',
    validate: { isUrl: true }
  },
  password: { type: Sequelize.CHAR(128), allowNull: false }
});

module.exports = User;
