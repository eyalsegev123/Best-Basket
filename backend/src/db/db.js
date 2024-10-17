// db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'eyalsegev', // Your PostgreSQL username
    host: 'localhost', // Your PostgreSQL host
    database: 'best_basket', // Your database name
    password: '', // Leave empty if you're using 'trust' authentication
    port: 5432, // Default PostgreSQL port
});

module.exports = pool;
