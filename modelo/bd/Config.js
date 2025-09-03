// config/Config.js
// bd/Config.js
require('dotenv').config();

module.exports = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'postgres',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_NAME: process.env.DB_NAME || 'tu_base_de_datos',
    DB_PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
};