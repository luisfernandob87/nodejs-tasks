const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  port: 5432,
  database: 'tasks',
  logging: false,
});

module.exports = { db, DataTypes };
