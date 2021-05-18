import asyncHandler from 'express-async-handler';
import Brochure from '../models/brochureModel.js';

const getBrochures = asyncHandler(async (req, res) => {
	const brochures = await Brochure.find({});

	res.json(brochures);
});

const getBrochureById = asyncHandler(async (req, res) => {
	const brochure = await Brochure.findById(req.params.id);

	if (brochure) {
		res.json(brochure);

        
	} else {
		res.status(404);
		throw new Error('brochure not found');
	}
});

export { getBrochures, getBrochureById };
