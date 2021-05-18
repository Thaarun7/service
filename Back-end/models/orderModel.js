import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		orderItems: [
			{
				name: { type: String, required: true },
				price: { type: Number, required: true },
				brochure: {
					type: mongoose.Schema.Types.ObjectId,
					required: true,
					ref: 'Brochure',
				},
			},
		],
		serviceDetail: {
			brand: { type: String, required: true },
			model: { type: String, required: true },
			regNumber: { type: Number, required: true },
			mobileNumber: { type: Number, required: true },
			additionalIssue: { type: String, require: true },
		},
		taxPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},
		serviceCharge: {
			type: Number,
			required: true,
			default: 0.0,
		},
		totalPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},
		isPaid: {
			type: Boolean,
			required: true,
			default: false,
		},
		paidAt: {
			type: Date,
		},
		isReady: {
			type: Boolean,
			required: true,
			default: false,
		},
		readyAt: {
			type: Date,
		},
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
