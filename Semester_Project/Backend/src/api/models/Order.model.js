import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
	customerName: String,
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	cart: [
		{
			productId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Product' },
			quantity: Number,
			priceId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Price' },
		},
	],
})

const Order = mongoose.model('Order', orderSchema)

export default Order
