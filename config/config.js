require('dotenv').config();

const config = {

    env: process.env.NODE_ENV || 'dev',
    apiPort: process.env.API_PORT || 3001,
    corsIp: process.env. CORS_IP,
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.PASS,
    database: process.env.DB,
    dbPort : process.env.DB_PORT,
    dbCluster: process.env.CLUSTER,
    corsIpDefault:process.env.CORS_IP
}

module.exports = {config};