const express = require('express');
require('dotenv').config();
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json()); 

// PostgreSQL client configuration
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
