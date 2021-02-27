const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
  define: {
    timestamps: false
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.User = require('../models/user.model.js')(sequelize, Sequelize);
 
module.exports = db;