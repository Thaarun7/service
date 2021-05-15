import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import brochureRoutes from './routes/brochureRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
	res.send('API is running...');
});
app.use('/api/brochures', brochureRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
	5000,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
