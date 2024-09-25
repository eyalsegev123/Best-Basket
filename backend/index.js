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
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Connect to the database (optional for pool)
pool.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));

// Sample endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Best Basket API!');
});

// Endpoint to get all products
app.get('/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Endpoint to add a new product
app.post('/products', async (req, res) => {
    const { name, price, company_id } = req.body; // Expect these fields in the request body
    try {
        const result = await pool.query('INSERT INTO products (name, price, company_id) VALUES ($1, $2, $3) RETURNING *', [name, price, company_id]);
        res.status(201).json(result.rows[0]); // Respond with the newly added product
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Endpoint to update a product
app.put('/products/:id', async (req, res) => {
    const productId = req.params.id;
    const { name, price, company_id } = req.body;
    try {
        const result = await pool.query('UPDATE products SET name = $1, price = $2, company_id = $3 WHERE id = $4 RETURNING *', [name, price, company_id, productId]);
        if (result.rowCount === 0) {
            return res.status(404).send('Product not found');
        }
        res.json(result.rows[0]); // Respond with the updated product
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Endpoint to delete a product
app.delete('/products/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        const result = await pool.query('DELETE FROM products WHERE id = $1', [productId]);
        if (result.rowCount === 0) {
            return res.status(404).send('Product not found');
        }
        res.status(204).send(); // No content response for successful deletion
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
