import express from 'express'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';
import colors from 'colors';

dotenv.config();

connectDB();

const app = express();

app.get('/api/products', (req, res) => {
    res.json(products)
});

app.get('/api/product/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id);
    res.json(product)
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server up and running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold));