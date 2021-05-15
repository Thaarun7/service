import express from 'express';
import dotenv from 'dotenv';
import brochures from './data/brochure.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
	res.send('API is running...');
});

app.get('/api/brochures', (req, res) => {
	res.json(brochures);
});

// app.get('/api/products/:id', (req, res) => {
// 	const product = products.find((p) => p._id == req.params.id);
// 	res.json(product);
// });

const PORT = process.env.PORT || 5000;

app.listen(
	5000,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
