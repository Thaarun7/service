import mongoose from 'mongoose';

const brochureSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		heading: {
			type: String,
			required: true,
		},

		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

const Brochure = mongoose.model('Brochure', brochureSchema);

export default Brochure;
