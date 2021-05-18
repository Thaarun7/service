import express from 'express';
import {
	getBrochures,
	getBrochureById,
} from '../controller/brochureController.js';

const router = express.Router();

router.route('/').get(getBrochures);
router.route('/:id').get(getBrochureById);

export default router;
