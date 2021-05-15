import express from 'express';
import Brochure from '../models/brochureModel.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const brochures = await Brochure.find({});

		res.json(brochures);
	})
);

export default router;
