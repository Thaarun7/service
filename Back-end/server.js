const express = require('express');

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
	PORT,
	console.log(`Server running in developer mode on port 5000`)
);
