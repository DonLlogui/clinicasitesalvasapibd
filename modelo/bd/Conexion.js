const { Pool } = require('pg');
const Config = require('./Config');

const pool = new Pool({
    host: Config.DB_HOST,
    user: Config.DB_USER,
    password: Config.DB_PASSWORD,
    database: Config.DB_NAME,
    port: Config.DB_PORT,
    max: 10,               // Máximo de conexiones en el pool
    idleTimeoutMillis: 30000, // Tiempo de espera para liberar una conexión
    connectionTimeoutMillis: 2000 // Tiempo máximo de espera para conectar
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};