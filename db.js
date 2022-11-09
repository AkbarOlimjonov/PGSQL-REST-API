const PGSQL = require('pg');

const pool = new PGSQL.Pool({
    username:"postgres",
    password: 1234,
    host: 'localhost',
    port: 5432,
    database: "restApi"
});


module.exports = pool;