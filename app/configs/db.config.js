const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.dbname, env.username, env.password, {
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
 
db.DbData = require('../models/dbdata.model.js')(sequelize, Sequelize);
 
module.exports = db;