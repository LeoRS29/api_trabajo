const { Sequelize } = require('sequelize');
const {config} = require('./../config/config.js');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI =`${config.dbCluster}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.database}`;

const sequelize = new Sequelize (URI, {
    Dialect: process.env.dbCluster,
    logging: false,
});

sequelize.sync();
module.exports = sequelize;