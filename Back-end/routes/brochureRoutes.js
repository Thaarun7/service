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

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const borchure = await Brochure.findById(req.params.id);

		if (borchure) {
			res.json(borchure);
		} else {
			res.status(404);
			throw new Error('borchure not found');
		}
	})
);

export default router;
